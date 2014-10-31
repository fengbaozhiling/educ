define(function(require, exports, module) {
	var base = require('./base');
	var edstyle = require('./edstyle');
	var dialog = require('./dialog/1.0.0/dialog-plus');
	var ask = require('./ask');
	var scrollbar = require('./jquery.scrollbar');
	var masonry=require('./jquery.masonry.min');
	var bgiframe=require('./jquery.bgiframe');
	var swfobject=require('./swfobject');
	var comment=require('./comment');
	
	
	
	
	//笔记的瀑布流
	$("#j-note").masonry({
		itemSelector : '.box',
		gutterWidth : 24,
		isAnimated: true
	});
	
	
	//视频播放
	var flashvars = {
		"resourceId": window.video_id,
		"siteUrl": SITEURL,
		"previewImg": IMGURL+"img11.jpg"
	};
	var params = {
		menu: "false",
		wmode: "opaque",
		bgcolor: "0x000000",
		allowscriptaccess: "always",
		allowfullscreen: true
	};
	var attributes = {
		id: "video_box",
		name: "video_box"
	};
	$("#video_box").length && swfobject.embedSWF(SITEURL+"public/swf/640x480.swf", "video_box", "820", "480", "11.5",SITEURL+ "public/swf/expressInstall.swf", flashvars, params, attributes);
	$("#j-study").on("click",function(){
		$(".video-cover").hide();
		return false;
	})
	//切换
	EDUCAT.tabbox ("div[data='j-tabcous']",".m-tabswf span",".box","mouseover",false,"crent",function(){
		$("#askListScrollbar").tinyscrollbar();
	});
	
	$("#askListScrollbar").tinyscrollbar();
	
	EDUCAT.ASK_HANDLER_CALLBACK = function() {
		$("#askListScrollbar").tinyscrollbar_update();
	}
	$(document).on("click", "#askList > .pagination a",function() {
		var page = $(this).attr("page");
		EDUCAT.GetAsks(3, 1, page);
	}).on("click", "#answerPages a",function() {
		var page = $(this).attr("page");
		var aid = $("#answerPages").attr("aid");
		EDUCAT.GetAnswers(aid, page);
	});
	//写笔记
	$("#j-eiditnote").on("click",function(){
		if(!EDUCAT.CheckLogin()){
			return false;
		}
		var cid = $("#cid").val();
		var lid = $("#lid").val()
		var eidithtml=$.ajax({
			type: "GET",
			url: SITEURL + "index.php?m=course&a=note",
			async:false,
			dataType: "html"
		}).responseText;
		d= dialog({
			id:'noteidit',
			title:'写笔记',
			content: eidithtml,
			width :280,
			padding:0,
			okValue: '保存笔记',
			ok: function () {
				var content = $.trim($('#content').val());
				if (content == '') {
				$('textarea[name=content]').focus();
				alert("笔记不能为空");
				return false;
				}
				var that = this;
				this.title('正在提交..');
				var query = new Object();
				query.cid = cid;
				query.lid = lid;
				query.content = content;
				$.ajax({
					url: SITEURL + "index.php?m=course&a=writenote",
					type: "POST",
					data:query,
					dataType: "json",
					success: function(result){
					if(result.status==1){
						setTimeout(function () {
							that.close().remove();
					}, 2000);
					top.location.reload();
						}else{
							that.title('写笔记');
							alert("修改失败，刷新后重试");
						}
					}
			});
				return false;
			},
			cancelValue: '取消',
			cancel: function () {
			}
		})
		d.show(document.getElementById('j-eiditnote'));
		return false;
	})
	
	$(document).delegate("a[data='j-CourseSign']", "click",function(){
		var cid = $(this).attr('data-cid');
		var status = $(this).attr['data-status'];
		EDUCAT.CourseSign(cid,status,this);
		return false;
	});
	$("a[data='j-tostudy']").click(function(){
		var _this = $(this);
		var cid = $(this).attr('data-cid');
		var query =  Object();
			query.cid = cid;
			$.ajax({
				url: SITEURL + "index.php?m=course&a=vodsign",
				type: "POST",
				data:query,
				dataType: "json",
				success: function(result){
					if(result.status==1){
						location.href = _this.attr('data-url');
					}
				}
			});
		return false;
	});
})