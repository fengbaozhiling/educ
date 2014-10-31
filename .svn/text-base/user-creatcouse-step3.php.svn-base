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
							<a class="seleted" href="">上传点播课程</a><a href="">上传直播课程</a>
						</div>
					</div>
					<div id="sectionBox"></div>
					<div class="section_add"> <a href="javascript:;"><span>+&nbsp;添加章节</span></a> </div>
					<div class="fright ceh_btns">
						<a class="btn" href="/course/detail/4">预览</a>
						<a data="course_publish" class="btn btn_blue" href="javascript:;">发布</a>
						<a data="course_remove" class="btn btn_red" href="javascript:;">删除</a>
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
<script id="createSectionTpl" type="text/template">
<div class="section_form_box">
<form class="setion_form">
<div>
<strong>章节名称：</strong>
<input type="text" name="name" id="sectionName" class="ftext" maxlen="80" style="width:638px;"/>
</div>
<div class="blank9"></div>
<div>
<strong>　　　　　</strong>
<label class="current_btn small_btn green_btn" id="addSectionSubmit"><input type="button" value="添加" /></label>&nbsp;&nbsp;
<label class="current_btn small_btn disabled_btn" id="addSectionClear"><input type="button" value="取消" /></label>
</div>
<input type="hidden" name="id" value="4" />
</form>
</div>
</script> 
<script id="editSectionTpl" type="text/template">
<form class="setion_form">
<div>
<strong>章节名称：</strong>
<input type="text" name="name" id="sectionName" class="ftext" maxlen="80" value="{{=it.name}}" style="width:636px;"/>
</div>
<div class="blank9"></div>
<div>
<strong>　　　　　</strong>
<label class="current_btn small_btn green_btn" id="editSectionSubmit"><input type="button" value="保存" /></label>&nbsp;&nbsp;
<label class="current_btn small_btn disabled_btn" id="editSectionClear"><input type="button" value="取消" /></label>
</div>
<input type="hidden" name="sid" value="{{=it.id}}" />
<input type="hidden" name="id" value="4" />
</form>
</script>
<script id="addVodTpl" type="text/template">
<tbody id="addVodTbody">
<tr>
<td class="edittd" colspan="4">
<form>
<div class="edit_table">
<table class="et_table" cellspacing="0">
<tr>
<th width="100"><span>讲座名称</span></th>
<td><div><input type="text" name="name" id="vodName" class="ftext" maxlen="80"/></div></td>
</tr>
<tr class="textarea_tr">
<th><span>讲座简介</span></th>
<td><div><textarea name="brief" id="vodBrief" class="ftext" maxlen="200"></textarea></div></td>
</tr>
<tr>
<th><span>封面图片</span></th>
<td>
<div style="line-height:2em;">
<strong>提　　示：</strong>图片规格为 640x480(点播封面图片将显示在点播列表和播放器初始页，如果未设置将使用课程封面图片)！	<br/>
<strong>操作步骤：</strong>选择图片&nbsp;<span class="f14">&rarr;</span>&nbsp;确定&nbsp;<span class="f14">&rarr;</span>&nbsp;上传图片
</div>
<div class="blank9"></div>
<div class="img_upload_box">
<div class="iub_btns"></div>
<div class="iub_swf"></div>
<div class="iub_swfbox">
<div id="vodImgSwf"></div>
</div>
</div>
</td>
</tr>
</table>
<div class="et_btns">
<label class="current_btn green_btn" id="addVodSubmit"><input type="button" value="提交" /></label>&nbsp;&nbsp;&nbsp;&nbsp;
<label class="current_btn disabled_btn" id="addVodClear"><input type="button" value="取消" /></label>
<input type="hidden" name="id" value="4" />
<input type="hidden" name="sid" id="sectionId" value="{{=it.id}}" />
<input type="hidden" name="img_id" id="imgId" value="0" />
<input type="hidden" name="img_data" id="imgData" value="" />
</div>
</div>
</form>
</td>
</tr>
</tbody>
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
<strong>提示：</strong>PDF格式的文档可以通过&nbsp;<a href="javascript:;" class="SWF_CLIENT" args="courseId=4 type=attachment lectureID={{=attachmentLectureId}}">方维客户端</a>&nbsp;在本地转换后进行上传，就可立即使用。
</div>
</td>
</tr>
</tobdy>
</script> 
<script id="editVodTpl" type="text/template">
<td class="edittd" colspan="4" id="editVodTd">
<form>
<div class="edit_table">
<table class="et_table" cellspacing="0">
<tr>
<th width="100"><span>讲座名称</span></th>
<td><div><input type="text" name="name" id="vodName" class="ftext" maxlen="80" value="{{=it.name}}"/></div></td>
</tr>
<tr class="textarea_tr">
<th><span>讲座简介</span></th>
<td><div><textarea name="brief" id="vodBrief" class="ftext" maxlen="200">{{=it.brief}}</textarea></div></td>
</tr>
<tr>
<th><span>封面图片</span></th>
<td>
<div style="line-height:2em;">
<strong>提　　示：</strong>图片规格为 640x480(点播封面图片将显示在点播列表和播放器初始页，如果未设置将使用课程封面图片)！	<br/>
<strong>操作步骤：</strong>选择图片&nbsp;<span class="f14">&rarr;</span>&nbsp;确定&nbsp;<span class="f14">&rarr;</span>&nbsp;上传图片
</div>
<div class="blank9"></div>
<div class="img_upload_box">
<div class="iub_btns"></div>
<div class="iub_swf"></div>
<div class="iub_swfbox">
<div id="vodImgSwf"></div>
</div>
</div>
</td>
</tr>
</table>
<div class="et_btns">
<label class="current_btn green_btn" id="editVodSubmit"><input type="button" value="提交" /></label>&nbsp;&nbsp;&nbsp;&nbsp;
<label class="current_btn disabled_btn" id="editVodClear"><input type="button" value="取消" /></label>
<input type="hidden" name="id" value="4" />
<input type="hidden" name="lid" id="lectureId" value="{{=it.id}}" />
<input type="hidden" name="img_id" id="imgId" value="{{=it.img_id}}" />
<input type="hidden" name="img_data" id="imgData" value="" />
</div>
</div>
</form>
</td>
</script>
<script id="uploadVodVideoTpl" type="text/template">
<tr class="no_sortable lecture_handler_{{=it.lid}}" id="vodVideoBox">
<td colspan="4">
<div class="border_tip fleft" id="vodVideoUploadTip" style="width:586px;">支持格式 .flv .f4v .avi .mpg .mpeg .mp4 .wmv .mov</div>
<div class="fleft hide" id="vodVideoUploadProgress" style="width:594px;"><div class="progress-label">加载文件中，请稍候...</div></div>
<div class="upload_btn" id="uploadVodVideoBtns" style="width:auto;">
<div id="uploadVodVideoSwf" class="upload_swf"></div>
<label class="current_btn green_btn" id="uploadVodVideoBtn"><input type="button" value="上传视频"></label>
<label class="current_btn red_btn hide" id="clearUploadVodVideoBtn"><input type="button" value="取消上传" /></label>
&nbsp;<label class="current_btn disabled_btn" id="clearVodVideoBtn"><input type="button" value="取消" style="width:52px;"></label>
</div>
<div class="blank9"></div>
<div class="client_tips">
<strong>提示：</strong>文件上传最大支持100M，超过此大小的文件可&nbsp;<a href="javascript:;" class="SWF_CLIENT" args="courseId=4 type=vod lectureID={{=it.lid}}">方维客户端</a>&nbsp;进行上传。
</div>
</td>
</tr>
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
<strong>提示：</strong>PDF格式的文档可以通过&nbsp;<a href="javascript:;" class="SWF_CLIENT" args="courseId=4 type=attachment lectureID={{=attachmentLectureId}} attachmentID={{=attachmentId}}">方维客户端</a>&nbsp;在本地转换后进行上传，就可立即使用。
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
seajs.use("creat");
</script>

</body>
</html>