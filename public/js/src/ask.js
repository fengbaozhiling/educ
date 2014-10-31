define(function(require, exports, module) {
EDUCAT.ASK_HANDLER_CALLBACK = null;
(function($){
	EDUCAT.GetAsks = function(cid,lid,page){
		var box = $("#askList");
		var query = new Object();
        query.cid = cid;
		query.lid = lid;
		query.page = page;
		query.pageaction = ACTION_NAME;
			 
        EDUCAT.ShowLoading(box);
        $.ajax({
			url: SITE_PATH + "index.php?m=courseask&a=lists",
			type: "POST",
			data:query,
			cache:false,
			dataType: "html",
			success:function(html){
				EDUCAT.HideLoading(box);
				if(html != "")
				{
					$("#askList").html(html);
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
			},
			error:function(){
				EDUCAT.HideLoading(box);
			}
		});
	}
	
	EDUCAT.SubmitAsk = function(form){
		var jform = $(form);
		
		if(!EDUCAT.checkRequire($.trim(form.content.value)))
		{
			form.content.focus();
			EDUCAT.ShowMiNiTooltip($(form.content),"ASK_FORM_TOOLTIP","问题内容不能为空",0,1);
			return false;
		}
		
		EDUCAT.ShowLoading(jform);
		$.ajax({
			url: SITE_PATH + "index.php?m=courseask&a=save",
			type: "POST",
			data:jform.serialize(),
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideLoading(jform);
				if(result.status == -1)
				{
					EDUCAT.ShowLoginDialog();
				}
				else if (result.status == 1)
				{
					form.content.value = "";
					$("#askList ul").prepend(result.html);
					EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"ASK_FORM_TOOLTIP","问题发表成功",0,2);
					$("#inputMaxlenSpan1").text('200')
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
				else
				{
					if(result.field == "content")
					{
						EDUCAT.ShowMiNiTooltip($(form.content),"ASK_FORM_TOOLTIP",result.msg,0,1);
					}
					else
					{
						EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"ASK_FORM_TOOLTIP",result.msg,0,2);
					}
				}
			},
			error:function(){
				EDUCAT.HideLoading(form);
			}
		});
		return false;
	}
	
	EDUCAT.RemoveAsk = function(aid,btn){
		var box = $("#ask"+aid);
		var query = new Object();
        query.id = aid;
        EDUCAT.ShowMiniLoading(box);
        $.ajax({
			url: SITE_PATH + "index.php?m=courseask&a=delete",
			type: "POST",
			data:query,
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideMiniLoading(box);
				if(result.status == 1)
				{
					box.remove();
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
				else
				{
					EDUCAT.ShowMiNiTooltip($(btn),"ASK_FORM_TOOLTIP","删除失败",0,0);
				}
			},
			error:function(){
				EDUCAT.HideMiniLoading(box);
			}
		});
	}
	
	EDUCAT.AskAnswer = function(aid,btn){
		$("#answerBox").remove();
		var box = $("#ask"+aid);
		if($(btn).hasClass("show_answer"))
		{
			box.removeClass("ask_answer");
			$(btn).removeClass("show_answer");
			{
				EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
			}
			return;	
		}
		$(btn).addClass("show_answer");
		
		$(".ask_answer").removeClass("ask_answer");
		var box = $("#ask"+aid);
		var query = new Object();
        query.aid = aid;
        EDUCAT.ShowMiniLoading(box);
        $.ajax({
			url: SITE_PATH + "index.php?m=courseanswer&a=answer",
			type: "get",
			data:query,
			cache:false,
			dataType: "html",
			success:function(html){
				EDUCAT.HideMiniLoading(box);
				if(html != "")
				{
					box.addClass("ask_answer").append(html);
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
			},
			error:function(){
				EDUCAT.HideMiniLoading(box);
			}
		});
	}
	
	EDUCAT.GetAnswers = function(aid,page){
		var box = $("#answerBox");
		var query = new Object();
        query.aid = aid;
		query.page = page;
		
        EDUCAT.ShowLoading(box);
        $.ajax({
			url: SITE_PATH + "index.php?m=courseanswer&a=lists",
			type: "POST",
			data:query,
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideLoading(box);
				if(result.list)
				{
					$("#answerList").html(result.list);
					$("#answerPages").html(result.pager);
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
			},
			error:function(){
				EDUCAT.HideLoading(box);
			}
		});
	}
	
	EDUCAT.SubmitAnswer = function(form){
		var jform = $(form);
		
		if(!EDUCAT.checkRequire($.trim(form.content.value)))
		{
			form.content.focus();
			EDUCAT.ShowMiNiTooltip($(form.content),"ANSWER_FORM_TOOLTIP","回答内容不能为空",0,1);
			return false;
		}
		
		EDUCAT.ShowMiniLoading(jform);
		$.ajax({
			url: SITE_PATH + "index.php?m=courseanswer&a=save",
			type: "POST",
			data:jform.serialize(),
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideMiniLoading(jform);
				if(result.status == -1)
				{
					EDUCAT.ShowLoginForm();
				}
				else if (result.status == 1)
				{
					form.content.value = "";
					$("#answerBox ul").prepend(result.html);
					EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"ANSWER_FORM_TOOLTIP","回答发表成功",0,2,jform);
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
				else
				{
					if(result.field == "content")
					{
						EDUCAT.ShowMiNiTooltip($(form.content),"ANSWER_FORM_TOOLTIP",result.msg,0,1,jform);
					}
					else
					{
						EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"ANSWER_FORM_TOOLTIP",result.msg,0,2,jform);
					}
				}
			},
			error:function(){
				EDUCAT.HideMiniLoading(form);
			}
		});
		return false;
	}
	
	EDUCAT.RemoveAnswer = function(aid,btn){
		var box = $("#answer"+aid);
		var query = new Object();
        query.id = aid;
        EDUCAT.ShowMiniLoading(box);
        $.ajax({
			url: SITE_PATH + "index.php?m=courseanswer&a=delete",
			type: "POST",
			data:query,
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideMiniLoading(box);
				if(result.status == 1)
				{
					box.remove();
					if(EDUCAT.ASK_HANDLER_CALLBACK != null)
					{
						EDUCAT.ASK_HANDLER_CALLBACK.call(null);	
					}
				}
				else
				{
					EDUCAT.ShowMiNiTooltip($(btn),"ANSWER_FORM_TOOLTIP","删除失败",0,0);
				}
			},
			error:function(){
				EDUCAT.HideMiniLoading(box);
			}
		});
	}
})(jQuery);
	exports.EDUCAT;
});