define(function(require, exports, module) {
	var login = require('./login');
	var dialog = require('./dialog/1.0.0/dialog-plus');
	var form = require('./formvalidat/1.0.0/form_and_validation');
	//声明登录窗口
	var forgetbox,
		phoneStep2,
		phoneStep3,
		emailStep2,
		emailStep4;
	var forgethtml=null,
		phonehtml2=null,
		phpnehtml3=null,
		emailtml2=null,
		emailtml4=null;
		
	forgetbox = function () {
		var b=null;
		if (forgethtml==null) {
			forgethtml=$.ajax({
				type: "GET",
				url: SITEURL + "ajax/forget-step-1.php",
				async:false,
				dataType: "html"
			}).responseText;
		}
		b= dialog({
			id:'forgetbox',
			title:'忘记密码',
			content: forgethtml,
			width :520,
			padding:0
		})
		return b;
	}
	
	phoneStep2 = function () {
		var b=null;
		if (phonehtml2==null) {
			phonehtml2=$.ajax({
				type: "GET",
				url: SITEURL + "ajax/forget-step-phone-2.php",
				async:false,
				dataType: "html"
			}).responseText;
		}
		b= dialog({
			id:'box_forgt_phone_2',
			title:'手机找回-修改密码',
			content: phonehtml2,
			width :520,
			padding:0
		})
		return b;
	}
	
	phoneStep3 = function () {
		var b=null;
		if (phpnehtml3==null) {
			phpnehtml3=$.ajax({
				type: "GET",
				url: SITEURL + "ajax/forget-step-phone-3.php",
				async:false,
				dataType: "html"
			}).responseText;
		}
		b= dialog({
			id:'box_forgt_phone_3',
			title:'手机找回-修改成功',
			content: phpnehtml3,
			okValue: '返回登录框',
			ok: function () {
				var that = this;
				that.close().remove();
				login.loginbox().showModal();
				return false;
			},
			width :520,
			padding:0
		})
		return b;
	}
	
	
	emailStep2 = function () {
		var b=null;
		if (emailtml2==null) {
			emailtml2=$.ajax({
				type: "GET",
				url: SITEURL + "ajax/forget-step-email-2.php",
				async:false,
				dataType: "html"
			}).responseText;
		}
		b= dialog({
			id:'box_forgt_email_2',
			title:'邮箱找回-确认邮箱',
			content: emailtml2,
			okValue: '登录邮箱',
			ok: function () {
				//写上登录邮箱的JS
				return false;
			},
			width :520,
			padding:0
		})
		return b;
	}
	
	emailStep4 = function () {
		var b=null;
		if (emailtml4==null) {
			emailtml4=$.ajax({
				type: "GET",
				url: SITEURL + "ajax/forget-step-email-4.php",
				async:false,
				dataType: "html"
			}).responseText;
		}
		b= dialog({
			id:'box_forgt_email_2',
			title:'邮箱找回-修改成功',
			content: emailtml4,
			okValue: '返回登录框',
			ok: function () {
				var that = this;
				that.close().remove();
				login.loginbox().showModal();
				return false;
			},
			width :520,
			padding:0
		})
		return b;
	}

	
	$(document).on("click",'#j-forgetab span',function() {
		var rel = $(this).attr("rel");
		$(this).addClass("crent").siblings().removeClass("crent");
		$("." + rel).show().siblings(".forgetbox").hide();
		$("." + rel).show().siblings(".forgtstep").hide();
	});
	
   	$(document).on("click","#j-forget",function(){
		login.loginbox().close().remove();
		forgetbox().showModal();
		form.form_valid();
		EDUCAT.placeholder("input");
		return false;
	}).on("click","#j-fgclose",function(){
		forgetbox().close().remove();
		return false;
	}).on("click","a[data='j-backloginbox']",function(){
		login.loginbox().showModal();
		forgetbox().close().remove();
		return false;
	}).on("click","#forgt_phone_1",function(){
		phoneStep2().close().remove();
		//通过手机找回
		forgetbox().showModal();
		form.form_valid();
		return false;
	}).on("click","#forgt_phone_2",function(){
		forgetbox().close().remove();
		//通过手机找回
		phoneStep2().showModal();
		form.form_valid();
		return false;
	}).on("click","#forgt_phone_3",function(){
		phoneStep2().close().remove();
		//通过手机找回
		phoneStep3().showModal();
		form.form_valid();
		return false;
	}).on("click","#forgt_email_2",function(){
		forgetbox().close().remove();
		//通过手机找回
		emailStep2().showModal();
		return false;
	}).on("click","#forgt_email_4",function(){
		//通过手机找回
		emailStep4().showModal();
		return false;
	})
})