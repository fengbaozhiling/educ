<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-站内信</title>
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
				<div class="infocenter_right">
					<a class="writmeg btn btn_blue" href="/index.php?m=infocenter&a=sendMsg">我要写信</a>
					<div class="infocenter_list">
						<div class="msg_item clfix"><a class="msg_user" title="admin" href="/index.php?m=u&a=index&uid=1" target="_blank"><img class="GUID " uid="1" src="/public/images/avatar_middle.jpg" width="64"  alt="admin"/></a>
							<div class="inf">
								<div class="title">
									<p> 我对<a class="GUID " uid="1" title="admin" href="/index.php?m=u&a=index&uid=1" target="_blank">admin</a></a>说： </p>
									<span class="time">今天 16:43</span> <span class="count">共 28 封</span>
								</div>
								<div class="msg"> asdgasdgasdgasdg</div>
								<div class="btns">
									<a class="current_btn mini_btn blue_btn" href="/index.php?m=infocenter&a=msgView&id=2">
									<input type="button" value="查看" />
									</a><span>&nbsp;</span>
									<label class="current_btn mini_btn gray_btn msg_remove_btn" lid="2">
										<input type="button" value="删除" />
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
				<div class="m-page"> <span>1/189页</span><a href="">&lt;&lt;&nbsp;上一页</a> <a href="">1</a> <a class="selected" href="">2</a> <a href="">3</a> <a href="">4</a> <a href="">5</a> <a href="">下一页&nbsp;&gt;&gt;</a> <a href="">最后一页</a>
					<input type="text" size="1" class="txt_input" original-title="">
					<button>跳转</button>
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
seajs.use("<?php echo $domainurl;?>/public/js/reply");
</script>
</body>
</html>