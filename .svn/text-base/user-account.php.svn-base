<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-个人资料填写</title>
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
					<h2>帐号设置</h2>
				</div>
				<div class="m-setingbox">
					<div class="sb_item"> <strong>帐号名称</strong>
						<div class="sbi_content" id="userNameBox"> <span id="userName">test</span>&nbsp;&nbsp;&nbsp;&nbsp; </div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>登录邮箱</strong>
						<div class="sbi_content" id="userEmailBox"> <span id="userEmail">zhongliangwenwx@163.com</span>&nbsp;&nbsp;&nbsp;&nbsp; <a class="c06c" href="javascript:;" onclick="EDUCAT.EditUserEmail();">修改</a>(30天内只能修改一次) </div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>头像</strong>
						<div class="sbi_content" id="avatarBox">
							<label class="current_btn small_btn gray_btn" onclick="EDUCAT.EditAvatar();">
								<input type="button" value="设置" />
							</label>
						</div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>密码</strong>
						<div class="sbi_content" id="pwdBox"> <a class="c06c" href="javascript:;" onclick="EDUCAT.EditPwd();">修改</a> </div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>所在地区</strong>
						<div class="sbi_content" id="youaddressBox">
							北京市-北京-通州&nbsp;&nbsp;
							<a class="c06c" href="javascript:;" onclick="EDUCAT.EditYouaddress();">修改</a> </div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>个人简介</strong>
						<div class="sbi_content" id="introduceBox">
							<p></p>
							<a class="c06c" href="javascript:;" onclick="EDUCAT.EditIntroduce();">修改</a> </div>
						<div class="clear"></div>
					</div>
					<div class="sb_item"> <strong>擅长领域</strong>
						<div class="sbi_content" id="goodatBox">
							网页设计&nbsp;平面设计&nbsp;UI设计
							&nbsp;&nbsp;
							<a class="c06c" href="javascript:;" onclick="EDUCAT.EditGoodat();">修改</a>（单个标签使用空格分开）</div>
						<div class="clear"></div>
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
<script>
var userName = "test";
var userEmail = "zhongliangwenwx@163.com";
var userAvatarId = 0;
var userAvatarSrc = SITEURL+"/public/images/no_picture_0x0x0.png";
var userIntroduce = "";
var Youaddress = {"province":"吉林省","city":"白城市","area":"大安市"};
var userGoodat = "网页设计&nbsp;平面设计&nbsp;UI设计";
var isOldPwd = true;
</script>
<script id="userNameTpl" type="text/template">
<span id="userName">{{=userName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="javascript:;" onclick="EDUCAT.EditUserName();">修改</a>(30天内只能修改一次)
</script> 
<script id="editUserNameTpl" type="text/template">
<form style="width:200px;">
	<input type="text" name="user_name" value="{{=userName}}" maxlen="20" size="30"/>
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SaveUserName(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.CloseUserName();">取消</a>
</form>
</script> 
<!--登录邮箱--> 
<script id="userEmailTpl" type="text/template">
	<span id="userEmail">{{=userEmail}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
	<a class="c06c" href="javascript:;" onclick="EDUCAT.EditUserEmail();">修改</a>(30天内只能修改一次)
</script> 
<script id="editUserEmailTpl" type="text/template">
<form style="width:200px;">
	<input type="text" name="email" value="{{=userEmail}}" size="30"/>
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SaveUserEmail(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.CloseUserEmail();">取消</a>
</form>
</script> 
<!--头像--> 
<script id="avatarTpl" type="text/template">
{{? it.avatar != "" }}
	<p><img src="{{=it.avatar}}" height="100" /></p>
	<div class="mt_10"></div>
{{?}}
<label class="current_btn small_btn gray_btn" onclick="EDUCAT.EditAvatar();"><input type="button" value="设置" /></label>
</script> 
<script id="editAvatarTpl" type="text/template">
<div class="avatar_swf_box">
	<div id="avatarSwf"></div>
	<a href="javascript:;" class="avatar_swf_close" onclick="EDUCAT.CloseAvatarSwf();">&nbsp;</a>
</div>
</script> 
<!--密码--> 
<script id="pwdTpl" type="text/template">
<a class="c06c" href="javascript:;" onclick="EDUCAT.EditPwd();">修改</a>
</script> 
<script id="editPwdTpl" type="text/template">
<form style="width:200px;">
	{{? isOldPwd }}
		<input type="password" name="old_pwd" placeholder="原密码" maxlen="30" nonum="1" nocn="1" size="30"/>
		<div class="mt_10"></div>
	{{?}}
	<input type="password" name="new_pwd" placeholder="新密码" maxlen="30" size="30" nocn="1"/>
	<div class="mt_10"></div>
	<input type="password" name="conform_pwd" placeholder="确认新密码" maxlen="30" nocn="1" nonum="1" size="30"/>
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SavePwd(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.ClosePwd();">取消</a>
</form>
</script> 
<!--个人简介--> 
<script id="introduceTpl" type="text/template">
<p>{{=userIntroduce}}</p>
<a class="c06c" href="javascript:;" onclick="EDUCAT.EditIntroduce();">修改</a>
</script> 
<script id="editIntroduceTpl" type="text/template">
<form style="width:372px;">
	<textarea maxlen="200" name="introduce" style="width:360px; height:80px;">{{=userIntroduce}}</textarea>
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SaveIntroduce(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.CloseIntroduce();">取消</a>
</form>
</script>
<script id="YouaddressTpl" type="text/template">
{{=Youaddress.province+"-"+Youaddress.city+"-"+Youaddress.area}}&nbsp;&nbsp;
<a class="c06c" href="javascript:;" onclick="EDUCAT.EditYouaddress();">修改</a>
</script> 
<script id="editYouaddressTpl" type="text/template">
<form style="width:372px;">
	<select name="province"></select>&nbsp;<select  name="city"></select>&nbsp;<select name="area"></select>
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SaveYouaddress(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.CloseYouaddress();">取消</a>
</form>
</script>
<script id="GoodatTpl" type="text/template">
{{=userGoodat}}&nbsp;&nbsp;
<a class="c06c" href="javascript:;" onclick="EDUCAT.EditGoodat();">修改</a>（单个标签使用空格分开）
</script> 
<script id="editGoodatTpl" type="text/template">
<form style="width:372px;">
	<input size="60" type="text" value="{{=userGoodat}}">
	<div class="mt_10"></div>
	<label class="current_btn small_btn gray_btn" onclick="EDUCAT.SaveGoodat(this);"><input type="button" value="保存" /></label>
	&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:" onclick="EDUCAT.CloseGoodat();">取消</a>
</form>
</script>
 
<script>
seajs.use("user");
seajs.use("edacount");
</script>
</body>
</html>