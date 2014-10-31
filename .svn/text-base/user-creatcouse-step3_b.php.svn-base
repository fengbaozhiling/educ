<?php
$domainurl='http://' . $_SERVER['HTTP_HOST'];
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>会员中心-创建新的课程_直播课程</title>
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
					<h2>创建新的课程</h2>
				</div>
				<div class="ceb_body">
					<div id="courseEditHeader" class="clfix"> <img width="92" height="68" src="public/images/course_small.png" />
						<div class="fleft ceh_info">
							<h1 class="fontfamily">atestset</h1>
							<p> <span>讲座数量：0</span> </p>
							<p> <span>创建时间：2014-09-25 13:46:58</span> </p>
						</div>
					</div>
					<div class="m-order">
						<div class="od clfix">
							<a href="">上传点播课程</a><a class="seleted" href="">上传直播课程</a>
						</div>
					</div>
					<div class="list_table">
						<div class="lt_title">
							<div class="ltt_box"> <strong>直播列表：</strong>
								<div class="ltt_btns">
									<label class="btn btn_blue" id="addLive">
										添加
									</label>
								</div>
							</div>
						</div>
						<table class="lt_table" cellspacing="1">
							<thead>
								<tr>
									<th width="100"><span>封面图片</span></th>
									<th><span>讲座信息</span></th>
									<th width="70"><span>学生数量</span></th>
									<th width="56"><span>操作</span></th>
								</tr>
							</thead>
							<tbody id="liveList">
							</tbody>
						</table>
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
<script id="addLiveTpl" type="text/template">
<tbody id="addLiveTbody">
<tr>
<td class="edittd" colspan="4">
<form>
<div class="edit_table">
<table class="et_table" cellspacing="0">
<tr>
<th width="100"><span>直播名称</span></th>
<td><div><input type="text" name="name" id="liveName" class="ftext" maxlen="80"/></div></td>
</tr>
<tr>
<th><span>开课时间</span></th>
<td class="nopadd">
<div class="td">
<input type="text" class="ftext" name="start_time" id="startTime" style="width:136px;_width:142px; _height:13px;" readonly="readonly"/>
</div>
<div class="th" style="width:80px;">
<span>直播时长</span>
</div>
<div class="td">
<div id="liveDurationSlider" class="fleft" style="width:168px; margin:9px 0 0 8px;_margin:7px 0 0 8px;"></div>
<span id="liveDurationStr" class="fleft" style="margin:7px 0 0 15px;">(40分钟)</span>
<input type="hidden" name="duration" value="2400" id="liveDuration" />
</div>
</td>
</tr>
<tr>
<th><span>教室设置</span></th>
<td class="nopadd">
<div class="td" style="width:148px;">
<label class="format_label" style="margin:7px 0 0 0;"><input type="checkbox" name="is_camera" id="isCameraCheckBox" value="1" /><span>使用摄像头</span></label>
</div>
<div class="th" style="width:80px;">
<span>学员上限</span>
</div>
<div class="td">
<span class="fleft" style="margin:8px 0 0 8px;"><span id="liveUserCount">50</span>人</span>
</div>
</td>
</tr>
<tr class="textarea_tr">
<th><span>直播简介</span></th>
<td><div><textarea name="brief" id="liveBrief" class="ftext" maxlen="200"></textarea></div></td>
</tr>
<tr>
<th><span>封面图片</span></th>
<td>
<div style="line-height:2em;">
<strong>提　　示：</strong>图片规格为 640x480(直播封面图片将显示在直播列表和播放器初始页，如果未设置将使用课程封面图片)！	<br/>
<strong>操作步骤：</strong>选择图片&nbsp;<span class="f14">&rarr;</span>&nbsp;确定&nbsp;<span class="f14">&rarr;</span>&nbsp;上传图片
</div>
<div class="blank9"></div>
<div class="img_upload_box">
<div class="iub_btns"></div>
<div class="iub_swf"></div>
<div class="iub_swfbox">
<div id="liveImgSwf"></div>
</div>
</div>
</td>
</tr>
</table>
<div class="et_btns">
<label class="current_btn green_btn" id="addLiveSubmit"><input type="button" value="提交" /></label>&nbsp;&nbsp;&nbsp;&nbsp;
<label class="current_btn disabled_btn" id="addLiveClear"><input type="button" value="取消" /></label>
<input type="hidden" name="id" value="6" />
<input type="hidden" name="img_id" id="imgId" value="0" />
<input type="hidden" name="is_record" value="1" />
<input type="hidden" name="img_data" id="imgData" value="" />
</div>
</div>
</form>
</td>
</tr>
</tbody>
</script> 
<script id="editLiveTpl" type="text/template">
<td class="edittd" colspan="4" id="editLiveTd">
<form>
<div class="edit_table">
<table class="et_table" cellspacing="0">
<tr>
<th width="100"><span>直播名称</span></th>
<td><div><input type="text" name="name" id="liveName" class="ftext" maxlen="80" value="{{=it.name}}"/></div></td>
</tr>
<tr>
<th><span>开课时间</span></th>
<td class="nopadd">
<div class="td">
<input type="text" class="ftext" name="start_time" id="startTime" value="{{=it.start_time_str}}" style="width:136px;_width:142px; _height:13px;" readonly="readonly"/>
</div>
<div class="th" style="width:80px;">
<span>直播时长</span>
</div>
<div class="td">
<div id="liveDurationSlider" class="fleft" style="width:168px; margin:9px 0 0 8px;_margin:7px 0 0 8px;"></div>
<span id="liveDurationStr" class="fleft" style="margin:7px 0 0 15px;">({{=it.duration_str}})</span>
<input type="hidden" name="duration" value="{{=it.duration}}" id="liveDuration" />
</div>
</td>
</tr>
<tr>
<th><span>教室设置</span></th>
<td class="nopadd">
<div class="td" style="width:148px;">
<label class="format_label" style="margin:7px 0 0 0;"><input type="checkbox" name="is_camera" id="isCameraCheckBox" value="1" {{? it.is_camera == 1 }}checked="checked"{{?}} {{? it.live_status != 0}}disabled="disabled"{{?}}/><span>使用摄像头</span></label>
</div>
<div class="th" style="width:80px;">
<span>学员上限</span>
</div>
<div class="td">
<span class="fleft" style="margin:8px 0 0 8px;"><span id="liveUserCount">{{=it.capacity}}</span>人</span>
</div>
</td>
</tr>
<tr class="textarea_tr">
<th><span>直播简介</span></th>
<td><div><textarea name="brief" id="liveBrief" class="ftext" maxlen="200">{{=it.brief}}</textarea></div></td>
</tr>
<tr>
<th><span>封面图片</span></th>
<td>
<div style="line-height:2em;">
<strong>提　　示：</strong>图片规格为 640x480(直播封面图片将显示在直播列表和播放器初始页，如果未设置将使用课程封面图片)！	<br/>
<strong>操作步骤：</strong>选择图片&nbsp;<span class="f14">&rarr;</span>&nbsp;确定&nbsp;<span class="f14">&rarr;</span>&nbsp;上传图片
</div>
<div class="blank9"></div>
<div class="img_upload_box">
<div class="iub_btns"></div>
<div class="iub_swf"></div>
<div class="iub_swfbox">
<div id="liveImgSwf"></div>
</div>
</div>
</td>
</tr>
</table>
<div class="et_btns">
<label class="current_btn green_btn" id="editLiveSubmit"><input type="button" value="提交" /></label>&nbsp;&nbsp;&nbsp;&nbsp;
<label class="current_btn disabled_btn" id="editLiveClear"><input type="button" value="取消" /></label>
<input type="hidden" name="id" value="6" />
<input type="hidden" name="lid" id="lectureId" value="{{=it.id}}" />
<input type="hidden" name="img_id" id="imgId" value="{{=it.img_id}}" />
<input type="hidden" name="img_data" id="imgData" value="" />
</div>
</div>
</form>
</td>
</script> 
<script id="addAttachmentTpl" type="text/template">
<tbody id="uploadAttachmentBox">
<tr>
<td colspan="5">
<div class="border_tip fleft" id="attachmentUploadTip" style="width:574px;">支持格式 {{? it.type == "document" }}.pdf .doc .docx .ppt .pptx{{?? it.type == "image"}}.jpg .jpeg .gif .png .bmp{{??}}.pdf .doc .docx .ppt .pptx .jpg .jpeg .gif .png .bmp{{?}}</div>
<div class="fleft hide" id="attachmentUploadProgress" style="width:582px;"><div class="progress-label">加载文件中，请稍候...</div></div>
<div class="upload_btn" id="uploadAttachmentBtns" style="width:auto;">
<div id="uploadAttachmentSwf" class="upload_swf"></div>
<label class="current_btn green_btn" id="uploadAttachmentBtn"><input type="button" value="上传课件"></label>
<label class="current_btn red_btn hide" id="clearUploadAttachmentBtn"><input type="button" value="取消上传" /></label>
&nbsp;<label class="current_btn disabled_btn" id="clearAddAttachmentBtn"><input type="button" value="取消" style="width:52px;"></label>
</div>
<div class="blank9"></div>
<div class="client_tips">
<strong>提示：</strong>PDF格式的文档可以通过&nbsp;<a href="javascript:;" class="SWF_CLIENT" args="courseId=6 type=attachment lectureID={{=attachmentLectureId}}">方维客户端</a>&nbsp;在本地转换后进行上传，就可立即使用。
</div>
</td>
</tr>
</tobdy>
</script> 
<script id="editAttachmentTpl" type="text/template">
<td colspan="5" id="uploadAttachmentBox">
<div class="border_tip fleft" id="attachmentUploadTip" style="width:574px;">支持格式 {{? it.type == "document" }}.pdf .doc .docx .ppt .pptx{{?? it.type == "image"}}.jpg .jpeg .gif .png .bmp{{??}}.pdf .doc .docx .ppt .pptx .jpg .jpeg .gif .png .bmp{{?}}</div>
<div class="fleft hide" id="attachmentUploadProgress" style="width:582px;"><div class="progress-label">加载文件中，请稍候...</div></div>
<div class="upload_btn" id="uploadAttachmentBtns" style="width:auto;">
<div id="uploadAttachmentSwf" class="upload_swf"></div>
<label class="current_btn green_btn" id="uploadAttachmentBtn"><input type="button" value="上传课件"></label>
<label class="current_btn red_btn hide" id="clearUploadAttachmentBtn"><input type="button" value="取消上传" /></label>
&nbsp;<label class="current_btn disabled_btn" id="clearAddAttachmentBtn"><input type="button" value="取消" style="width:52px;"></label>
</div>
{{? it.type != "image" }}
<div class="blank9"></div>
<div class="client_tips">
<strong>提示：</strong>PDF格式的文档可以通过&nbsp;<a href="javascript:;" class="SWF_CLIENT" args="courseId=6 type=attachment lectureID={{=attachmentLectureId}} attachmentID={{=attachmentId}}">方维客户端</a>&nbsp;在本地转换后进行上传，就可立即使用。
</div>
{{?}}
</td>
</script> 
<script id="attachmentItemTpl" type="text/template">
<td>{{=it.resource_name_user}}</td>
{{? it.resource.converter_status == 1 }}
<td align="center">{{=it.resource.duration}}</td>
<td align="center">{{=it.resource.size}}M</td>
<td align="center">上传成功</td>
{{??}}
<td align="center">--</td>
<td align="center">{{=it.resource.size}}M</td>
<td align="center">转换中...</td>
{{?}}
<td align="center">
<a class="handler_btn handler_btn_blue attachment_edit_btn" href="javascript:;" aid="{{=it.id}}">修改</a>&nbsp;
<a class="handler_btn handler_btn_gray attachment_remove_btn" href="javascript:;" aid="{{=it.id}}">删除</a>
</td>
</script> 
<!--end JS模版-->
<script>
var courseId = 4;
</script>
<script>
seajs.use("user");
seajs.use("creat");
</script>

</body>
</html>