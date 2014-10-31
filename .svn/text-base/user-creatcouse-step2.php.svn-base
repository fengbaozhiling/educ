<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-创建新的课程</title>
<link href="public/css/common.css" type="text/css" rel="stylesheet">
<link href="public/css/user.css" type="text/css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="public/js/jquery-ui/jquery-ui-1.10.4.custom.min.css">
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
					<h2>创建新的课程</h2>&nbsp;-&nbsp;详细信息
				</div>
				<div id="courseEditBox">
					<div class="ceb_body">
						<form action="/index.php?m=coursemanage&a=saveDetails" method="post" id="courseDetailsForm">
							<div class="fftitle">详细说明：</div>
							<textarea id="courseContent" name="content" class="txt" style="height:260px; width:685px;" isIe6="1"></textarea>
							<div class="blank20"></div>
							<div class="fftitle">课程要求：<a class="gir_add" rel="#requirementsBox" html="#requirementsTpl" href="javascript:;">+</a></div>
							<div id="requirementsBox">
								<div class="gir_item">
									<span class="gir_btns"> <a class="gir_remove" href="javascript:;"></a> <a class="gir_move" href="javascript:;"></a> </span>
									<input type="text" name="requirements[]" class="txt" maxlen="80" nonum="1" value="" placeholder="课程中需要学员准备什么，如软件、手提琴等"/>
								</div>
							</div>
							<div class="blank20"></div>
							<div class="fftitle">课程的目的和目标：<a class="gir_add" rel="#goalBox" html="#goalTpl" href="javascript:;">+</a></div>
							<div id="goalBox">
								<div class="gir_item">
									<span class="gir_btns"> <a class="gir_remove" href="javascript:;"></a> <a class="gir_move" href="javascript:;"></a> </span>
									<input type="text" name="goal[]" class="txt" maxlen="80" nonum="1" value="" placeholder="在课程中将学习到什么"/>
								</div>
							</div>
							<div class="blank20"></div>
							<div class="fftitle">目标学员：<a class="gir_add" rel="#intendedUserBox" html="#intendedUserTpl" href="javascript:;">+</a></div>
							<div id="intendedUserBox">
								<div class="gir_item">
									<span class="gir_btns"> <a class="gir_remove" href="javascript:;"></a> <a class="gir_move" href="javascript:;"></a> </span>
									<input type="text" name="intended_user[]" class="txt" maxlen="80" nonum="1" value="" placeholder="学习课程的学员需要具备什么知识、经验或能力"/>
								</div>
							</div>
							<div class="blank20"></div>
							<div class="form_field subutton">
								<label>
									<button class="btn btn_blue" type="submit">下一步</button>
								</label>
								<input type="hidden" name="id" value="19" />&nbsp;&nbsp;
								<span class="form_tip"></span>
							</div>
							<div class="clear"></div>
						</form>
					</div>
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
<!--start JS模版-->
<script id="goalTpl" type="text/template">
<div class="gir_item">
<div class="gir_btns">
<a class="gir_remove" href="javascript:;"></a>
<a class="gir_move" href="javascript:;"></a>
</div>
<input type="text" name="goal[]" class="txt" maxlen="80" nonum="1" value="" placeholder="在课程中将学习到什么"/>
</div>
</script> 
<script id="intendedUserTpl" type="text/template">
<div class="gir_item">
<div class="gir_btns">
<a class="gir_remove" href="javascript:;"></a>
<a class="gir_move" href="javascript:;"></a>
</div>
<input type="text" name="intended_user[]" class="txt" maxlen="80" nonum="1" value="" placeholder="学习课程的学员需要具备什么知识、经验或能力"/>
</div>
</script> 
<script id="requirementsTpl" type="text/template">
<div class="gir_item">
<div class="gir_btns">
<a class="gir_remove" href="javascript:;"></a>
<a class="gir_move" href="javascript:;"></a>
</div>
<input type="text" name="requirements[]" class="txt" maxlen="80" nonum="1" value="" placeholder="课程中需要学员准备什么，如软件、手提琴等"/>
</div>
</script> 
<!--end JS模版-->
<script src="<?php echo $domainurl;?>/public/js/kindeditor/kindeditor-all-min.js"></script>
<script src="<?php echo $domainurl;?>/public/js/jqueryui/jquery.ui.js"></script>
<script>
seajs.use("creat");
</script>

</body>
</html>