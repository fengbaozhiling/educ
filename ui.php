<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>UI组件</title>
<link href="public/css/common.css" type="text/css" rel="stylesheet">
<link href="public/css/list.css" type="text/css" rel="stylesheet">
</head>

<body>
<?php include 'header-top.php'; ?>
<?php include 'header.php'; ?>
<?php include 'nav-hide.php'; ?>
<?php include 'bread.php'; ?>
<div class="wrap">
	<div class="container">
		<strong>DIV-CSS命名规则:</strong><br>
		m-类名，表示一个模块。<br>
		i-类名，表示图标。<br>
		j-，以此开头的用于绑定JS操作。<br>
		属性data，表示数据。<br>
		<strong>JS规则：</strong><br>
		JS采用模块方式开发，参考文档如下：
		<a href="http://seajs.org/docs/#docs" target="_blank">http://seajs.org/docs/#docs</a>.
		<div>
			<strong>星级评价：</strong>
			<div data="j-star" starsty="star" score="3" num="5"></div><br>
			<div data="j-star" starsty="star" score="2" num="5" disabled="disabled"></div><br>
			<div data="j-star" starsty="star" score="4" num="5"></div><br>
			<div data="j-star" starsty="star" score="3" num="5" disabled="disabled"></div><br>
		</div>
		<div class="">
			<strong>翻页：</strong>
			<div class="m-page"> <span>1/189页</span><a href="">&lt;&lt;&nbsp;上一页</a> <a href="">1</a> <a class="selected" href="">2</a> <a href="">3</a> <a href="">4</a> <a href="">5</a> <a href="">下一页&nbsp;&gt;&gt;</a> <a href="">最后一页</a>
				<input type="text" size="1" class="txt_input" original-title="">
				<button>跳转</button>
			</div>
		</div>
		<div class="">
			<strong>按妞：</strong><br>
			<a class="btn" href="">按钮</a>
			<a class="btn btn_blue" href="">按钮</a>
			<a class="btn btn_org" href="">按钮</a>
		</div>
	</div>
</div>
<div class="clear mt_30"></div>
<?php include 'footerhelp.php'; ?>
<?php include 'footer.php'; ?>
<script>

seajs.config({
	base: 'http://'+http_host+'/public/js/',
	alias: {
		"ui":"ui"
	}
});
seajs.use("edstyle");
seajs.use("ui");
</script>
</body>
</html>