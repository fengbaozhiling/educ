define(function(require, exports, module) {
	var edstyle = require('./edstyle');
	var form = require('./formvalidat/1.0.0/form_and_validation');
	var jform = require('./jquery.form');
	var dot = require('./dot');

	$("#authEmailForm").length && $("#authEmailForm").submit(function() {
		form = this;
		var query = new Object();
		query.email = $.trim(form.email.value);
		EDUCAT.ShowMiniLoading($(form));
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=sendemail",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading($(form));
				if (result.status == 1) {
					location.href = result.url;
				}else {
					EDUCAT.ShowMiNiTooltip($(form.email), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					var msgArea = $(form.email).attr("msgArea");
					$("#" + msgArea).removeClass('valid_info').removeClass('valid_success').addClass('valid_error');
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading($(form));
				EDUCAT.ShowMiNiTooltip($(form), "SETTING_FORM_TOOLTIP", "非法请求，请重新登录", 0, 1);
			}
		});
			return false;
	});
	EDUCAT.sendCode=function(){
		var _this = $(this);
		$('span.valid_error').html(" ").removeClass('valid_error');
		var mobile = $.trim($('#auth_mobile').val());
		if (mobile == '' || mobile == $('#auth_mobile').attr('placeholder')) {
			$('#auth_mobile').focus();
			EDUCAT.ShowMiNiTooltip($('#auth_mobile'), "COURSE_BASICS_TOOLTIP", '手机号码不能为空', 0, 1);
			return false;
		}
		var query = new Object();
		query.mobile = mobile;
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=sendmobilecode",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				if (result.status == 1) {
				_this.html("<i id='num'>60</i>后重新发送");
				_this.unbind("click"),
				stopTime=setTimeout(EDUCAT.resetPhoneSendStatus, 1000);
				}else {
					clearTimeout(stopTime);
					EDUCAT.ShowMiNiTooltip($("#auth_mobile"), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					var msgArea = $('#auth_mobile').attr("msgArea");
					$("#" + msgArea).removeClass('valid_info').removeClass('valid_success').addClass('valid_error');
				}
			},
			error: function() {
				EDUCAT.ShowMiNiTooltip(_this.closest('form'), "SETTING_FORM_TOOLTIP", "非法请求，请重新登录", 0, 1);
			}
		});
		return false;
	}
	$("a.mobile_code").click(EDUCAT.sendCode);
	$("#authMobileForm").length && $("#authMobileForm").submit(function() {
		form = this;
		$('span.valid_error').html(" ").removeClass('valid_error');
		var mobile = $.trim(form.mobile.value);
		if (mobile == '' || mobile == $(form.mobile).attr('placeholder')) {
			form.mobile.focus();
			EDUCAT.ShowMiNiTooltip($(form.mobile), "COURSE_BASICS_TOOLTIP", '手机号码不能为空', 0, 1);
			return false;
		}

		var code=$.trim(form.code.value);
		if (code == '' || code == $(form.code).attr('placeholder')) {
			form.code.focus();
			EDUCAT.ShowMiNiTooltip($(form.code), "COURSE_BASICS_TOOLTIP", '手机验证码不能为空', 0, 1);
			return false;
		}
		var query = new Object();
		query.mobile = $.trim(form.mobile.value);
		query.code = $.trim(form.code.value);
		EDUCAT.ShowMiniLoading($(form));
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=mobileactivate",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading($(form));
				if (result.status == 1) {
					location.href = result.url;
				}else {
					EDUCAT.ShowMiNiTooltip($(form.mobile), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					var msgArea = $(form.mobile).attr("msgArea");
					$("#" + msgArea).removeClass('valid_info').removeClass('valid_success').addClass('valid_error');
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading($(form));
				EDUCAT.ShowMiNiTooltip($(form), "SETTING_FORM_TOOLTIP", "非法请求，请重新登录", 0, 1);
			}
		});
			return false;
	});
	EDUCAT.resetPhoneSendStatus = function(){
		var time = $("#num").text();
		$("#num").text(time - 1);
		if (time < 2) {
			$('#getCode').click(EDUCAT.sendCode).html('重新获取验证码');;
		} else {
			setTimeout(EDUCAT.resetPhoneSendStatus, 1000);
		}
	}
	$("#authRealnameForm").length && $("#authRealnameForm").submit(function() {
		form = this;
		$('span.valid_error').html(" ").removeClass('valid_error');
		var realname = $.trim(form.realname.value);
		if (realname == '' || realname == $(form.realname).attr('placeholder')) {
			form.realname.focus();
			EDUCAT.ShowMiNiTooltip($(form.realname), "COURSE_BASICS_TOOLTIP", '真实姓名不能为空', 0, 1);
			return false;
		}

		var id_card=$.trim(form.id_card.value);
		if (id_card == '') {
			form.id_card.focus();
			EDUCAT.ShowMiNiTooltip($(form.id_card), "COURSE_BASICS_TOOLTIP", '身份证号码不能为空', 0, 1);
			return false;
		}
		var id_pic=$.trim(form.id_pic.value);
		if (id_pic == '') {
			form.id_pic.focus();
			EDUCAT.ShowMiNiTooltip($(form.id_pic), "COURSE_BASICS_TOOLTIP", '未上传身份证正面图片', 0, 1);
			return false;
		}
		var id_pic_back=$.trim(form.id_pic_back.value);
		if (id_pic_back == '') {
			form.id_pic_back.focus();
			EDUCAT.ShowMiNiTooltip($(form.id_pic_back), "COURSE_BASICS_TOOLTIP", '未上传身份证反面图片', 0, 1);
			return false;
		}
		EDUCAT.ShowMiniLoading($(form));
		$(form).ajaxSubmit({
			url: SITEURL + "index.php?m=uc&a=activaterealname",
			type: "POST",
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading($(form));
				if (result.status == 1) {
					location.href = result.url;
				}else {
					EDUCAT.ShowMiNiTooltip($(form[result.field]), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					$("span[id$='msg']").removeClass('valid_info').removeClass('valid_success').addClass('valid_error');
				}
			}
			
		});
			return false;
	});
	$("#authAgencyForm").length && $("#authAgencyForm").submit(function() {
		form = this;
		$('span.valid_error').html(" ").removeClass('valid_error');
		var copname = $.trim(form.copname.value);
		if (copname == '' || copname == $(form.copname).attr('placeholder')) {
			form.copname.focus();
			EDUCAT.ShowMiNiTooltip($(form.copname), "COURSE_BASICS_TOOLTIP", '企业名称不能为空', 0, 1);
			return false;
		}

		var yourname=$.trim(form.yourname.value);
		if (yourname == '') {
			form.yourname.focus();
			EDUCAT.ShowMiNiTooltip($(form.yourname), "COURSE_BASICS_TOOLTIP", '法人姓名不能为空', 0, 1);
			return false;
		}
		var coplicence=$.trim(form.coplicence.value);
		if (coplicence == '') {
			form.coplicence.focus();
			EDUCAT.ShowMiNiTooltip($(form.coplicence), "COURSE_BASICS_TOOLTIP", '营业执照编号不能为空', 0, 1);
			return false;
		}
		var id_pic=$.trim(form.id_pic.value);
		if (id_pic == '') {
			form.id_pic.focus();
			EDUCAT.ShowMiNiTooltip($(form.id_pic), "COURSE_BASICS_TOOLTIP", '未上传身份证正面图片', 0, 1);
			return false;
		}	
		EDUCAT.ShowMiniLoading($(form));
		$(form).ajaxSubmit({
			url: SITEURL + "index.php?m=uc&a=activateagency",
			type: "POST",
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading($(form));
				if (result.status == 1) {
					location.href = result.url;
				}else {
					EDUCAT.ShowMiNiTooltip($(form[result.field]), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					$("span[id$='msg']").removeClass('valid_info').removeClass('valid_success').addClass('valid_error');
				}
			}
		});
			return false;
	});
	$('#enter_email').click(function(){
		var email = $('input[name=email]').val();
		var url= "http://"+EDUCAT.gotoEmail(email);
		window.open(url, "_blank", "");
		return false;
	});
	
	EDUCAT.gotoEmail=function($mail) {
		$t = $mail.split('@')[1];
		$t = $t.toLowerCase();
		 if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
			return 'mail.qq.com';
		} else if ($t == 'gmail.com') {
			return 'mail.google.com';
		} else if ($t == '139.com') {
			return 'mail.10086.cn';
		} else if ($t == '139.com') {
			return 'mail.10086.cn';
		} else {
			return 'mail.'+$t;
		}
	};
});