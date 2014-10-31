<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-站内信-写信</title>
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
					<h2>站内信</h2>
				</div>
				<div class="m-order">
					<div class="od clfix">
						<a class="seleted" href="">收信箱</a><a href="">发信箱</a>
					</div>
				</div>
				<div class="form_box infocenter_form">
					<form action="/index.php?m=infocenter&a=saveMsg" method="post" onsubmit="return $.MsgCreateSubmit(this)">
						<div class="form_field"> <strong>收信人</strong>
							<input type="text" name="user_name" id="msg_user_name" value="" placeholder="你可以直接输入会员名称或从粉丝列表中选择" style="width:300px;"/>
						</div>
						<div class="form_field"> <strong>内　容</strong>
							<textarea name="message" maxlen="200" style="width:550px; height:80px;"></textarea>
						</div>
						<div class="form_field"> <strong>&nbsp;</strong>
							<button class="btn btn_blue" id="create_submit">发送</button>
						</div>
					</form>
				</div>
				<div class="infocenter_head">
				<strong class="fontfamily">粉丝列表</strong>
				</div>
				<div id="fans_list" class="fleft" style="height:360px;"> </div>
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
seajs.use("<?php echo $domainurl;?>/public/js/reply");
</script>
</body>
</html>