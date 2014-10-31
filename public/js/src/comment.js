define(function(require, exports, module) {
	var edstyle = require('./edstyle');
		var rating=require('./rating/jquery.rating');
	EDUCAT.GetComments = function(cid,lid,page){
		var box = $("#commnetList");
		var query = new Object();
		query.cid = cid;
		query.lid = lid;
		query.page = page;
		
		EDUCAT.ShowLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursescore&a=lists",
			type: "POST",
			data:query,
			cache:false,
			dataType: "html",
			success:function(html){
				EDUCAT.HideLoading(box);
				if(html != "")
				{
					$("#commnetList").html(html);
				}
			},
			error:function(){
				EDUCAT.HideLoading(box);
			}
		});
	}
	//星星评价
	EDUCAT.creatstar($("div[data='j-star']")).each(function(){
		$(this).find(".star").rating()
	});
	EDUCAT.SubmitComment = function(form){
		var jform = $(form);
		
		if(!EDUCAT.checkRequire($.trim(form.content.value)))
		{
			form.content.focus();
			EDUCAT.ShowMiNiTooltip($(form.content),"COMMENT_FORM_TOOLTIP","评论内容不能为空",0,1);
			return false;
		}
		EDUCAT.ShowLoading(jform);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursescore&a=save",
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
					$("#comment"+result.id).remove();
					location.reload();
					EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"COMMENT_FORM_TOOLTIP","评论发表成功",0,2);
				}
				else
				{
					if(result.field == "content")
					{
						EDUCAT.ShowMiNiTooltip($(form.content),"COMMENT_FORM_TOOLTIP",result.msg,0,1);
					}
					else
					{
						EDUCAT.ShowMiNiTooltip($(".current_btn",jform),"COMMENT_FORM_TOOLTIP",result.msg,0,2);
					}
				}
			},
			error:function(){
				EDUCAT.HideLoading(form);
			}
		});
		return false;
	}
	
	EDUCAT.RemoveComment = function(cid,btn){
		var box = $("#comment"+cid);
		var query = new Object();
		query.id = cid;
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursescore&a=delete",
			type: "POST",
			data:query,
			cache:false,
			dataType: "json",
			success:function(result){
				EDUCAT.HideMiniLoading(box);
				if(result.status == 1)
				{
					box.remove();
				}
				else
				{
					EDUCAT.ShowMiNiTooltip($(btn),"COMMENT_FORM_TOOLTIP","删除失败",0,0);
				}
			},
			error:function(){
				EDUCAT.HideMiniLoading(box);
			}
		});
	}

	$("div[data='j-coustab']").length && $("div[data='j-coustab'] span").click(function() {
		var rel = $(this).attr("rel");
		$(this).addClass("crent").siblings().removeClass("crent");
		$(".coustabox").hide();
		$("#" + rel).show();
		$("#" + rel).nextAll().show();
	});
	
/*	$(".coment-tab a").click(function() {
		var rel = $(this).attr("rel");
		$(this).addClass("active").siblings().removeClass("active");
		$(".commtabox").hide();
		$("." + rel).show();
	});*/
/*	$(document).on("click", "#commnetList .pagination a",
	function() {
		var page = $(this).attr("page");
		EDUCAT.GetComments(courseId, 0, page);
	}).on("click", "#askList > .pagination a",
	function() {
		var page = $(this).attr("page");
		EDUCAT.GetAsks(courseId, 0, page);
	}).on("click", "#answerPages a",
	function() {
		var page = $(this).attr("page");
		var aid = $("#answerPages").attr("aid");
		EDUCAT.GetAnswers(aid, page);
	});*/
})