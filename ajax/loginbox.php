<div class="m-login">
	<div data="j-tablogin" class="tab"><span rel="loginBox" class="crent">登录</span><span rel="regBox">注册</span><a class="f_r" id="j-lgclose" href="">×</a></div>
	<div class="login_form">
		<div id="loginBox">
			<form action="/index.php?m=user&a=ajaxlogin" method="post" id="loginForm" onsubmit="return $.LoginSubmit(this)">
				<div class="elmt">
					用户名：
					<input class="tx" size="30" type="text" placeholder="帐号或注册邮箱" id="login_account" name="account" msg="帐号或注册邮箱" msgarea="login_account_msg" limit="required:true;type:email"><span id="login_account_msg"></span>
				</div>
				<div class="elmt">
					密&nbsp;&nbsp;码：
					<input class="tx" size="30" type="password" placeholder="请输入当前密码" id="login_pwd" name="password" msg="请输入您的密码" msgarea="login_pwd_msg" limit="required:true;type:string" ajax="/ajax/sucess.php?kkk="><span id="login_pwd_msg"></span>
				</div>
				<div class="elmt elmt_btn">
					<label><input class="checkbox" type="checkbox" name="is_auto" value="1"/><span>下次自动登陆(公共场所慎用)</span> </label>
					<div class="mt_5"></div>
					<button class="btn btn_org" id="login_submit">立即登录</button> <a id="j-forget" class="btn" href="">忘记密码</a>
					<div class="mt_5"></div>
					<a href="/index.php?m=connect&a=login&type=tqq" class="tqq" style="color:59bcdc;"><i class="icon iconfont">&#xe602;</i></a>
					<a href="/index.php?m=connect&a=login&type=sina" class="sina" style="color:d55d5e;"><i class="icon iconfont">&#xe63d;</i></a>
					<a href="/index.php?m=connect&a=login&type=qq" class="qq" style="color:5192e2;"><i class="icon iconfont">&#x3433;</i></a>
					<a href="/index.php?m=connect&a=login&type=taobao" class="taobao" style="color:fa993b;"><i class="icon iconfont">&#xe60c;</i></a>
					<a href="/index.php?m=connect&a=login&type=douban" class="douban" style="color:4cb45d;"><i class="icon iconfont">&#xe603;</i></a>
				</div>
					<!--<a href="/index.php?m=user&a=register">注册会员</a> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> <a href="/index.php?m=user&a=retakePwd">找回密码</a>-->
				<input name="rhash" value="75771462" type="hidden"/>
				<input name="a" value="ajaxlogin" type="hidden"/>
			</form>
		</div>
		<div id="regBox" style="display:none;">
			<form action="/index.php?m=user&a=ajaxregister" method="post" id="registerForm">
				
				<div class="elmt">用&nbsp;户&nbsp;名：
					<input type="text" autocomplete="off" name="user_name" id="reg_account" class="tx"  msg="用户名" msgarea="reg_account_msg" limit="required:true;type:string" />
					<span id="reg_account_msg"></span>
				</div>
				<div class="elmt">设置密码：
					<input type="password" autocomplete ="off" name="password" id="reg_pwd" class="tx"  msg="设置密码" msgarea="reg_pwd_msg" limit="required:true;type:string"/>
					<span id="reg_pwd_msg"></span>
				</div>
				<div class="elmt">确认密码：
					<input type="password" name="confirm_password" id="reg_cpwd" class="tx"  msg="再次输入密码" msgarea="reg_cpwd_msg" limit="required:true;type:string"/>
					<span id="reg_cpwd_msg"></span>
				</div>
				<div class="elmt">邮箱地址：
					<input type="text" name="email" id="reg_email" class="tx" msg="请输入正确的邮箱地址" msgarea="reg_email_msg" limit="required:true;type:email" />
					<span id="reg_email_msg"></span>
				</div>
	
				<div class="elmt">验&nbsp;证&nbsp;码：
					<input size="5" class="tx" type="text" maxlength="10" name="checkcode" id="reg_checkcode"  ajax="/ajax/sucess.php?kkk=" msg="请输入验证码" msgarea="reg_checkcode_msg" limit="len:4;required:true">
					<img id="img_checkcode" alt="验&nbsp;&nbsp;证&nbsp;&nbsp;码" src="http://edu.epweike.net/index.php?m=misc&a=verify&rhash=75771462"> <a id="checkcode_change" href="javascript:void(0);">看不清？换一张</a><span id="reg_checkcode_msg"></span>
					<div class="reg_tip"></div>
				</div>
				<div class="elmt elmt_btn elmt_rg">
					<label class="format_label"><input class="checkbox" type="checkbox" name="agreement" id="reg_agreement" checked="checked" value="1" /><span>我已阅读并同意<a href="/index.php?m=user&a=agreement" target="_blank">《注册协议和版权声明》</a></span> </label><br>
					<button class="btn btn_org" id="reg_submit">立即注册</button>
				</div>
				<input name="rhash" id="reg_rhash" value="75771462" type="hidden"/>
				<input name="a" value="ajaxregister" type="hidden"/>
			</form>
		</div>
	</div>
</div>
<script>
seajs.use(['<?php echo $domainurl;?>/public/dist/forget'])
</script>