define(function(require, exports, module) {
	var user = require('./user');
	var swfobject = require('./swfobject');
	var bgiframe = require('./jquery.bgiframe');
	var dot = require('./dot');
	var datepicker = require('../datepicker/jquery.datepicker');
	var editor;
	EDUCAT.uploadClient=function(){
		$(".SWF_CLIENT").each(function(){
		var time = (new Date()).getTime();
		if(this.id == "")
			this.id = "webClient" + time;
		
		var args = $(this).attr("args");
		if(args == "undefined")
			args = "";
		
		swfobject.embedSWF(SITEURL + "public/swf/client.swf",
			this.id, $(this).width() + 50,22, "11.5",
			SITEURL + "public/swf/expressInstall.swf",{
				label:$(this).text(),
				installUrl:SITEURL + "soft/client",
				arguments:args
			}, {
				menu: "false",
				wmode:"transparent",
				allowscriptaccess:"always"
			},{
				id: "webClient" + time,
				name: "webClient" + time,
				"class": "swf_client_link"
			});
		
		$(this).removeClass('SWF_CLIENT');
	});
	
	$(".UPLOAD_PHOTO_BOX_INIT").each(function(){
		var time = (new Date()).getTime();
		var swf = $(".UPLOAD_PHOTO_SWF",this).get(0);
		var swfId = "uploadPhotoSwf" + time;
		if(swf.id == "")
			swf.id = swfId;
		else
			swfId = swf.id;
		
		var maxSize = $(this).attr("maxSize");
		var imgCount = $(this).attr("imgCount");
		var resourceId = $(this).attr("resourceId");
		var uploadComplete = $(this).attr("uploadComplete");
		var width = $(this).width();
		var height = $(this).height();
		swfobject.embedSWF(SITEURL + "public/swf/photo.swf",
			swfId,width,height, "11.5",
			SITEURL + "public/swf/expressInstall.swf",{
				siteUrl:SITEURL,
				maxSize:maxSize,
				imgCount:imgCount,
				resourceId:resourceId,
				resourceId:resourceId,
				uploadCompleteHandler:uploadComplete,
				swfId:swfId
			}, {
				menu: "false",
				wmode:"transparent",
				allowscriptaccess:"always"
			},{
				id:swfId,
				name:swfId,
				"class": ""
			});
		$(this).removeClass('UPLOAD_PHOTO_BOX_INIT').addClass("UPLOAD_PHOTO_BOX").css({"width":width,"height":height});
	});
	};
	$(".SWF_CLIENT").each(function(){
		var time = (new Date()).getTime();
		if(this.id == "")
			this.id = "webClient" + time;
		
		var args = $(this).attr("args");
		if(args == "undefined")
			args = "";
		
		swfobject.embedSWF(SITEURL + "public/swf/client.swf",
			this.id, $(this).width() + 50,22, "11.5",
			SITEURL + "public/swf/expressInstall.swf",{
				label:$(this).text(),
				installUrl:SITEURL + "soft/client",
				arguments:args
			}, {
				menu: "false",
				wmode:"transparent",
				allowscriptaccess:"always"
			},{
				id: "webClient" + time,
				name: "webClient" + time,
				"class": "swf_client_link"
			});
		
		$(this).removeClass('SWF_CLIENT');
	});
	
	$(".UPLOAD_PHOTO_BOX_INIT").each(function(){
		var time = (new Date()).getTime();
		var swf = $(".UPLOAD_PHOTO_SWF",this).get(0);
		var swfId = "uploadPhotoSwf" + time;
		if(swf.id == "")
			swf.id = swfId;
		else
			swfId = swf.id;
		
		var maxSize = $(this).attr("maxSize");
		var imgCount = $(this).attr("imgCount");
		var resourceId = $(this).attr("resourceId");
		var uploadComplete = $(this).attr("uploadComplete");
		var width = $(this).width();
		var height = $(this).height();
		swfobject.embedSWF(SITEURL + "public/swf/photo.swf",
			swfId,width,height, "11.5",
			SITEURL + "public/swf/expressInstall.swf",{
				siteUrl:SITEURL,
				maxSize:maxSize,
				imgCount:imgCount,
				resourceId:resourceId,
				resourceId:resourceId,
				uploadCompleteHandler:uploadComplete,
				swfId:swfId
			}, {
				menu: "false",
				wmode:"transparent",
				allowscriptaccess:"always"
			},{
				id:swfId,
				name:swfId,
				"class": ""
			});
		$(this).removeClass('UPLOAD_PHOTO_BOX_INIT').addClass("UPLOAD_PHOTO_BOX").css({"width":width,"height":height});
	});
	
	//上传封面
	$(".swf_box").length && swfobject.embedSWF("/public/swf/img.swf", "swf_box", "640", "533", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	//上传课程第一步
	$(".is_privacy").length && $(".is_privacy").change(function() {
		if (this.value == "0") $(".invite_code_box").hide();
		else $(".invite_code_box").show();
	});

	$(".is_price").length && $(".is_price").change(function() {
		if (this.value == "0") {
			$("#priceBox").hide();
			$("#CONURSE_PRICE_TOOLTIP").remove();
		} else {
			$("#priceBox").show();
		}
	});

	$("#courseBasicsForm").length && $("#courseBasicsForm").submit(function() {
		form = this;
		var name = $.trim(form.name.value);
		if (name == '' || name == $(form.name).attr('placeholder')) {
			form.name.focus();
			EDUCAT.ShowMiNiTooltip($(form.name), "COURSE_BASICS_TOOLTIP", '课程名称不能为空', 0, 1);
			return false;
		}

		var brief = $.trim(form.brief.value);
		if (brief == '' || brief == $(form.brief).attr('placeholder')) {
			form.brief.focus();
			EDUCAT.ShowMiNiTooltip($(form.brief), "COURSE_BASICS_TOOLTIP", '课程简介不能为空', 0, 1);
			return false;
		}
		var tName = $.trim(form.tName.value);
		if (tName == '') {
			form.tName.focus();
			EDUCAT.ShowMiNiTooltip($(form.tName), "COURSE_BASICS_TOOLTIP", '主讲师不能为空', 0, 1);
			return false;
		}
		var imageRid = $.trim(form.image_rid.value);
		var imageData = $.trim(form.image_data.value);
		if(imageRid == '' || imageData == ''){
			
			EDUCAT.ShowMiNiTooltip($('div.preview_box'), "COURSE_BASICS_TOOLTIP", '封面图片不能为空', 0, 1);
			return false;
		}
		EDUCAT.ShowLoading($(form));
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=saveBasics",
			type: "POST",
			data: $(form).serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading($(form));
				if (result.status == 1) {
					//EDUCAT.ShowAlert("操作提示", "更新成功");
					setTimeout(function(){
						location.href = result.url;
					},1);
				} else {
					switch (result.field) {
					case "name":
						{
							form.name.focus();
							EDUCAT.ShowMiNiTooltip($(form.name), "COURSE_BASICS_TOOLTIP", result.msg, 0, 1);
							return;
						}
						break;

					case "brief":
						{
							form.brief.focus();
							EDUCAT.ShowMiNiTooltip($(form.brief), "COURSE_BASICS_TOOLTIP", result.msg, 0, 1);
							return;
						}
						break;

					case "tags":
						{
							form.tags.focus();
							EDUCAT.ShowMiNiTooltip($(form.tags), "COURSE_BASICS_TOOLTIP", result.msg, 0, 1);
							return;
						}
						break;
					}
					EDUCAT.ShowMiNiTooltip($('.submit_button', form), "COURSE_BASICS_TOOLTIP", result.msg, 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideLoading($(form));
			}
		});
		return false;
	});
	//第二步
	$("textarea[name='content']").length && KindEditor.ready(function(K) {
		editor = K.create('textarea[name="content"]', {
			resizeType : 1,
			allowPreviewEmoticons : false,
			allowImageUpload : false,
			items : [
				'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
				'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
				'insertunorderedlist', '|', 'emoticons', 'image', 'link']
		});
	});
	
	$(".gir_add").length && $(".gir_add").click(function() {
		var box = $($(this).attr("rel"));
		if ($(".gir_item", box).length < 10) {
			box.append($($(this).attr("html")).html());
			EDUCAT.FormatAppendHtml();
		} else $(this).hide();
	});

	$(".gir_remove").length && $(document).on('click', '.gir_remove',function() {
		var item = $(this).parent().parent();
		var box = item.parent();
		$(".gir_add", box).show();
		if ($(".gir_item", box).length > 1) item.remove();
		else {
			$(".txt", item).val("");
		}
	});

	$("#courseDetailsForm").length && $("#courseDetailsForm").submit(function() {
		if (IS_IE6) $("#courseContent").val($("#courseContent").val().replace(/[\n]/g, "<br/>"));
		else $("#courseContent").val(editor.html());
		var content = $.trim($("#courseContent").val());
		if (content == '') {
			$("body").scrollTop(0);
			EDUCAT.ShowMiNiTooltip($("#cke_courseContent"), "COURSE_DETAILS_TOOLTIP", '详细说明不能为空', 0, 1);
			return false;
		}
		var form = $(this);
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=saveDetails",
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				if (result.status == 1) {
					//EDUCAT.ShowAlert("操作提示", "更新成功");
					location.href = result.url;
				} else {
					var element;
					switch (result.field) {
					case "content":
						{
							$("body").scrollTop(0);
							element = $("#cke_courseContent");
						}
						break;

					case "goal":
						element = $("#goalBox");
						break;

					case "intended_user":
						element = $("#intendedUserBox");
						break;

					case "requirements":
						element = $("#requirementsBox");
						break;
					}
					if (element) EDUCAT.ShowMiNiTooltip(element, "COURSE_DETAILS_TOOLTIP", result.msg, 0, 1);
					else EDUCAT.ShowMiNiTooltip($('.submit_button', form), "COURSE_DETAILS_TOOLTIP", result.msg, 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
			}
		});
		return false;
	})

	$("#goalBox").length && function () {
		$("#goalBox").sortable();
		$("#intendedUserBox").sortable();
		$("#requirementsBox").sortable();
	} ()
	
	//第三步 上传点播讲座
	var editSectionHtml = '';
	var sectionSortTimeout;
	$("#sectionBox").sortable({
		handle: ".lt_title",
		cancel: ".no_sortable",
		cursor: "move",
		stop: function(event, ui) {
			clearTimeout(sectionSortTimeout);
			var query = new Object();
			query.id = courseId;
			query.sids = new Array();
			$(".section_list").each(function(index) {
				query.sids.push($(this).attr("sid"));
			});
			var fun = function() {
				$.ajax({
					url: SITEURL + "index.php?m=coursemanage&a=sectionSort",
					type: "POST",
					data: query,
					cache: false,
					dataType: "json"
				});
			}
			sectionSortTimeout = setTimeout(fun, 3000);
		}
	});
	
	$(".section_add a").click(function() {
		EDUCAT.ResetSection();
		$(".section_add").after($("#createSectionTpl").html());
		$(".section_add").hide();
		EDUCAT.FormatAppendHtml();
	});
	//添加章节
	$(document).on("click", "#addSectionSubmit",function() {
		var form = $(this).parents("form");
		if (!EDUCAT.checkRequire($("#sectionName").val())) {
			$("#sectionName").focus();
			EDUCAT.ShowMiNiTooltip($("#sectionName"), "SECTION_FORM_TOOLTIP", LANG.section_name_require, 0, 1);
			return false;
		}
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=createSection",//ajax/createSection.php
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				if (result.status == 1) {
					$(".section_form_box").remove();
					$(".section_add").show();
					$("#sectionBox").append(result.html);
				} else {
					if (typeof result.field != "undefined" && result.field == "name") EDUCAT.ShowMiNiTooltip($("#sectionName"), "SECTION_FORM_TOOLTIP", result.msg, 0, 1);
					else EDUCAT.ShowMiNiTooltip($("#addSectionSubmit"), "SECTION_FORM_TOOLTIP", result.msg, 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
				EDUCAT.ShowMiNiTooltip($("#addSectionSubmit"), "SECTION_FORM_TOOLTIP", LANG.submit_error, 0, 0);
			}
		});
	}).on("click", "#addSectionClear",function() {
		$(".section_form_box").remove();
		$(".section_add").show();
	}).on("click", ".edit_section_btn",function() {
		EDUCAT.ResetSection();
		var self = $(this);
		var box = self.parents(".lt_title");
		box.addClass('no_sortable');
		editSectionHtml = box.html();
		
		var args = new Object();
		args.id = self.attr("sid");
		args.name = self.attr("fullname");
		box.html(EDUCAT.Template($("#editSectionTpl").html(), args));
		EDUCAT.FormatAppendHtml();
	}).on("click", "#editSectionSubmit",function() {
		var form = $(this).parents("form");
		var box = form.parent();
		if (!EDUCAT.checkRequire($("#sectionName").val())) {
			$("#sectionName").focus();
			EDUCAT.ShowMiNiTooltip($("#sectionName"), "SECTION_FORM_TOOLTIP", LANG.section_name_require, 0, 1);
			return false;
		}
	
		EDUCAT.ShowLoading(box);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=updateSection",// ajax/updateSection.php
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(box);
				if (result.status == 1) {
					box.html(result.html);
					box.removeClass('no_sortable');
				} else {
					if (typeof result.field != "undefined" && result.field == "name") EDUCAT.ShowMiNiTooltip($("#section_name"), "SECTION_FORM_TOOLTIP", result.msg, 0, 1);
					else EDUCAT.ShowMiNiTooltip($("#editSectionSubmit"), "SECTION_FORM_TOOLTIP", result.msg, 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideLoading(box);
				EDUCAT.ShowMiNiTooltip($("#editSectionSubmit"), "SECTION_FORM_TOOLTIP", LANG.submit_error, 0, 0);
			}
		});
	}).on("click", "#editSectionClear",
	function() {
		EDUCAT.ResetSection();
	}).on("click", ".remove_section_btn",function() {
		var self = $(this);
		var box = self.parent();
		var sid = self.attr("sid");
		var query = new Object();
	//	query.id = courseId;
		query.sid = sid;
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=deleteSection",// ajax/deleteSection.php
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				if (result.status == 1) {
					$("#section" + sid).remove();
				} else {
					EDUCAT.ShowMiNiTooltip(self, "SECTION_FORM_TOOLTIP", result.msg, 0, 0);
				}
			},
			error: function() {
				
				EDUCAT.HideMiniLoading(box);
			}
		});
	});
	
	EDUCAT.ResetSection = function() {
		if ($(".section_form_box").length > 0) {
			$(".section_form_box").remove();
			$(".section_add").show();
		}
	
		if ($(".setion_form").length > 0) {
			var parent = $(".setion_form").parent();
			parent.html(editSectionHtml);
			parent.removeClass('no_sortable');
			editSectionHtml = '';
		}
	};
	
	var vodVideoUploadCount = 0;
	var vodVideoLectureId = 0;
	var vodVideoResourceId = 0;
	var vodSortTimeout;
	var editVodHtml = '';
	$(".vod_list").length && $(".vod_list").sortable({
		handle: ".vod_sortable",
		cancel: ".no_sortable",
		cursor: "move",
		stop: function(event, ui) {
	
		}
	});
	
	EDUCAT.UpdateVodImageComplete = function(result) {
		if ($("#imgId").val() > 0) {
			var query = new Object();
			query.id = courseId;
			query.lid = $("#lectureId").val();
			query.rid = result.id;
			query.data = result.data;
			$.ajax({
				url: SITEURL + "index.php?m=coursemanage&a=updateLectureImage",
				type: "POST",
				data: query,
				cache: false,
				dataType: "json",
				success: function(result) {
					if (result.status == 1) {
						$("#vodImgSwf").get(0).UploadLoadingTip(0x0000ff, "更新图片成功", false);
					} else {
						$("#vodImgSwf").get(0).UploadLoadingTip(0xff0000, "更新图片失败", false);
					}
				},
				error: function() {
					$("#vodImgSwf").get(0).UploadLoadingTip(0xff0000, "更新图片失败", false);
				}
			});
		} else {
			$("#imgId").val(result.id);
			$("#imgData").val(result.data);
			$("#vodImgSwf").get(0).UploadLoadingTip(0x0000ff, "上传成功", false);
		}
	}
	
	$(document).on("click", ".add_vod_btn",function() {
		if (!EDUCAT.ResetVod()) return;
		var self = $(this);
		var sid = self.attr('sid');
		var args = new Object();
		args.id = sid;
		$("#vodList" + sid).before(EDUCAT.Template($("#addVodTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		var flashvars = {
			"siteUrl": SITEURL,
			"image": "",
			"resourceId": 0,
			"updateType": 0,
			"maxSize": 2,
			"uploadCompleteHandler": "EDUCAT.UpdateVodImageComplete"
		};
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "vodImgSwf",
			name: "vodImgSwf"
		};
		swfobject.embedSWF("/public/swf/img.swf", "vodImgSwf", "640", "533", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	}).on("click", "#addVodSubmit",function() {
		var self = $(this);
		var form = self.parents("form");
		var sid = $("#sectionId").val();
		if (!EDUCAT.checkRequire($("#vodName").val())) {
			$("#vodName").focus();
			EDUCAT.ShowMiNiTooltip($("#vodName"), "LECTURE_FORM_TOOLTIP", "请输入讲座名称", 0, 1);
			$("#section" + sid).get(0).scrollIntoView();
			return false;
		}
	
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=createVod",
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				if (result.status == 1) {
					$("#vodList" + sid).append('<tr id="vod' + result.id + '">' + result.html + "</tr>");
					EDUCAT.ResetVod();
				} else {
					var element = self;
					var isScroll = true;
					switch (result.field) {
					case "name":
						element = $("#liveName");
						break;
					case "brief":
						element = $("#liveBrief");
						break;
					default:
						isScroll = false;
						break;
					}
					if (isScroll) {
						$("#section" + sid).get(0).scrollIntoView();
					}
					EDUCAT.ShowMiNiTooltip(element, "LECTURE_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
			}
		});
	}).on("click", "#addVodClear",
	function() {
		EDUCAT.ResetVod();
	}).on("click", ".vod_edit_btn",
	function() {
		if (!EDUCAT.ResetVod()) return;
	
		var self = $(this);
		var lid = self.attr('lid');
		var box = self.parent();
		var lecture = $("#vod" + lid);
		lecture.addClass('no_sortable');
	
		EDUCAT.ShowMiniLoading(box);
		var query = new Object();
		query.id = courseId;
		query.lid = lid;
	
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=getLecture",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				editVodHtml = lecture.html();
				lecture.html(EDUCAT.Template($("#editVodTpl").html(), result));
				EDUCAT.FormatAppendHtml();
	
				var flashvars = {
					"siteUrl": SITEURL,
					"image": result.img_id > 0 ? result.img_big_src: "",
					"resourceId": result.img_id,
					"updateType": 0,
					"maxSize": 2,
					"uploadCompleteHandler": "EDUCAT.UpdateVodImageComplete"
				};
				var params = {
					menu: "false",
					wmode: "transparent",
					allowscriptaccess: "always"
				};
				var attributes = {
					id: "vodImgSwf",
					name: "vodImgSwf"
				};
				swfobject.embedSWF("/public/swf/img.swf", "vodImgSwf", "640", "533", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
				lecture.removeClass('no_sortable');
			}
		});
	}).on("click", "#editVodSubmit",
	function() {
		var self = $(this);
		var form = self.parents("form");
		var lid = $("#lectureId").val();
	
		if (!EDUCAT.checkRequire($("#vodName").val())) {
			$("#vodName").focus();
			EDUCAT.ShowMiNiTooltip($("#vodName"), "LECTURE_FORM_TOOLTIP", "请输入讲座名称", 0, 1);
			$("#vod" + lid).get(0).scrollIntoView();
			return false;
		}
	
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=updateVod",
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				$("#vod" + result.lid).removeClass('no_sortable');
				if (result.status == 1) {
					$("#vod" + result.lid).html(result.html);
				} else {
					var element = self;
					var isScroll = true;
					switch (result.field) {
					case "name":
						element = $("#vodName");
						break;
					case "brief":
						element = $("#vodBrief");
						break;
					default:
						isScroll = false;
						break;
					}
					if (isScroll) {
						$("#vod" + lid).get(0).scrollIntoView();
					}
					EDUCAT.ShowMiNiTooltip(element, "LECTURE_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
			}
		});
	}).on("click", "#editVodClear",
	function() {
		EDUCAT.ResetVod();
	}).on("click", ".vod_remove_btn",
	function() {
		var box = $(this).parent();
		var lecture = box.parent();
		var deleteBtn = $(this);
	
		var query = new Object();
	//	query.id = courseId;
		query.lid = $(this).attr("lid");
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=deleteLecture",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				if (result.status == 1) {
					lecture.remove();
				} else {
					EDUCAT.ShowMiNiTooltip(deleteBtn, "DELETE_LECTURE_TOOLTIP", "删除失败", 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	}).on("click", ".vod_video_btn",
	function() {
		if (!EDUCAT.ResetVod()) return;
		var self = $(this);
		vodVideoLectureId = parseInt(self.attr('lid'));
		if ($(".lecture_handler_" + vodVideoLectureId).length > 0) {
			if (attachmentUploadCount > 0) {
				EDUCAT.ShowMiNiTooltip($(this), "VOD_UPLOAD_TOOLTIP", "有课件正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
				return false;
			} else {
				$(".lecture_handler_" + vodVideoLectureId).remove();
			}
		}
	
		var self = $(this);
		vodVideoResourceId = parseInt(self.attr('rid'));
		var type = self.attr('type');
		var args = new Object();
		args.lid = vodVideoLectureId;
		$("#vod" + vodVideoLectureId).after(EDUCAT.Template($("#uploadVodVideoTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		$("#vodVideoUploadProgress").progressbar();
		EDUCAT.VodVideoUploadSwf(vodVideoResourceId);
		EDUCAT.uploadClient();
	}).on("click", "#clearVodVideoBtn",
	function() {
		EDUCAT.ResetVod();
	});
	
	EDUCAT.ResetVod = function() {
		if (vodVideoUploadCount > 0) {
			EDUCAT.ShowMiNiTooltip($(this), "VOD_UPLOAD_TOOLTIP", "有视频正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
			return false;
		}
	
		$("#addVodTbody").remove();
		if ($("#editVodTd").length > 0) {
			$("#editVodTd").parent().html(editVodHtml);
			$("#editVodTd").parent().removeClass('no_sortable');
			editVodHtml = '';
		}
		$("#vodVideoBox").remove();
		return true;
	}
	
	EDUCAT.VodVideoUploadSwf = function(rid) {
		$("#vodVideoUploadProgress").progressbar("destroy");
		$("#uploadVodVideoSwf").remove();
		$("#uploadVodVideoBtns").prepend('<div id="uploadVodVideoSwf" class="upload_swf"></div>');
	
		var flashvars = {
			"type": "media",
			"resourceId": rid,
			"mediaMaxSize": 1024,
			"siteUrl": SITEURL,
			"updateType": 0,
			"progressHandler": "EDUCAT.UploadVodVideoProgressHandler",
			"buttonStatusHandler": "EDUCAT.UpdateVodVideoUploadButtonStatus",
			"uploadCompleteHandler": "EDUCAT.UploadVodVideoComplete",
		};
	
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "uploadVodVideoSwf",
			name: "uploadVodVideoSwf",
			styleclass: "upload_swf"
		};
		swfobject.embedSWF("/public/swf/upload.swf", "uploadVodVideoSwf", "70", "26", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	}
	
	EDUCAT.UploadVodVideoProgressHandler = function(loaded, total) {
		EDUCAT.FileProgressHandler("#vodVideoUploadProgress", loaded, total);
	}
	
	EDUCAT.UploadVodVideoComplete = function(result) {
		result = JSON.parse(result);
	
		if (result.id == vodVideoResourceId && (typeof result.hash_exists !== "undefined" && result.hash_exists == 1)) {
			EDUCAT.UpdateVodVideoUploadButtonStatus(true);
			EDUCAT.ShowAlert("操作提示", "更新视频成功！");
			$("#vod" + vodVideoLectureId).html(editVodHtml);
			return;
		}
	
		var query = new Object();
		query.id = courseId;
		query.rid = result.id;
		query.data = result.data;
		query.lid = vodVideoLectureId;
		EDUCAT.FileProgressHandler("#UploadVodVideoProgressHandler", 1, 1, "更新视频中，请稍候...");
	
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=updateVodVideo",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.UpdateVodVideoUploadButtonStatus(true);
				if (result.status == 1) {
					EDUCAT.ShowAlert("操作提示", "更新视频成功！");
					var fun = function() {
						$("#vod" + result.lid).html(result.html);
						EDUCAT.ResetVod();
					}
					setTimeout(fun, 500);
				} else {
					EDUCAT.ShowAlert("操作提示", "更新视频失败");
				}
			},
			error: function() {
				EDUCAT.ShowAlert("操作提示", "更新视频失败");
				EDUCAT.UpdateVodVideoUploadButtonStatus(true);
			}
		});
	}
	
	EDUCAT.UpdateVodVideoUploadButtonStatus = function(status) {
		if (status) {
			vodVideoUploadCount--;
			$("#uploadVodVideoBtn").removeClass("hide");
			$("#clearUploadVodVideoBtn").addClass("hide");
			$("#vodVideoUploadTip").removeClass("hide");
			$("#vodVideoUploadProgress").addClass("hide");
			$("#vodVideoUploadProgress").progressbar("destroy");
		} else {
			vodVideoUploadCount++;
			$("#uploadVodVideoBtn").addClass("hide");
			$("#clearUploadVodVideoBtn").removeClass("hide");
			$("#vodVideoUploadTip").addClass("hide");
			$("#vodVideoUploadProgress").removeClass("hide");
			$("#vodVideoUploadProgress").progressbar();
		}
	}
	
	
	var attachmentUploadCount = 0;
	var attachmentId = 0;
	window.attachmentLectureId = 0;
	var attachmentResourceId = 0;
	var attachmentHtml = '';
	$("#lecture_attachment_btn").length && $(document).on("click", ".lecture_attachment_btn",function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
		var lid = $(this).attr("lid");
		if ($(".lecture_handler_" + lid).length > 0) {
			if (vodVideoUploadCount > 0) {
				EDUCAT.ShowMiNiTooltip($(this), "VOD_UPLOAD_TOOLTIP", "有视频正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
				return false;
			} else {
				$(".lecture_handler_" + lid).remove();
			}
		}
	
		$("#attachmentBox").remove();
		var box = $(this).parent();
		var lecture = box.parent();
		var btn = $(this);
	
		EDUCAT.ShowMiniLoading(box);
	
		var query = new Object();
		query.id = courseId;
		query.lid = lid;
		$.ajax({
			url: SITEURL + "index.php?m=coursemanage&a=getLectureAttachment",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				lecture.after(result.html);
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	}).on("click", "#addAttachment",function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
	
		var self = $(this);
		attachmentLectureId = self.attr('lid');
		attachmentId = 0;
		attachmentResourceId = 0;
		var args = new Object();
		args.type = "document_image";
		$("#attachmentList").before(EDUCAT.Template($("#addAttachmentTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		$("#attachmentUploadProgress").progressbar();
		EDUCAT.AttachmentUploadSwf("document_image", 0);
	}).on("click", "#hideAttachment",function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
		$("#attachmentBox").remove();
	}).on("click", ".attachment_edit_btn",function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
		var self = $(this);
		attachmentId = parseInt(self.attr('aid'));
		attachmentLectureId = parseInt(self.attr('lid'));
		attachmentResourceId = parseInt(self.attr('rid'));
		attachmentHtml = $("#attachment" + attachmentId).html();
		var type = self.attr('type');
		var args = new Object();
		args.type = type;
		$("#attachment" + attachmentId).html(EDUCAT.Template($("#editAttachmentTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		$("#attachmentUploadProgress").progressbar();
		EDUCAT.AttachmentUploadSwf(type, attachmentResourceId);
	}).on("click", "#clearAddAttachmentBtn",function() {
		EDUCAT.AttachmentResetHandler();
	}).on("click", ".attachment_remove_btn",function() {
		var self = $(this);
		var box = self.parent();
		var attachment = box.parent();
		var query = new Object();
		query.id = courseId;
		query.aid = self.attr("aid");
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=deleteAttachment",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				if (result.status == 1) {
					attachment.remove();
				} else {
					EDUCAT.ShowMiNiTooltip(self, "ATTACHMENT_UPLOAD_TOOLTIP", "删除失败", 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	});
	
	EDUCAT.AttachmentResetHandler = function() {
		if (attachmentUploadCount > 0) {
			EDUCAT.ShowMiNiTooltip($(this), "ATTACHMENT_UPLOAD_TOOLTIP", "有课件正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
			return false;
		}
	
		$("#uploadAttachmentBox").remove();
		if (attachmentId > 0) {
			$("#attachment" + attachmentId).html(attachmentHtml);
		}
	
		attachmentId = 0;
		attachmentResourceId = 0;
		attachmentHtml = '';
		return true;
	}
	
	EDUCAT.AttachmentUploadSwf = function(type, rid) {
		$("#attachmentUploadProgress").progressbar("destroy");
		$("#uploadAttachmentSwf").remove();
		$("#uploadAttachmentBtns").prepend('<div id="uploadAttachmentSwf" class="upload_swf"></div>');
	
	
		var flashvars = {
			"type": type,
			"resourceId": rid,
			"documentMaxSize": 100,
			"imageMaxSize": 2,
			"siteUrl": SITEURL,
			"updateType": 0,
			"progressHandler": "EDUCAT.UploadAttachmentProgressHandler",
			"buttonStatusHandler": "EDUCAT.UpdateAttachmentUploadButtonStatus",
			"uploadCompleteHandler": "EDUCAT.UploadAttachmentComplete",
		};
	
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "uploadAttachmentSwf",
			name: "uploadAttachmentSwf",
			styleclass: "upload_swf"
		};
		swfobject.embedSWF("/public/swf/upload.swf", "uploadAttachmentSwf", "54", "34", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	}
	
	EDUCAT.UploadAttachmentProgressHandler = function(loaded, total) {
		EDUCAT.FileProgressHandler("#attachmentUploadProgress", loaded, total);
	}
	
	EDUCAT.UploadAttachmentComplete = function(result) {
		if (typeof result !== "object") {
			result = JSON.parse(result);
		}
	
		if (result.id == attachmentResourceId && (typeof result.hash_exists !== "undefined" && result.hash_exists == 1)) {
			EDUCAT.UpdateAttachmentUploadButtonStatus(true);
			EDUCAT.ShowAlert("操作提示", "更新课件成功！");
			var attachment = $("#attachment" + attachmentId);
			attachment.html(attachmentHtml);
			return;
		}
	
		var query = new Object();
		query.id = courseId;
		query.rid = result.id;
		query.data = result.data;
	
		if (attachmentId == 0) {
			query.lid = attachmentLectureId;
			query.a = "createAttachment";
			EDUCAT.FileProgressHandler("#UploadAttachmentProgressHandler", 1, 1, "创建课件中，请稍候...");
		} else {
			query.aid = attachmentId;
			query.a = "updateAttachment";
			EDUCAT.FileProgressHandler("#UploadAttachmentProgressHandler", 1, 1, "更新课件中，请稍候...");
		}
	
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.UpdateAttachmentUploadButtonStatus(true);
				if (result.status == 1) {
					if (attachmentId == 0) {
						EDUCAT.ShowAlert("操作提示", "创建课件成功");
					} else {
						EDUCAT.ShowAlert("操作提示", "更新课件成功");
					}
	
					var fun = function() {
						if (attachmentId == 0) {
							var html = '<tr id="attachment' + result.id + '">' + result.html + '</tr>';
							$("#attachmentList").prepend(html);
						} else {
							$("#attachment" + result.id).html(result.html);
						}
						EDUCAT.AttachmentResetHandler();
					}
					setTimeout(fun, 500);
				} else {
					if (attachmentId == 0) {
						EDUCAT.ShowAlert("操作提示", "创建课件失败");
					} else {
						EDUCAT.ShowAlert("操作提示", "更新课件失败");
					}
				}
			},
			error: function() {
				if (attachmentId == 0) {
					EDUCAT.ShowAlert("操作提示", "创建课件失败");
				} else {
					EDUCAT.ShowAlert("操作提示", "更新课件失败");
				}
				EDUCAT.UpdateAttachmentUploadButtonStatus(true);
			}
		});
	}
	
	EDUCAT.UpdateAttachmentUploadButtonStatus = function(status) {
		if (status) {
			attachmentUploadCount--;
			$("#uploadAttachmentBtn").removeClass("hide");
			$("#clearUploadAttachmentBtn").addClass("hide");
			$("#attachmentUploadTip").removeClass("hide");
			$("#attachmentUploadProgress").addClass("hide");
			$("#attachmentUploadProgress").progressbar("destroy");
		} else {
			attachmentUploadCount++;
			$("#uploadAttachmentBtn").addClass("hide");
			$("#clearUploadAttachmentBtn").removeClass("hide");
			$("#attachmentUploadTip").addClass("hide");
			$("#attachmentUploadProgress").removeClass("hide");
			$("#attachmentUploadProgress").progressbar();
		}
	}
	//第三步骤-发布直播课程
	var cameraUserCount = 25;
	var noCameraUserCount = 50;
	var nowHandlerDatas = new Object();
	$("#addLive").length && $("#addLive").click(function() {
		EDUCAT.ResetLive();
	
		$("#liveList").before($("#addLiveTpl").html());
		EDUCAT.FormatAppendHtml();
		var minDate = new Date();
		var maxDate = new Date();
		maxDate.setMonth(maxDate.getMonth() + 2);
	
		$('#startTime').datetimepicker({
			"controlType": "select",
			"minDateTime": minDate,
			"maxDateTime": maxDate
		});
		$("#liveDurationSlider").slider({
			range: "min",
			value: 4,
			min: 1,
			max: 24,
			slide: function(event, ui) {
				var duration = ui.value;
				var str;
				if (duration < 6) str = (duration * 10) + "分钟";
				else {
					var time = Math.floor(duration / 6);
					var str = time + "小时";
					time = duration % 6;
					if (time > 0) {
						str += (time * 10) + "分钟";
					}
				}
				$("#liveDurationStr").html("(" + str + ")");
				$("#liveDuration").val(duration * 600);
			}
		});
	
		var flashvars = {
			"siteUrl":SITEURL,
			"image": "",
			"resourceId": 0,
			"updateType": 0,
			"maxSize": 2,
			"uploadCompleteHandler": "EDUCAT.UpdateImageComplete"
		};
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "liveImgSwf",
			name: "liveImgSwf"
		};
		swfobject.embedSWF("/public/swf/img.swf", "liveImgSwf", "640", "533", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	});
	
	EDUCAT.UpdateImageComplete = function(result) {
		if ($("#imgId").val() > 0) {
			var query = new Object();
			query.id = courseId;
			query.lid = $("#lectureId").val();
			query.rid = result.id;
			query.data = result.data;
			$.ajax({
				url: SITE_PATH + "index.php?m=coursemanage&a=updateLectureImage",
				type: "POST",
				data: query,
				cache: false,
				dataType: "json",
				success: function(result) {
					if (result.status == 1) {
						$("#liveImgSwf").get(0).UploadLoadingTip(0x0000ff, "更新图片成功", false);
					} else {
						$("#liveImgSwf").get(0).UploadLoadingTip(0xff0000, "更新图片失败", false);
					}
				},
				error: function() {
					$("#liveImgSwf").get(0).UploadLoadingTip(0xff0000, "更新图片失败", false);
				}
			});
		} else {
			$("#imgId").val(result.id);
			$("#imgData").val(result.data);
			$("#liveImgSwf").get(0).UploadLoadingTip(0x0000ff, "上传成功", false);
		}
	}
	
	$(document).on("change", "#isCameraCheckBox",function() {
		if (this.checked) {
			$("#liveUserCount").html(cameraUserCount);
		} else {
			$("#liveUserCount").html(noCameraUserCount);
		}
	}).on("click", "#addLiveSubmit",function() {
		var form = $(this).parents("form");
		var btn = $(this);
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=createLive",
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				if (result.status == 1) {
					$("#liveList").append('<tr id="liveItem' + result.id + '">' + result.html + "</tr>");
					EDUCAT.ResetLive();
				} else {
					var element = btn;
					var isScroll = true;
					switch (result.field) {
					case "name":
						element = $("#liveName");
						break;
					case "brief":
						element = $("#liveBrief");
						break;
					case "start_time":
						element = $("#startTime");
						break;
					default:
						isScroll = true;
						break;
					}
					if (isScroll) {
						$("#addLive").get(0).scrollIntoView();
					}
					EDUCAT.ShowMiNiTooltip(element, "LECTURE_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
			}
		});
	}).on("click", "#addLiveClear",function() {
		EDUCAT.ResetLive();
	}).on("click", ".live_edit_btn",function() {
		EDUCAT.ResetLive();
	
		var box = $(this).parent();
		var lecture = box.parent();
		var btn = $(this);
	
		EDUCAT.ShowMiniLoading(box);
	
		var query = new Object();
		query.id = courseId;
		query.lid = $(this).attr("lid");
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=getLecture",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				nowHandlerDatas.editLecture = lecture.html();
				lecture.html(EDUCAT.Template($("#editLiveTpl").html(), result));
				EDUCAT.FormatAppendHtml();
	
				$("#liveDurationSlider").slider({
					range: "min",
					value: result.duration / 600,
					min: 1,
					max: 24,
					slide: function(event, ui) {
						var duration = ui.value;
						var str;
						if (duration < 6) str = (duration * 10) + "分钟";
						else {
							var time = Math.floor(duration / 6);
							var str = time + "小时";
							time = duration % 6;
							if (time > 0) {
								str += (time * 10) + "分钟";
							}
						}
						$("#liveDurationStr").html("(" + str + ")");
						$("#liveDuration").val(duration * 600);
					}
				});
	
				if (result.live_status == 0) {
					var minDate = new Date();
					var maxDate = new Date();
					maxDate.setMonth(maxDate.getMonth() + 2);
	
					$('#startTime').datetimepicker({
						"controlType": "select",
						"minDateTime": minDate,
						"maxDateTime": maxDate
					});
				} else {
					$("#liveDurationSlider").slider("disable");
				}
	
				var flashvars = {
					"siteUrl": "http://EDUCAT.epweike.net/",
					"image": result.img_id > 0 ? result.img_big_src: "",
					"resourceId": result.img_id,
					"updateType": 0,
					"maxSize": 2,
					"uploadCompleteHandler": "EDUCAT.UpdateImageComplete"
				};
				var params = {
					menu: "false",
					wmode: "transparent",
					allowscriptaccess: "always"
				};
				var attributes = {
					id: "liveImgSwf",
					name: "liveImgSwf"
				};
				swfobject.embedSWF("/public/swf/img.swf", "liveImgSwf", "640", "533", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	}).on("click", "#editLiveSubmit",function() {
		var form = $(this).parents("form");
		var btn = $(this);
		EDUCAT.ShowLoading(form);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=updateLive",
			type: "POST",
			data: form.serialize(),
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideLoading(form);
				if (result.status == 1) {
					$("#liveItem" + result.lid).html(result.html);
				} else {
					var element = btn;
					var isScroll = true;
					switch (result.field) {
					case "name":
						element = $("#liveName");
						break;
					case "brief":
						element = $("#liveBrief");
						break;
					case "start_time":
						element = $("#startTime");
						break;
					default:
						isScroll = true;
						break;
					}
					if (isScroll) {
						$("#addLive").get(0).scrollIntoView();
					}
					EDUCAT.ShowMiNiTooltip(element, "LECTURE_FORM_TOOLTIP", result.msg, 0, 1);
				}
			},
			error: function() {
				EDUCAT.HideLoading(form);
			}
		});
	}).on("click", "#editLiveClear",function() {
		EDUCAT.ResetLive();
	}).on("click", ".live_remove_btn",function() {
		var box = $(this).parent();
		var lecture = box.parent();
		var deleteBtn = $(this);
	
		var query = new Object();
		query.id = courseId;
		query.lid = $(this).attr("lid");
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=deleteLecture",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				if (result.status == 1) {
					lecture.remove();
				} else {
					EDUCAT.ShowMiNiTooltip(deleteBtn, "DELETE_LECTURE_TOOLTIP", "删除失败", 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	});
	
	EDUCAT.ResetLive = function() {
		$("#addLiveTbody").remove();
		if ($("#editLiveTd").length > 0) {
			$("#editLiveTd").parent().html(nowHandlerDatas.editLecture);
			nowHandlerDatas.editLecture = null;
		}
	}
	
	var attachmentUploadCount = 0;
	var attachmentId = 0;
	var attachmentLectureId = 0;
	var attachmentResourceId = 0;
	var attachmentHtml = '';
	$(document).on("click", ".lecture_attachment_btn",
	function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
	
		var lid = $(this).attr("lid");
		if ($(".lecture_handler_" + lid).length > 0) {
			if (vodVideoUploadCount > 0) {
				EDUCAT.ShowMiNiTooltip($(this), "VOD_UPLOAD_TOOLTIP", "有视频正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
				return false;
			} else {
				$(".lecture_handler_" + lid).remove();
			}
		}
	
		$("#attachmentBox").remove();
		var box = $(this).parent();
		var lecture = box.parent();
		var btn = $(this);
	
		EDUCAT.ShowMiniLoading(box);
	
		var query = new Object();
		query.id = courseId;
		query.lid = lid;
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=getLectureAttachment",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				lecture.after(result.html);
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	}).on("click", "#addAttachment",
	function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
	
		var self = $(this);
		attachmentLectureId = self.attr('lid');
		attachmentId = 0;
		attachmentResourceId = 0;
		var args = new Object();
		args.type = "document_image";
		$("#attachmentList").before(EDUCAT.Template($("#addAttachmentTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		$("#attachmentUploadProgress").progressbar();
		EDUCAT.AttachmentUploadSwf("document_image", 0);
		EDUCAT.uploadClient();
	}).on("click", "#hideAttachment",
	function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
		$("#attachmentBox").remove();
	}).on("click", ".attachment_edit_btn",
	function() {
		if (!EDUCAT.AttachmentResetHandler()) return;
		var self = $(this);
		attachmentId = parseInt(self.attr('aid'));
		attachmentLectureId = parseInt(self.attr('lid'));
		attachmentResourceId = parseInt(self.attr('rid'));
		attachmentHtml = $("#attachment" + attachmentId).html();
		var type = self.attr('type');
		var args = new Object();
		args.type = type;
		$("#attachment" + attachmentId).html(EDUCAT.Template($("#editAttachmentTpl").html(), args));
		EDUCAT.FormatAppendHtml();
		$("#attachmentUploadProgress").progressbar();
		EDUCAT.AttachmentUploadSwf(type, attachmentResourceId);
	}).on("click", "#clearAddAttachmentBtn",
	function() {
		EDUCAT.AttachmentResetHandler();
	}).on("click", ".attachment_remove_btn",
	function() {
		var self = $(this);
		var box = self.parent();
		var attachment = box.parent();
	
		var query = new Object();
		query.id = courseId;
		query.aid = self.attr("aid");
		EDUCAT.ShowMiniLoading(box);
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage&a=deleteAttachment",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.HideMiniLoading(box);
				if (result.status == 1) {
					attachment.remove();
				} else {
					EDUCAT.ShowMiNiTooltip(self, "ATTACHMENT_UPLOAD_TOOLTIP", "删除失败", 0, 0);
				}
			},
			error: function() {
				EDUCAT.HideMiniLoading(box);
			}
		});
	});
	
	EDUCAT.AttachmentResetHandler = function() {
		if (attachmentUploadCount > 0) {
			EDUCAT.ShowMiNiTooltip($(this), "ATTACHMENT_UPLOAD_TOOLTIP", "有课件正在上传中，请在上传完成后或停止上传后再进行操作", 0, 2);
			return false;
		}
	
		$("#uploadAttachmentBox").remove();
		if (attachmentId > 0) {
			$("#attachment" + attachmentId).html(attachmentHtml);
		}
	
		attachmentId = 0;
		attachmentResourceId = 0;
		attachmentHtml = '';
		return true;
	}
	
	EDUCAT.AttachmentUploadSwf = function(type, rid) {
		$("#attachmentUploadProgress").progressbar("destroy");
		$("#uploadAttachmentSwf").remove();
		$("#uploadAttachmentBtns").prepend('<div id="uploadAttachmentSwf" class="upload_swf"></div>');
	
		var flashvars = {
			"type": type,
			"resourceId": rid,
			"documentMaxSize": 100,
			"imageMaxSize": 2,
			"siteUrl": "http://EDUCAT.epweike.net/",
			"updateType": 0,
			"progressHandler": "EDUCAT.UploadAttachmentProgressHandler",
			"buttonStatusHandler": "EDUCAT.UpdateAttachmentUploadButtonStatus",
			"uploadCompleteHandler": "EDUCAT.UploadAttachmentComplete",
		};
	
		var params = {
			menu: "false",
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {
			id: "uploadAttachmentSwf",
			name: "uploadAttachmentSwf",
			styleclass: "upload_swf"
		};
		swfobject.embedSWF("/public/swf/upload.swf", "uploadAttachmentSwf", "54", "34", "11.5", "/public/swf/expressInstall.swf", flashvars, params, attributes);
	}
	
	EDUCAT.UploadAttachmentProgressHandler = function(loaded, total) {
		EDUCAT.FileProgressHandler("#attachmentUploadProgress", loaded, total);
	}
	
	EDUCAT.UploadAttachmentComplete = function(result) {
		if (typeof result !== "object") {
			result = JSON.parse(result);
		}
	
		if (result.id == attachmentResourceId && (typeof result.hash_exists !== "undefined" && result.hash_exists == 1)) {
			EDUCAT.UpdateAttachmentUploadButtonStatus(true);
			EDUCAT.ShowAlert("操作提示", "更新课件成功！");
			var attachment = $("#attachment" + attachmentId);
			attachment.html(attachmentHtml);
			return;
		}
	
		var query = new Object();
		query.id = courseId;
		query.rid = result.id;
		query.data = result.data;
	
		if (attachmentId == 0) {
			query.lid = attachmentLectureId;
			query.a = "createAttachment";
			EDUCAT.FileProgressHandler("#UploadAttachmentProgressHandler", 1, 1, "创建课件中，请稍候...");
		} else {
			query.aid = attachmentId;
			query.a = "updateAttachment";
			EDUCAT.FileProgressHandler("#UploadAttachmentProgressHandler", 1, 1, "更新课件中，请稍候...");
		}
	
		$.ajax({
			url: SITE_PATH + "index.php?m=coursemanage",
			type: "POST",
			data: query,
			cache: false,
			dataType: "json",
			success: function(result) {
				EDUCAT.UpdateAttachmentUploadButtonStatus(true);
				if (result.status == 1) {
					if (attachmentId == 0) {
						EDUCAT.ShowAlert("操作提示", "创建课件成功");
					} else {
						EDUCAT.ShowAlert("操作提示", "更新课件成功");
					}
	
					var fun = function() {
						if (attachmentId == 0) {
							var html = '<tr id="attachment' + result.id + '">' + result.html + '</tr>';
							$("#attachmentList").prepend(html);
						} else {
							$("#attachment" + result.id).html(result.html);
						}
						EDUCAT.AttachmentResetHandler();
					}
					setTimeout(fun, 500);
				} else {
					if (attachmentId == 0) {
						EDUCAT.ShowAlert("操作提示", "创建课件失败");
					} else {
						EDUCAT.ShowAlert("操作提示", "更新课件失败");
					}
				}
			},
			error: function() {
				if (attachmentId == 0) {
					EDUCAT.ShowAlert("操作提示", "创建课件失败");
				} else {
					EDUCAT.ShowAlert("操作提示", "更新课件失败");
				}
				EDUCAT.UpdateAttachmentUploadButtonStatus(true);
			}
		});
	}
	
	EDUCAT.UpdateAttachmentUploadButtonStatus = function(status) {
		if (status) {
			attachmentUploadCount--;
			$("#uploadAttachmentBtn").removeClass("hide");
			$("#clearUploadAttachmentBtn").addClass("hide");
			$("#attachmentUploadTip").removeClass("hide");
			$("#attachmentUploadProgress").addClass("hide");
			$("#attachmentUploadProgress").progressbar("destroy");
		} else {
			attachmentUploadCount++;
			$("#uploadAttachmentBtn").addClass("hide");
			$("#clearUploadAttachmentBtn").removeClass("hide");
			$("#attachmentUploadTip").addClass("hide");
			$("#attachmentUploadProgress").removeClass("hide");
			$("#attachmentUploadProgress").progressbar();
		}
	}
		

	//发布课程
	$("a[data='course_publish']").click(function() {
		var btn = $(this);
		if (btn.hasClass('loading_btn')) return;
		EDUCAT.ShowMiniLoading(btn);
		$.get(SITE_PATH + "index.php?m=coursemanage&a=publish", "id="+courseId,
		function(result) {
			EDUCAT.HideMiniLoading(btn);
			if (result.status == 0) {
				var url = "";
				switch (result.field) {
				case "img":
					url = "/index.php?m=coursemanage&a=image&id="+courseId;
					break;
				case "content":
					url = "/index.php?m=coursemanage&a=details&id="+courseId;
					break;
				case "vod":
					url = "/index.php?m=coursemanage&a=vod&id="+courseId;
					break;
				case "lecture":
					EDUCAT.ShowConfirm("课程发布提示", result.msg,
					function() {
						location.href = "/index.php?m=coursemanage&a=vod&id="+courseId;
					},
					"点播讲座",
					function() {
						location.href = "/index.php?m=coursemanage&a=live&id="+courseId;
					},
					"直播讲座");
					return;
					break;
				default:
					result.msg = "发布课程失败";
					break;
				}

				EDUCAT.ShowConfirm("课程发布提示", result.msg,
				function() {
					if (url != "") {
						location.href = url;
					}
				});
			} else if (result.status == -1) {
				EDUCAT.ShowAlert("操作提示", "发布成功，我们会尽快审核你提交的课程");
				location.reload(true);
			} else {
				EDUCAT.ShowAlert("操作提示", "发布成功");
				location.reload(true);
			}
		},
		'json');
		return false;
	});
	//删除课程
	$(".course_remove").click(function() {
		var btn = $(this);
		if (btn.hasClass('loading_btn')) return;

		EDUCAT.ShowMiniLoading(btn);
		EDUCAT.get(SITEURL + "index.php?m=coursemanage&a=remove", "id="+courseId,
		function(result) {
			EDUCAT.HideMiniLoading(btn);
			if (result.status == 0) {
				EDUCAT.ShowAlert("操作提示", "删除失败");
			} else {
				location.href = result.url;
			}
		},
		'json');
	});
	
});