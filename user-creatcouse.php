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
					<h2>创建新的课程</h2>&nbsp;-&nbsp;基本信息
				</div>
				<div id="courseEditBox">
					<div class="ceb_body">
						<form action="/index.php?m=coursemanage&a=savebasics" method="post" id="courseBasicsForm" class="ceb_form">
							<div class="form_field clfix"> <strong>课程名称</strong>
								<input type="text" maxlen="80" name="name" value="tet" id="course_name" size="60" placeholder="简单明了，有冲击力，最多80个字符"/>
							</div>
							<div class="form_field clfix"> <strong>课程简介</strong>
								<textarea cols="80" rows="10" name="brief" id="course_brief" maxlen="400" placeholder="简单描述您的课程，让学生知道他们将会学习到什么知识，最多200个字符">etsetaet</textarea>
							</div>
							<div class="blank6"></div>
							<div class="form_field1 clfix"> <strong>课程类别</strong>
								<select name="cid" id="course_cate" style="margin:1px 0 0 0;">
									<option value="12" selected="selected">设计课程</option>
									<option value="13">开发课程</option>
									<option value="14">营销课程</option>
									<option value="15">装修课程</option>
									<option value="16">商标/VI设计</option>
									<option value="17">应用设计</option>
									<option value="18">动漫设计</option>
									<option value="19">网页设计</option>
									<option value="20">网站开发</option>
									<option value="21">软件开发</option>
									<option value="22">移动应用开发</option>
									<option value="23">SEO优化</option>
									<option value="24">微博营销</option>
									<option value="25">家居装修</option>
									<option value="26">建设装修</option>
									<option value="27">动漫办公用品设计</option>
									<option value="28">动漫日用品设计</option>
									<option value="29">LOGO设计</option>
									<option value="30">包装设计</option>
									<option value="31">综合性网站</option>
									<option value="32">QQ表情</option>
									<option value="33">漫画设计</option>
								</select>
							</div>
							<div class="form_field clfix"> <strong>课程收费</strong>
								<label class="format_label" style="margin:10px 0 0 0;">
									<input type="radio" name="is_price" class="radio is_price" value="0" checked="checked" />
									<span>否</span></label>
								<!--<label class="format_label" style="margin:10px 0 0 20px;">
									<input type="radio" name="is_price" class="radio is_price" value="1" disabled="disabled" />
									<span>是</span></label>-->
								<!--<p id="priceBox" style="margin:0 0 0 20px;display:none;">
									<input type="text" name="price" value="0.00" style="width:68px; text-align:center; padding:5px; margin:5px 0 0 0;"/>
									<span style="margin:10px 0 0 6px;">元</span> </p>
								<div class="alipay_info"> <span class="bind_alipay_info">收费课程，请先绑定支付宝</span> <a href="/index.php?m=connect&a=bind&type=alipay" class="bind_alipay" title="现在绑定支付宝">现在绑定支付宝</a> </div>-->
							</div>
							<div class="form_field1 clfix"> <strong>教学等级</strong>
								<label class="format_label" style="margin:2px 0 0 0;">
									<input class="radio" type="radio" name="level" value="1" />
									<span>高级</span></label>
								<label class="format_label" style="margin:2px 0 0 20px;">
									<input class="radio" type="radio" name="level" value="2" />
									<span>中级</span></label>
								<label class="format_label" style="margin:2px 0 0 20px;">
									<input class="radio" type="radio" name="level" value="3" />
									<span>初级</span></label>
								<label class="format_label" style="margin:2px 0 0 20px;">
									<input class="radio" type="radio" name="level" value="0" checked="checked" />
									<span>综合(所有等级)</span></label>
							</div>
							<div class="form_field clfix"> <strong>关键词</strong>
								<input size="60" type="text" name="tags" id="course_tags" value="" placeholder="多个关键词以空格分隔，最多10个标签"/>
							</div>
							<div class="form_field1 clfix"> <strong>谁能参加</strong>
								<label class="format_label" style="margin:2px 0 0 0;">
									<input type="radio" name="privacy" class="radio is_privacy" value="0" checked="checked" />
									<span>所有人</span></label>
								<label class="format_label" style="margin:2px 0 0 20px;">
									<input type="radio" name="privacy" class="radio is_privacy" value="1" />
									<span>只有我邀请的人</span></label>
							</div>
							<div class="form_field clfix invite_code_box" style="display:none;"> <strong>邀请码</strong>
								<input type="text" name="invite_code" id="invite_code" value="" style="width:100px;" placeholder="4位的数字或字母"/>
							</div>
							<div class="form_field clfix">
								<strong class="f_l">封面图片</strong>
								<div class="preview_box f_l">
									<div class="btn_box"></div>
									<div class="swf_box"> <b class="fontfamily">图片预览...</b> </div>
									<div id="swf_box"></div>
									<div>
										提示：图片规格为 640x480。注意： 封面图片是课程的一个极其重要的部分。我们希望你的封面图片看起来很漂亮！因此，有可能会修改或为你创建一个自定义的封面图片。如果我们这样做，我们一定会通知您！
									</div>
								</div>
								
							</div>
							
							<div class="blank20"></div>
							<div class="form_field subutton">
								<strong>&nbsp;</strong>
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
<script type="text/javascript">
var courseId = 19;
var flashvars = {
	"siteUrl": "http://edu.epweike.net/",
	"image": "/public/images/no_picture_0x0x0.png",
	"resourceId": 0,
	"updateType": 0,
	"maxSize": 2,
	"uploadCompleteHandler": "UpdateComplete"
};
var params = {
	menu: "false",
	wmode: "transparent",
	allowscriptaccess: "always"
};
var attributes = {
	id: "swf_box",
	name: "swf_box"
};

function UpdateComplete(result) {
	var query = new Object();
	query.id = courseId;
	query.rid = result.id;
	query.data = result.data;
	$("#swf_box").get(0).UploadLoadingTip(0x000000, "更新数据中，请稍候...", true);
	$.ajax({
		url: SITE_PATH + "index.php?m=coursemanage&a=updateImage",
		type: "POST",
		data: query,
		cache: false,
		dataType: "json",
		success: function(result) {
			if (result.status == 1) {
				$("#swf_box").get(0).UploadLoadingTip(0x0000ff, "更新成功", false);
			} else {
				$("#swf_box").get(0).UploadLoadingTip(0xff0000, "保存数据失败", false);
			}
		},
		error: function() {
			$("#swf_box").get(0).UploadLoadingTip(0xff0000, "保存数据失败", false);
		}
	});
}
</script>

<script>
seajs.use("creat");
</script>

</body>
</html>