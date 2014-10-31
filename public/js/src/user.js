define(function(require, exports, module) {
	var edstyle = require('./edstyle');
	var login = require('./login');
	var dot = require('./dot');
	var dialog= require('./dialog/1.0.0/dialog-plus');
	var rating=require('./rating/jquery.rating');
	
	//星星评价
	EDUCAT.creatstar($("div[data='j-star']")).each(function(){
		$(this).find(".star").rating()
	});
	/*
	验证手机-获取验证码
	obj 点击的对象；time 间隔时间
	*/
	var cuntdspan=1;//用来判断获取验证码的阶段
	var login_tel=$("#login_tel");
	login_tel.removeAttr("disabled")
	var cuntdown=function (obj,time) {
		var span = $("<span></span>");
		span.attr('class','cuntdown');
		span.attr('id','timecuntdown');
		span.html(time+"秒后可以重新获取");
		span.attr("style","border:1px solid #dfdfdf; background:#f4f4f4; display:inline-block; margin-left:10px; padding:0 10px; border-radius:30px; color:#999;")
		cuntdspan=2;
		if (cuntdspan==2) {
			$(obj).after(span);
			cuntdspan=0;
		}
		$(obj).addClass('disabled');
		login_tel.attr("disabled","disabled");
		var total = time;
		var timecuntdown=$("#timecuntdown");
		EDUCAT.updatime = function(){
			if(total==0){
				cuntdspan=1;
				$(obj).removeClass('disabled');
				timecuntdown.remove();
				login_tel.removeAttr("disabled")
			} else {
				total=total-1;
				timecuntdown.html(total+"秒后可以重新获取");
			}
		}
		setInterval("EDUCAT.updatime()",1000);
	}
	//绑定事件
	$("a[tool='getYanzma']").length && $("a[tool='getYanzma']").on("click",function(){
		if (cuntdspan==1) {
			var error = null;
			if(!isMobileCN($('#login_tel').val()) ) {
				error = "请填写正确的手机号码";
			}
			if ( error ) {
				alert (error);
				return false;
			} else {
				cuntdown ("a[tool='getYanzma']",60);
			}
			
		}
		return false;
	})
	//列表页样式调整
	$("div[data='j-list2']").length && $("div[data='j-list2']").find(".perm").each(function(index, element) {
		var i=$("div[data='j-list2']").find(".perm").index(this);
		if ((i+1)%4==0){
			$("div[data='j-list2']").find(".perm").eq(i).css({"margin-right":"auto"})
		}
	});
	
	/*修改笔记
	thisId，笔记的编号*/
	$("a[data='j-modifynot']").length && seajs.use(['dialog'],function(dialog) {
		$(document).on("click","a[data='j-modifynot']",function(){
			
			var thisId=$(this).attr("noteid");
			var eidithtml=$.ajax({
				type: "GET",
				url: SITEURL + "index.php?m=uc&a=coursenoteedit",
				data:{id:thisId},
				async:false,
				dataType: "html"
			}).responseText;
			var d= dialog({
				id:'noteidit_'+thisId,
				title:'修改笔记',
				content: eidithtml,
				width :280,
				padding:0,
				okValue: '保存修改',
				ok: function () {
					var that = this;
					this.title('正在提交..');
					$.ajax({
						url: SITEURL + "index.php?m=uc&a=coursenoteupdate",
						type: "POST",
						data:{id:thisId,content:$('textarea[name=content]').val()},
						dataType: "json",
						success: function(result){
						if(result.status==1){
							setTimeout(function () {
								that.close().remove();
						}, 2000);
						top.location.reload();
							}else{
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
			d.show();
			return false;
		})
	})
	$("a[data='j-cancellike']").click(function(){
		if(confirm("确定取消收藏")){
			var _this=$(this);
			var cid=_this.data('cid');
			var query = new Object();
			query.cid = cid;
			
			$.ajax({
				url: SITEURL + "index.php?m=uc&a=cancellike",
				type: "POST",
				data:query,
				dataType: "json",
				success: function(result){
					if(result.status==1){
						_this.closest('div.perm').remove();
					}else{
						alert("取消失败，刷新后重试");
					}
				}
			});
		}
		return false;
	});
	
	$("div[data='j-list2']").find('.delRecord').click(function(){
		if(confirm("确定删除该学习记录")){
			var _this=$(this);
			var cid=_this.data('cid');
			var query = new Object();
			query.cid = cid;
			
			$.ajax({
				url: SITEURL + "index.php?m=uc&a=delrecord",
				type: "POST",
				data:query,
				dataType: "json",
				success: function(result){
					if(result.status==1){
						_this.closest('div.perm').remove();
					}else{
						alert("删除失败，刷新后重试");
					}
				}
			});
		}
		return false;
	});
	$("a[data='j-deletnot']").click(function(){
		if(confirm("确定删除该课程笔记")){
			var _this=$(this);
			var id=_this.data('id');
			var query = new Object();
			query.id = id;
			alert();
			$.ajax({
				url: SITEURL + "index.php?m=uc&a=coursenotedel",
				type: "POST",
				data:query,
				dataType: "json",
				success: function(result){
					if(result.status==1){
						_this.closest('div.clfix').remove();
						if($('div.clfix').length==0){
							location.reload();
						}
					}else{
						alert("删除失败，刷新后重试");
					}
				}
			});
		}
		return false;
	});
});