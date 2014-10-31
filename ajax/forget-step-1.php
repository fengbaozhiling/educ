<div class="m-login">
	<div class="login_form m-forgetbox">
		<div class="forgtstep forgetph clfix"><span class="crent">验证手机号码</span><span>设置新密码</span><span>设置成功</span></div>
		<div class="forgtstep forgetem clfix" style="display:none;"><span class="crent">填写邮箱地址</span><span>验证</span><span>设置新密码</span><span>设置成功</span></div>
		<div id="j-forgetab" class="forgetab"><span class="crent" rel="forgetph">通过手机找回</span><span rel="forgetem">通过邮箱找回</span></div>
		<div class="bindBox">
			<div class="forgetbox forgetph">
				<form id="forgetForm1" action="/user/retakePwd" method="post">
					<div class="elmt"> <strong>手机找回</strong>
						<input class="tx" type="text" name="reg_account_forgt" id="reg_account_forgt" placeholder="请输入您的手机号码" msg="请输入您的手机号码" msgarea="reg_account_forgt_msg" limit="required:true;type:mobileCn" /><span id="reg_account_forgt_msg"></span>
					</div>
					<div class="elmt"> <strong>验&nbsp;证&nbsp;码</strong>
						<input class="tx" type="text" name="reg_code_forgt" id="reg_code_forgt" placeholder="输入验证码" msg="请输入验证码" msgarea="reg_code_forgt_msg" limit="required:true;type:string" /><span id="reg_code_forgt_msg"></span>
					</div>
					<div class="elmt elmt_btn">
						<button class="btn btn_org" id="forgt_phone_2">下一步</button> <a data="j-backloginbox" class="btn" href="">返回登录</a>
					</div>
					<input name="refer" value="/u/index" type="hidden"/>
					<input name="a" value="retakePwd" type="hidden"/>
				</form>
			</div>
			<div class="forgetbox forgetem" style="display:none;">
				<form id="forgetForm2" action="/user/retakePwd" method="post">
					<div class="elmt"> <strong>邮箱找回</strong>
						<input class="tx" type="text" name="reg_email_forgt" id="reg_email_forgt" placeholder="请输入您的邮箱" msg="请输入您的邮箱" msgarea="reg_email_forgt_msg" limit="required:true;type:email" /><span id="reg_email_forgt_msg"></span>
					</div>
					<div class="elmt elmt_btn">
						<button class="btn btn_org" id="forgt_email_2">下一步</button> <a data="j-backloginbox" class="btn" href="">返回登录</a>
					</div>
					<input name="refer" value="/u/index" type="hidden"/>
					<input name="a" value="retakePwd" type="hidden"/>
				</form>
			</div>
		</div>
	</div>
</div>
