<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-实名认证-个人</title>
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
					<h2>实名认证</h2>
				</div>
				<div class="m-order">
					<div class="od clfix">
						<a class="seleted" href="">个人认证</a><a href="">企业认证</a>
					</div>
				</div>
				<div class="m-fostep">
					<div class="forgtstep clfix"><span class="crent">填写个人信息</span><span>等待审核通过</span></div>
				</div>
				<div class="m-form">
					<form name="mform">
					<div class="elmt">
						<input class="tx" size="30" type="password" placeholder="请输入当前密码" id="login_pwd" name="password" maxlength="60" msg="请输入您的密码" msgarea="login_pwd_msg" limit="required:true;type:string" ajax="/ajax/sucess.php?kkk="><span id="login_pwd_msg"></span>
					</div>
					<div class="elmt">
						<input class="tx" size="30" type="text" placeholder="真实姓名" id="yourname" name="yourname" maxlength="60" msg="请输入您的姓名" msgarea="yourname_msg" limit="required:true;type:string"><span id="yourname_msg"></span>
					</div>
					<div class="elmt">
						<input class="tx" size="30" type="text" placeholder="身份证号码" id="yourID" name="yourid" maxlength="60" msg="请输入您的身份证号码" msgarea="yourid_msg" limit="required:true;type:string"><span id="yourid_msg"></span>
					</div>
					<div class="elmt">
						上传身份证正面：<input type="file">
					</div>
					<div class="elmt">
						上传身份证反面：<input type="file">
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