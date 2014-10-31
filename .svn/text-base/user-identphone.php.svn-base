<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-手机验证</title>
<link href="public/css/common.css" type="text/css" rel="stylesheet">
<link href="public/css/user.css" type="text/css" rel="stylesheet">
</head>

<body>
<?php include 'header-top.php'; ?>
<?php include 'header.php'; ?>
<?php include 'nav-hide.php'; ?>
<?php include 'bread.php'; ?>
<div class="wrap">
	<div class="container">
		<div class="ustab">
			<a class="crent" href="">学员版</a><a href="">讲师版</a>
		</div>
		<div class="usbox clfix">
			<div class="m-umain">
				<div class="m-util">
					<h2>手机验证</h2>
				</div>
				<div class="m-form">
					<form name="mform">
					<div class="elmt">
						<input class="tx" size="30" type="password" placeholder="请输入密码" id="login_pwd" name="password" maxlength="60" msg="请输入您的密码" msgarea="login_pwd_msg" limit="required:true;type:string" ajax="/ajax/sucess.php?kkk="><span id="login_pwd_msg"></span>
					</div>
					<div class="elmt">
						<input class="tx" size="30" type="text" placeholder="请输入手机号码" id="login_tel" name="telphone" maxlength="36" msg="请输入正确的手机号码" msgarea="login_eml_tel" limit="required:true;type:tel"><a tool="getYanzma" class="btn btn_blue yzm" href="">获取验证码</a><span id="login_eml_tel"></span>
					</div>
					<div class="elmt">
						<input class="tx" size="30" type="text" placeholder="输入验证码" id="login_yzm" name="yanzhengma" maxlength="6" msg="请输入正确的验证码" msgarea="login_eml_yzm" limit="required:true;type:string" ajax="/ajax/sucess.php?kkk="><span id="login_eml_yzm"></span>
					</div>
					<div class="elmt">
						<button class="sub btn_blue">提交</button>
					</div>
					</form>
				</div>
			</div>
			<div class="m-unav">
				<div class="pers">
					<a href=""><img src="public/images/img14.jpg" alt="修改头像"></a>
					<a class="btn btn_org" href="">修改个人资料</a>
				</div>
				<ul>
					<li>
						<em><b><a href="">会员首页</a></b></em>
					</li>
					<li>
						<em><b>我的学习</b></em>
						<ol>
							<li><a class="crent" href="">我的课程</a></li>
							<li><a href="">我的收藏</a></li>
							<li><a href="">学习记录</a></li>
							<li><a href="">我的笔记</a></li>
							<li><a href="">我的讨论</a></li>
						</ol>
					</li>
					<li>
						<em><b>订单管理</b></em>
						<ol>
							<li><a href="">我的订单</a></li>
							<li><a href="">我的购买记录</a></li>
							<li><a href="">账户余额</a></li>
							<li><a href="">账户充值</a></li>
							<li><a href="">我的积分</a></li>
						</ol>
					</li>
					<li>
						<em><b>我的关注</b></em>
						<ol>
							<li><a href="">我关注的讲师</a></li>
							<li><a href="">我关注的学员</a></li>
							<li><a href="">我的粉丝</a></li>
						</ol>
					</li>
					<li>
						<em><b>消息管理</b></em>
						<ol>
							<li><a href="">站内信</a></li>
							<li><a href="">系统通知</a></li>
						</ol>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="clear mt_30"></div>
<?php include 'footerhelp.php'; ?>
<?php include 'footer.php'; ?>
<script>
seajs.use("user");
</script>
</body>
</html>