<div class="forgetbox forgetph">
	<form id="forgetphone2" action="/user/retakePwd" method="post">
		<div class="elmt">新的密码：
			<input type="password" autocomplete ="off" name="for_password" id="for_reg_pwd" class="tx"  msg="设置密码" msgarea="for_reg_pwd_msg" limit="required:true;type:string"/>
			<span id="for_reg_pwd_msg"></span>
		</div>
		<div class="elmt">确认密码：
			<input type="password" name="for_confirm_password" id="for_reg_cpwd" class="tx"  msg="再次输入密码" msgarea="for_reg_cpwd_msg" limit="required:true;type:string"/>
			<span id="for_reg_cpwd_msg"></span>
		</div>
		<div class="elmt elmt_btn">
			<button class="btn btn_org" id="forgt_phone_3">下一步</button> <a id="forgt_phone_1" class="btn" href="">返回上一步</a>
		</div>
	</form>
</div>