define(function(require, exports, module) {

var userNameAjax = null;
var userEmailAjax = null;

return (function($){
	$.CheckUserEmail = function(obj,force,isAjax){
		var isCheck = obj.getAttribute('check');
		if(isCheck == 1 && !force)
		{
			return true;
		}
		
		if(userEmailAjax != null)
		{
			userEmailAjax.abort();
		}
		
		obj.setAttribute('check',0);
		var email = $.trim(obj.value);
		
		if(email == '')
		{
			$.RegErrHandler(obj,LANG.email_require);
			return;	
		}
		
		if(!EDUCAT.checkEmail(email))
		{
			$.RegErrHandler(obj,LANG.email_error);
			return;
		}
		
		if(isAjax)
		{
			var query = new Object();
			query.field = 'email';
			query.email = email;
			$.RegCheckLoading(obj);
			var result = false;
			userEmailAjax = $.ajax({ 
				url: SITE_PATH+"index.php?m=user&a=check",
				type:"POST",
				data:query,
				cache:true,
				dataType:'json',
				success:function(result){
					userEmailAjax = null;
					if(result.status == 1)
					{
						$.RegOkHandler(obj);
						obj.value = email;
						result = true;
					}
					else
					{
						$.RegErrHandler(obj,LANG.email_error1);
					}
				},
				error:function(){
					userEmailAjax = null;
					$.RegErrHandler(obj,LANG.email_error2);
				}
			});
		}
		
		return result;
	}
	
	$.CheckUserName = function(obj,force,isAjax){
		var isCheck = obj.getAttribute('check');
		if(isCheck == 1 && !force)
		{
			return true;
		}
		
		if(userNameAjax != null)
		{
			userNameAjax.abort();
		}
		
		obj.setAttribute('check',0);
		var username = $.trim(obj.value);
		var len = EDUCAT.getStringLength(username);
		if(len == 0)
		{
			$.RegErrHandler(obj,LANG.user_name_error);
			return;
		}
		
		if(len < 2 || len > 20)
		{
			$.RegErrHandler(obj,LANG.user_name_error1);
			return;
		}
	
		var reg = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
		if(!reg.test(username))
		{
			$.RegErrHandler(obj,LANG.user_name_error2);
			return;
		}
		
		if(isAjax)
		{
			var query = new Object();
			query.field = 'user_name';
			query.user_name = username;
			$.RegCheckLoading(obj);
			var result = false;
			userNameAjax = $.ajax({ 
				url: SITE_PATH+"index.php?m=user&a=check",
				type:"POST",
				data:query,
				dataType:'json',
				cache:true,
				success:function(result){
					userNameAjax = null;
					if(result.status == 1)
					{
						obj.value = username;
						$.RegOkHandler(obj);
						result = true;
					}
					else
					{
						$.RegErrHandler(obj,LANG.user_name_error3);
					}
				},
				error:function(){
					userNameAjax = null;
					$.RegErrHandler(obj,LANG.user_name_error4);
				}
			});
		}
		return result;
	}
	
	$.CheckUserPwd = function(obj,force){
		var isCheck = obj.getAttribute('check');
		if(isCheck == 1 && !force)
		{
			return true;
		}
		
		obj.setAttribute('check',0);
		var password = $.trim(obj.value);
		var len = password.length;
		if(len == 0)
		{
			$.RegErrHandler(obj,LANG.password_error);
			$.RegPasswordChange(true);
			return false;
		}
		
		if(len < 6 || len > 30)
		{
			$.RegErrHandler(obj,LANG.password_error1);
			$.RegPasswordChange(true);
			return false;
		}
		
		obj.value = password;
		$.RegOkHandler(obj);
		$.RegPasswordChange(false);
		return true;
	}
	
	$.CheckUserCPwd = function(obj,force){
		var isCheck = obj.getAttribute('check');
		if(isCheck == 1 && !force)
		{
			return true;
		}
		
		obj.setAttribute('check',0);
		var cpassword = $.trim(obj.value);
		var password = $.trim($("#reg_pwd").val());
		var pcheck = $("#reg_pwd").attr('check');
		pcheck = parseInt(pcheck);
		var len = cpassword.length;
		
		if(password == '' || pcheck == 0)
		{
			$.RegErrHandler(obj,LANG.cpassword_error1);
			return false;
		}
		
		if(len == 0)
		{
			$.RegErrHandler(obj,LANG.cpassword_error2);
			return false;
		}
		
		if(password != cpassword)
		{
			$.RegErrHandler(obj,LANG.cpassword_error);
			return false;
		}
		
		obj.value = cpassword;
		$.RegOkHandler(obj);
		return true;
	}
	
	$.CheckPhone = function(obj){
		if($.trim(obj.value) != '')
		{
			if(!$.checkMobilePhone(obj.value))
			{
				$.RegErrHandler(obj,LANG.phone_error);
				return false;
			}
		}
		
		$.RegOkHandler(obj);
		return true;
	}
	
	$.CheckVerifyCode = function(obj){
		if(EDUCAT.checkRequire(obj.value))
		{
			$.RegOkHandler(obj);
		}
		else
		{
			$.RegErrHandler(obj,LANG.code_error);
			return false;
		}
		return true;
	}
	
	$.RegPasswordChange = function(isError)
	{
		if($("#reg_cpwd").length > 0)
		{
			var obj = $("#reg_cpwd").get(0);
			var istip = obj.getAttribute('istip');
			istip = parseInt(istip);
			if(istip == 1)
			{
				if(isError)
				{
					$.RegErrHandler(obj,LANG.cpassword_error1);
				}
				else
				{
					if($("#reg_pwd").val() != $("#reg_cpwd").val())
						$.RegErrHandler(obj,LANG.cpassword_error2);
				}
			}
		}
	}
	
	$.PwdCheckHandler = function(obj,msg)
	{
		$(obj).next().html(msg).show();
	}
	
	$.RegCheckLoading = function(obj)
	{
		$(obj).siblings(".reg_tip").html('<img src="'+ IMGURL +'form/loading_mini.gif" />');
	}
	
	$.RegOkHandler = function(obj)
	{
		if(obj.getAttribute('check') != null)
		{
			obj.setAttribute('check',1);
			$(obj).siblings(".reg_tip").html('<img src="'+ IMGURL +'form/success.gif" />');
		}
		else
		{
			$(obj).siblings(".reg_tip").html('');
		}
	}

	$.RegErrHandler = function(obj,msg)
	{
		if(obj.getAttribute('check') != null)
		{
			obj.setAttribute('check',0);
		}
		$(obj).siblings(".reg_tip").removeClass("reg_tip1");
		
		if(msg.indexOf("<br/>") > -1)
		{
			$.ShowMiNiTooltip($(obj),"REG_FORM_TOOLTIP",msg,0,1);
			$(obj).siblings(".reg_tip").html('<img src="'+ IMGURL +'form/error.gif"/>');
		}
		else
		{
			if(EDUCAT.getStringLength(msg) > 35)
			{
				$(obj).siblings(".reg_tip").addClass("reg_tip1");
			}
			$(obj).siblings(".reg_tip").html('<img src="'+ IMGURL +'form/error.gif"/><span>' + msg + '</span>');
		}
	}
	
	$.ChangeCheckCode = function()
	{
		var rhash = $("#reg_rhash").val();
		var d = new Date();
		document.getElementById("img_checkcode").src = SITE_PATH + "index.php?m=misc&a=verify&rhash="+rhash+"&time="+d.getTime();
	}

	$("#checkcode_change").click(function(){
		$.ChangeCheckCode();
	}); 

	$("#registerForm input[istip]").focus(function(){
		var istip = parseInt(this.getAttribute('istip'));
		if(istip == 0)
		{
			this.setAttribute('istip',1);
			$(this).siblings(".reg_tip").css("visibility",'visible');
		}
	});
	
	$("#reg_email").blur(function(){
		$.CheckUserEmail(this,true,true);
	});
	
	$("#reg_account").blur(function(){
		$.CheckUserName(this,true,true);
	});
	
	$("#reg_pwd").blur(function(){
		$.CheckUserPwd(this,true);
	});
	
	$("#reg_cpwd").blur(function(){
		$.CheckUserCPwd(this,true);
	});
	
	$("#reg_phone").blur(function(){
		$.CheckPhone(this);
	});
	
	$("#reg_checkcode").blur(function(){
		$.CheckVerifyCode(this);
	});
	
	$("#reg_agreement").change(function(){
		if(this.checked)
		{
			$("#reg_submit").attr('disabled',false);
		}
		else
		{
			$("#reg_submit").attr('disabled',true);
		}
	});
	
	$("#registerForm").submit(function(){
		//$("#loginreg_loading").hide();
		//$("#loginreg_check").hide();
		
		if(!$.CheckUserName($("#reg_account").get(0),false,false))
		{
			$("#reg_account").focus();
			return false;
		}
			
		if(!$.CheckUserPwd($("#reg_pwd").get(0),false))
		{
			$("#reg_pwd").focus();
			return false;
		}
			
		if(!$.CheckUserCPwd($("#reg_cpwd").get(0),false))
		{
			$("#reg_cpwd").focus();
			return false;
		}
		
		if(!$.CheckUserEmail($("#reg_email").get(0),false,false))
		{
			$("#reg_email").focus();
			return false;
		}
		
		/*if(!$.CheckPhone($("#reg_phone").get(0)))
		{
			$("#reg_phone").focus();
			return false;
		}*/
			
		if(!$.CheckVerifyCode($("#reg_checkcode").get(0)))
		{
			$("#reg_checkcode").focus();
			return false;
		}
		
		if($("#registerForm input[check=0]").length > 0)
		{
			$("#loginreg_check").show();
			return false;
		}
		var form = this;
		$("#reg_submit").attr("disabled",true);
		$("#loginreg_loading").show();
		$.ajax({ 
			url: SITE_PATH+"index.php?m=user&a=ajaxregister",
			type: "POST",
			data:$(form).serialize(),
			cache:false,
			dataType:'json',
			success:function(result){
				$("#loginreg_loading").hide();
				$("#reg_submit").attr("disabled",false);
				if(result.status == 0)
				{
					var relObj;
					switch(result.field)
					{
						case "checkcode":
						{
							relObj = $("#reg_checkcode");
						}
						break;
						case "email":
						{
							relObj = $("#reg_email");
						}
						break;
						case "user_name":
						{
							relObj = $("#reg_account");
						}
						break;
						case "password":
						{
							relObj = $("#reg_pwd");
						}
						break;
						case "confirm_password":
						{
							relObj = $("#reg_cpwd");
						}
						break;
						case "mobile_phone":
						{
							relObj = $("#reg_phone");
						}
						break;
					}
					
					if(relObj != null)
					{
						relObj.focus();
						$.RegErrHandler(relObj.get(0),result.msg);
					}
					else
					{
						$.ShowAlert(result.msg);
					}
					$.ChangeCheckCode();
				}
				else
				{
					var fun = function(){
						location.href = result.url;
					};
					setTimeout(fun,1);
				}
			},
			error:function(){
				$("#loginreg_loading").hide();
				$("#reg_submit").attr("disabled",false);
				$.ChangeCheckCode();
				$.ShowAlert(LANG.js_reg_error);
			}
		});
		return false;
	});
	
	$("#bindForm").submit(function(){
		$("#loginreg_loading").hide();
		$("#loginreg_check").hide();
		
		if(!$.CheckUserEmail($("#reg_email").get(0),false,false))
		{
			$("#reg_email").focus();
			return false;
		}
			
		if(!$.CheckUserName($("#reg_account").get(0),false,false))
		{
			$("#reg_account").focus();
			return false;
		}
			
		if(!$.CheckUserPwd($("#reg_pwd").get(0),false))
		{
			$("#reg_pwd").focus();
			return false;
		}
		
		if($("#registerForm input[check=0]").length > 0)
		{
			$("#loginreg_check").show();
			return false;
		}
		var form = this;
		$("#reg_submit").attr("disabled",true);
		$("#loginreg_loading").show();
		$.ajax({ 
			url: SITE_PATH+"index.php?m=user&a=ajaxbind",
			type: "POST",
			data:$(form).serialize(),
			cache:false,
			dataType:'json',
			success:function(result){
				$("#loginreg_loading").hide();
				$("#reg_submit").attr("disabled",false);
				if(result.status == 0)
				{
					var relObj;
					switch(result.field)
					{
						case "email":
						{
							relObj = $("#reg_email");
						}
						break;
						case "user_name":
						{
							relObj = $("#reg_account");
						}
						break;
						case "password":
						{
							relObj = $("#reg_pwd");
						}
						break;
					}
					
					if(relObj != null)
					{
						relObj.focus();
						$.RegErrHandler(relObj.get(0),result.msg);
					}
					else
					{
						$.ShowAlert(result.msg);
					}
				}
				else
				{
					var fun = function(){
						location.href = result.url;
					};
					setTimeout(fun,1);
				}
			},
			error:function(){
				$("#loginreg_loading").hide();
				$("#reg_submit").attr("disabled",false);
				$.ShowAlert(LANG.js_reg_error);
			}
		});
		return false;
	});
	
	$("#resetPwdForm").submit(function(){
		if(!$.CheckUserPwd($("#reg_pwd").get(0),false))
		{
			$("#reg_pwd").focus();
			return false;
		}
			
		if(!$.CheckUserCPwd($("#reg_cpwd").get(0),false))
		{
			$("#reg_cpwd").focus();
			return false;
		}
	});
});

})