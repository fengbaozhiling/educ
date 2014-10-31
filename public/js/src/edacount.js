define(function(require, exports, module) {
	var swfobject = require('./swfobject');
	var dot = require('./dot');
	if (!isOldPwd) {
		EDUCAT.ShowMiNiTooltip($("#pwdBox"), "SETTING_PWD_TOOLTIP", "请设置你的登录密码", 0, 1);
	}
	
	EDUCAT.EditUserName = function() {
		$("#userNameBox").html(EDUCAT.Template($("#editUserNameTpl").html()));
		EDUCAT.FormatAppendHtml();
	}

	EDUCAT.SaveUserName = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);

		var query = new Object();
		query.user_name = $.trim(form.user_name.value);

		var len = EDUCAT.getStringLength(query.user_name);

		if (len == 0 || query.user_name == userName) {
			EDUCAT.ShowMiNiTooltip($(form.user_name), "SETTING_FORM_TOOLTIP", "请输入要更新的名称", 0, 1);
			form.user_name.focus();
			return;
		}

		if (len < 2 || len > 20) {
			EDUCAT.ShowMiNiTooltip($(form.user_name), "SETTING_FORM_TOOLTIP", "帐号由2~20个字符组成，每个中文字算2位字符", 0, 1);
			form.user_name.focus();
			return;
		}

		var reg = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
		if (!reg.test(query.user_name)) {
			EDUCAT.ShowMiNiTooltip($(form.user_name), "SETTING_FORM_TOOLTIP", "帐号仅支持中文、数字、字母、下划线", 0, 1);
			form.user_name.focus();
			return;
		}

		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=settings&a=updateName",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					userName = query.user_name;
					EDUCAT.CloseUserName();
				} else if (result.status == -1) {
					EDUCAT.ShowMiNiTooltip($(form.user_name), "SETTING_FORM_TOOLTIP", "你在30天内已经修改过帐号名称", 0, 1);
				} else {

					EDUCAT.ShowMiNiTooltip($(form.user_name), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新帐号名称失败", 0, 1);
			}
		});
	}

	EDUCAT.CloseUserName = function() {
		$("#userNameBox").html(EDUCAT.Template($("#userNameTpl").html()));
	}

	EDUCAT.EditUserEmail = function() {
		
		$("#userEmailBox").html(EDUCAT.Template($("#editUserEmailTpl").html()));
		EDUCAT.FormatAppendHtml();
	}

	EDUCAT.SaveUserEmail = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);

		var query = new Object();
		query.email = $.trim(form.email.value);

		if (query.email == '' || !EDUCAT.checkEmail(query.email)) {
			EDUCAT.ShowMiNiTooltip($(form.email), "SETTING_FORM_TOOLTIP", "请输入正确的登陆邮箱", 0, 1);
			form.user_name.focus();
			return;
		}

		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updateEmail",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					if (0 == 1) {
						location.href = "/index.php?m=user&a=activateEmail";
					} else {
						userEmail = query.email;
						EDUCAT.CloseUserEmail();
					}
				} else if (result.status == -1) {
					EDUCAT.ShowMiNiTooltip($(form.email), "SETTING_FORM_TOOLTIP", "你在30天内已经修改过登陆邮箱", 0, 1);
				} else {

					EDUCAT.ShowMiNiTooltip($(form.email), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新登陆邮箱失败", 0, 1);
			}
		});
	}

	EDUCAT.CloseUserEmail = function() {
		$("#userEmailBox").html(EDUCAT.Template($("#userEmailTpl").html()));
	}

	EDUCAT.EditAvatar = function() {
		$("#avatarBox").html($("#editAvatarTpl").html());
		var flashvars = {
			"siteUrl": SITEURL,
			"image": userAvatarSrc,
			"resourceId": userAvatarId,
			"maxSize": 2,
			"uploadCompleteHandler": "EDUCAT.UpdateComplete"
		};
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "avatarSwf",
			name: "avatarSwf",
			styleclass: "avatar_swf"
		};
		swfobject.embedSWF(SITEURL+"public/swf/avatar.swf", "avatarSwf", "696", "450", "11.5", SITEURL+"public/swf/expressInstall.swf", flashvars, params, attributes);
	}

	EDUCAT.CloseAvatarSwf = function() {
		var data = new Object();
		data.avatar = userAvatarSrc;
		$("#avatarBox").html(EDUCAT.Template($("#avatarTpl").html(), data));
	}

	EDUCAT.UpdateComplete = function(data) {
		var query = new Object();
		query.rid = data.id;
		query.data = data.data;
		$("#avatarSwf").get(0).UploadLoadingTip(0x000000, "更新数据中，请稍候...", true);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updateAvatar",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				if (result.status == 1) {
					userAvatarSrc = data.src;
					userAvatarId = data.id;
					$("#avatarSwf").get(0).UploadLoadingTip(0x0000ff, "更新成功", false);
				} else {
					$("#avatarSwf").get(0).UploadLoadingTip(0xff0000, "保存数据失败", false);
				}
			},
			error: function() {
				$("#avatarSwf").get(0).UploadLoadingTip(0xff0000, "保存数据失败", false);
			}
		});
	}
	
	EDUCAT.EditPwd = function() {
		$("#pwdBox").html(EDUCAT.Template($("#editPwdTpl").html()));
		EDUCAT.FormatAppendHtml();
	}

	EDUCAT.SavePwd = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);

		var query = new Object();
		if (isOldPwd) {
			query.old_pwd = $.trim(form.old_pwd.value);
		}
		query.new_pwd = $.trim(form.new_pwd.value);
		query.conform_pwd = $.trim(form.conform_pwd.value);

		var len;
		if (isOldPwd) {
			len = query.old_pwd.length;
			if (len < 6 || len > 30) {
				EDUCAT.ShowMiNiTooltip($(form.old_pwd), "SETTING_FORM_TOOLTIP", "请输入正确的原密码", 0, 1);
				form.old_pwd.focus();
				return;
			}
		}

		len = query.new_pwd.length;
		if (len < 6 || len > 30) {
			EDUCAT.ShowMiNiTooltip($(form.new_pwd), "SETTING_FORM_TOOLTIP", "密码由6~30个字符组成", 0, 1);
			form.new_pwd.focus();
			return;
		}

		if (query.new_pwd != query.conform_pwd) {
			EDUCAT.ShowMiNiTooltip($(form.conform_pwd), "SETTING_FORM_TOOLTIP", "两次输入的密码不一致", 0, 1);
			form.conform_pwd.focus();
			return;
		}

		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updatePwd",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					isOldPwd = true;
					EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新密码成功", 0, 1);
				} else {
					if ($(form[result.field]).length > 0) EDUCAT.ShowMiNiTooltip($(form[result.field]), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
					else EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新密码失败", 0, 1);
			}
		});
	}

	EDUCAT.ClosePwd = function() {
		$("#pwdBox").html($("#pwdTpl").html());
	}
	//更新简介
	EDUCAT.EditIntroduce = function() {
		$("#introduceBox").html(EDUCAT.Template($("#editIntroduceTpl").html()));
		EDUCAT.FormatAppendHtml();
	}
	EDUCAT.SaveIntroduce = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);

		var query = new Object();
		query.introduce = $.trim(form.introduce.value).replace(/[\f\n\r\t\v]/g, "");

		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updateIntroduce",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					userIntroduce = query.introduce;
					EDUCAT.CloseIntroduce();
				} else {
					EDUCAT.ShowMiNiTooltip($(form.introduce), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新简介失败", 0, 1);
			}
		});
	}
	
	EDUCAT.CloseIntroduce = function() {
		$("#introduceBox").html(EDUCAT.Template($("#introduceTpl").html()));
	}
	
	//更新地址模块
	EDUCAT.EditYouaddress = function() {
		$("#youaddressBox").html(EDUCAT.Template($("#editYouaddressTpl").html()));
		EDUCAT.FormatAppendHtml();
	//	alert(Youaddress.province);
	//	new PCAS("province","city","area",Youaddress.province,Youaddress.city,Youaddress.area);
		EDUCAT.BindCity($('select[name=province]'),$('select[name=city]'),Youaddress.province,Youaddress.city);
		
	}
	EDUCAT.SaveYouaddress = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);
		var query = new Object();
		query.province = form.province.value;
		query.city = form.city.value;
		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updateAddress",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					Youaddress = query;
					EDUCAT.CloseYouaddress();
				} else {
					EDUCAT.ShowMiNiTooltip($(form.city), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新地址失败", 0, 1);
			}
		});
	}
	
	EDUCAT.CloseYouaddress = function() {
		$("#youaddressBox").html(EDUCAT.Template($("#YouaddressTpl").html()));
	}
	
	EDUCAT.EditGoodat = function() {
		$("#goodatBox").html(EDUCAT.Template($("#editGoodatTpl").html()));
		EDUCAT.FormatAppendHtml();
		//new PCAS("province","city","area",Youaddress.province,Youaddress.city,Youaddress.area);
	}
	EDUCAT.SaveGoodat = function(btn) {
		var self = $(btn);
		var jqForm = self.parents("form");
		var form = jqForm.get(0);

		var query = new Object();
		query.expertise = $.trim(form.expertise.value).replace(/[\f\n\r\t\v]/g, "");

		EDUCAT.ShowMiniLoading(jqForm);
		$.ajax({
			url: SITEURL + "index.php?m=uc&a=updateExperitse",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(jqForm);
				if (result.status == 1) {
					userGoodat = query.expertise;
					EDUCAT.CloseGoodat();
				} else {
					EDUCAT.ShowMiNiTooltip($(form.expertise), "SETTING_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(jqForm);
				EDUCAT.ShowMiNiTooltip(self, "SETTING_FORM_TOOLTIP", "更新擅长领域失败", 0, 1);
			}
		});
	}
	
	EDUCAT.CloseGoodat = function() {
		$("#goodatBox").html(EDUCAT.Template($("#GoodatTpl").html()));
	}
});