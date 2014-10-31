<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>修改密码</title>
<link href="public/css/common.css" type="text/css" rel="stylesheet">
<link href="public/css/list.css" type="text/css" rel="stylesheet">
</head>

<body>
<?php include 'header-top.php'; ?>
<?php include 'header.php'; ?>
<?php include 'nav-hide.php'; ?>
<div class="wrap">
	<div class="container clfix">
		<div class="forgetbox">
			<div class="m-login">
				<div class="login_form m-forgetbox">
					<div class="forgtstep forgetem clfix"><span>填写邮箱地址</span><span>验证</span><span class="crent">设置新密码</span><span>设置成功</span></div>
					<div class="bindBox"><!--设置密码两个地方会用到的同一个表单-->
						<div class="forgetbox forgetph" style="padding-left:400px;">
							<form id="forgetemail3" action="/user/retakePwd" method="post">
								<div class="elmt">新的密码：
									<input type="password" autocomplete ="off" name="for_email_password" id="for_email_password" class="tx"  msg="设置密码" msgarea="for_email_msg" limit="required:true;type:string"/>
									<span id="for_email_msg"></span>
								</div>
								<div class="elmt">确认密码：
									<input type="password" name="for_confirmemail_password" id="for_confirmemail_password" class="tx"  msg="再次输入密码" msgarea="for_confirmemail_msg" limit="required:true;type:string"/>
									<span id="for_confirmemail_msg"></span>
								</div>
								<div class="elmt elmt_btn">
									<button class="btn btn_org" id="forgt_email_4">确认修改</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="clear mt_30"></div>
<?php include 'footerhelp.php'; ?>
<?php include 'footer.php'; ?>
<script>
seajs.use(["edstyle","forget"]);
</script>
</body>
</html>