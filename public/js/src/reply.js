define(function(require, exports, module) {
	var edstyle = require('./edstyle');
	var dot = require('./dot');
	//站内信列表
	$("div[data='j-sysg']").length && $("div[data='j-sysg'] .tll span").on("click",function(event){
		if ($(this).parents("li").find(".cont").is(":hidden")) {
			if ($(this).parents("li.noread").length>0){
				$(this).parents("li").removeClass("noread");
				var id = $(this).parents("li").data('id');
				$.ajax({
					url: SITEURL + "index.php?m=uc&a=read",
					type: "POST",
					data:{id:id},
					dataType: "json",
					success: function(result){
						if(result['status']==0){
							location.reload();
						}
					}
				});
			}
			$("div[data='j-mesg'] li").find(".cont").hide();
			$(this).parents("li").find(".cont").fadeIn("fast");
		}
	});
	$("div[data='j-sysg'] .sysmsg_remove_btn").on("click",function(event){
		var _this=$(this);
		var id = _this.parents("li").data('id');
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=removeSysmsg",
			type: "POST",
			data:{id:id},
			dataType: "json",
			success: function(result){
				if(result['status']==1){
					_this.closest('li').remove();
					if($('ul').length ==0){
						location.reload(true);
					}
				}
			}
		});
	});
	
	$("div[data='j-mesg']").delegate(".msgi_remove_btn","click",function(event){
		var _this=$(this);
		var miid = _this.attr("miid");
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=removeMsg",
			type: "POST",
			data:{iid:miid},
			dataType: "json",
			success: function(result){
				if(result['status']==1){
					_this.closest('.msg_item').remove();
					if($('#msg_list').length ==0){
						location.reload(true);
					}
				}
			}
		});
	});
	$("#msg_remove_all").on("click",function(event){
		var _this=$(this);
		var mid = _this.attr("mid");
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=removeMsg",
			type: "POST",
			data:{id:mid},
			dataType: "json",
			success: function(result){
				if(result['status']==1){
					location.href = SITEURL + "index.php?m=uc&a=message";
				}
			}
		});
	});
	
	$("div.msg_item .msg_remove_btn").on("click",function(event){
		var _this=$(this);
		var lid = _this.attr("lid");
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=removeMsg",
			type: "POST",
			data:{id:lid},
			dataType: "json",
			success: function(result){
				if(result['status']==1){
					_this.closest('.msg_item').remove();
					if($(".msg_item").length == 0)
					location.reload(true);
				}
			}
		});
	});
	$(".submit").on("click",function(event){
		//$("#replyForm").submit();
		$(this).closest('form').submit();
	});
	EDUCAT.MsgReplySubmit = function(form){
		var box = $(".reply_box");
		$('#create_submit',form).removeClass('submit');
		var message = $.trim(form.message.value);
		if(message == '')
		{
			$('#create_submit',form).addClass('submit');
			form.message.focus();
			EDUCAT.ShowMiNiTooltip($(form.message),"MSG_TOOLTIP","请输入回复的内容",0,1);
			return false;
		}
		
		EDUCAT.ShowLoading(box);
		$.post(SITE_PATH + "index.php?m=uc&a=replyMsg",$(form).serialize(),function(result){
			EDUCAT.HideLoading(box);
			$('#create_submit',form).removeClass('submit');
			if(result.status > 0)
			{
				$("#msg_list").append(EDUCAT.Template($("#msgItemTpl").html(),result));
			}
			else
			{
				EDUCAT.ShowMiNiTooltip($('#create_submit',form),"MSG_TOOLTIP","回复失败",0,1);
			}
		},'json');
		return false;
	}
	EDUCAT.MsgCreateSubmit = function(form){
		var box = $(form);
		$('#create_submit',form).attr("disabled",true);
		
		var user_name = $.trim(form.user_name.value);
		if(user_name == '' || user_name == $(form.user_name).attr('placeholder'))
		{
			$('#create_submit',form).attr("disabled",false);
			form.user_name.focus();
			EDUCAT.ShowMiNiTooltip($(form.user_name),"MSG_TOOLTIP","收信人不能为空",0,1);
			return false;
		}
		
		var message = $.trim(form.message.value);
		if(message == '')
		{
			$('#create_submit',form).attr("disabled",false);
			form.message.focus();
			EDUCAT.ShowMiNiTooltip($(form.message),"MSG_TOOLTIP","请输入信件的内容",0,1);
			return false;
		}
		
		EDUCAT.ShowLoading(box);
		$.post(SITE_PATH + "index.php?m=uc&a=saveMsg",$(form).serialize(),function(result){
			EDUCAT.HideLoading(box);
			$('#create_submit',form).attr("disabled",false);
			if(result.status > 0)
			{
				location.href=SITE_PATH + "index.php?m=uc&a=message";
			}
			else
			{
				if(result.status == -2)
				{
					EDUCAT.ShowMiNiTooltip($(form.user_name),"MSG_TOOLTIP","没有这个会员",0,1);
				}
				else if(result.status == -1)
				{
					EDUCAT.ShowMiNiTooltip($(form.user_name),"MSG_TOOLTIP","只能给粉丝发送信件",0,1);
				}
				else
					EDUCAT.ShowMiNiTooltip($('#create_submit',form),"MSG_TOOLTIP","发送信件失败",0,1);
			}
		},'json');
		return false;
	}
	
	EDUCAT.GetFans = function(page){
		var box = $("#fans_list");
		EDUCAT.ShowLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=uc&a=getFunsList",
			type: "POST",
			data:"page="+page,
			dataType: "html",
			success: function(html){
				EDUCAT.HideLoading(box);
				box.html(html);
			},
			error:function(){
				EDUCAT.HideLoading(box);
			}
		});
	}
	$(document).on('click','#fans_list .pagination a',function(){
		var page = parseInt($(this).attr('page'));
		if(!isNaN(page) && page > 0)
			EDUCAT.GetFans(page);
	}).on('click','#fans_list ul li',function(){
		$("#msg_user_name").val($(this).attr('uname'));
	});
	EDUCAT.GetFans(1);
});