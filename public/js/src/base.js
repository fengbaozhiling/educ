var EDUCAT = {};
var IE_VERSION = 0;
var IE_CLASS_NAME = "";
var IS_IE = false;
var IS_IE6 = false;
if(IE_VERSION == 7) {
	if (!window.XMLHttpRequest) {
		IS_IE6 = true;
		IE_VERSION = 6;
		IE_CLASS_NAME += " ie6";
	} else {
		IE_CLASS_NAME += " ie7";
	}
}
var IS_PLACEHOLDER = !!("placeholder" in document.createElement("input"));
EDUCAT.INPUT_MAXLENGTH_COUNT = 0;
EDUCAT.INPUT_MAXLENGTH_WIDTHS = [18,28,38,48];
EDUCAT.CKEDITOR_BBCODE = 1;
EDUCAT.UPLOAD_RESOURCE_SERVER = ""; 
EDUCAT.UPDATE_END_TIME_RUN = false;
EDUCAT.LOGIN_RELOAD = false;
EDUCAT.COURSE_SIGN = new Object();
define(function(require, exports, module) {
	var LANG = require('./lang');
	var login = require('./login');
	var fdialog = require('./fdialog');
	/*=====================lazyload load扩展 BEGIN=====================*/
	EDUCAT.LazyloadLoad = function(img,self,count,settings){
		EDUCAT.AutoScaleImage(img,$(self),false);
	}
	EDUCAT.ScaleImage = function(obj){
		var img= new Image();
		img.src = $(obj).attr('scaleSrc');
		if(img.complete){
			EDUCAT.AutoScaleImage(img,$(obj),true);
			delete img;
			return;
		}

		$(img).load(function(){
			EDUCAT.AutoScaleImage(img,$(obj),true);
			delete img;
			return;
		});
	}
	EDUCAT.AutoScaleImage = function(img,self,isChange){
		var parent = self.parent();
		var scaleType = parseInt($(self).attr("scaleType"));
		var scaleWidth = parseInt($(self).attr("scaleWidth"));
		var scaleHeight = parseInt($(self).attr("scaleHeight"));
		if(isNaN(scaleType) || isNaN(scaleWidth) || isNaN(scaleHeight) || scaleType < 1 || (scaleWidth < 1 && scaleHeight < 1))
		{
			return false;
		}
		
		var width = 0;
		var height = 0;
		var scale = img.width / img.height;

		if(img.width == 0 || img.height == 0)
		{
			return false;
		}
		
		switch(scaleType)
		{
			case 1:
				if(img.width > scaleWidth)
				{
					width = scaleWidth;
					height = scaleWidth / scale;
				}
				else
				{
					scale = scaleWidth / img.width;
					width = scaleWidth;
					height = img.height * scale;
				}
			break;

			case 2:
				if(img.height > scaleHeight)
				{
					height = scaleHeight;
					width = scaleHeight * scale;
				}
				else
				{
					scale = scaleHeight / img.height;
					height = scaleHeight;
					width = img.width * scale;
				}
			break;

			case 3:
				if(scaleWidth/img.width < scaleHeight/img.height)
				{
					scale = scaleHeight / img.height;
					height = scaleHeight;
					width = img.width * scale;
				}
				else
				{
					scale = scaleWidth / img.width;
					width = scaleWidth;
					height = img.height * scale;
				}
			break;
			
			case 4:
				if(scaleWidth/img.width > scaleHeight/img.height)
				{
					scale = scaleHeight / img.height;
					height = scaleHeight;
					width = img.width * scale;
				}
				else
				{
					scale = scaleWidth / img.width;
					width = scaleWidth;
					height = img.height * scale;
				}
			break;
		}
		
		if(isChange)
		{
			self.width(width);
			self.height(height);
			self.attr("src",img.src);	
		}
		
		if(scaleType == 3 || scaleType == 4)
		{
			var left = (parent.width() - width) / 2;
			var top = (parent.height() - height) / 2;
			self.css({"margin-top":top,"margin-left":left,"width":width,"height":height});
		}
		else
		{
			self.css({"width":width,"height":height});
			if(self.attr("updateParentSize") == 1)
			{
				self.parent().css({"width":width,"height":height});
			}
		}
	}
	/*=====================lazyload扩展 END  =====================*/
	EDUCAT.Template = function(html,data){
        return doT.template(html).apply(null,[data]);
	}
	
	//flash调用刷新网页
	EDUCAT.ResetPage = function(url){
		if(typeof url != 'undefined')
		{
			location.href = url;
		}
		else
		{
			location.reload(true);
		}
	}
	
	EDUCAT.ShowLoading = function(target,msg){
		if(target.height() < 100)
			target.css({"height":100});
		var w = target.width();
		var h = target.height();
		target.addClass("FLOADING_BOX");
		if(typeof msg == 'undefined')
		{
			msg = LANG.submit_loading;
		}
		
		var html = '<div class="FB_BOX"><div class="FBB_BG"></div><div class="FBB_ANIMATE"><p>'+ msg +'</p></div></div>';
		target.append(html);
		$(".FB_BOX,.FBB_BG,.FBB_ANIMATE",target).width(w).height(h);
		$(".FBB_ANIMATE",target).css({"background-position":"center "+ ((h - 94) / 2) + "px"});
		$(".FBB_ANIMATE p",target).css({"margin-top":((h - 94) / 2 + 74)});
		$(".FB_BOX",target).bgIframe();
		
	}
	
	EDUCAT.HideLoading = function(target){
		target.removeClass("FLOADING_BOX");
		$(".FB_BOX",target).remove();
		target.css({"height":"auto"});
	}
	
	EDUCAT.ShowMiniLoading = function(target,msg){
		target.addClass("loading_btn").append('<p class="lb_pbox"></p><span class="lb_spanbox"></span>');
	}
	
	EDUCAT.HideMiniLoading = function(target){
		$('.lb_pbox,.lb_spanbox',target).remove();
		target.removeClass("loading_btn");
	}
	
	EDUCAT.ShowMiNiTooltip = function(obj,id,msg,type,lcr,parent,down,style){
		if(type == 1 && EDUCAT.cookie('MINITOOLTIP_CLOSE_'+id) == 1)
		{
			EDUCAT.cookie('MINITOOLTIP_CLOSE_'+id,1,{expires:7});
			return;
		}
		var TIME_OUT_HANDLER;

		if($("#"+id).length == 0)
		{
			if(typeof style == 'undefined' && style != "")
				style = ' style="'+ style +'"';
			
			var html = '<div class="TOOLTIP_BOX" id="'+id+'"'+style+'><div class="TBM">'+msg+'</div><div class="TBB"></div><a class="TBCLOSE">Close</a></div>';
			
			if(typeof parent != 'undefined')
				parent.append(html);
			else
				$("body").append(html);
			
			$("#"+id+" .TBCLOSE").click(function(){
				$("#"+id).remove();
				if(type == 1)
					EDUCAT.cookie('MINITOOLTIP_CLOSE_'+id,1,{expires:7});
			});
			
			if(type == 0)
			{
				var fun = function(){
					$("#"+id).fadeOut("fast",function(){
						$("#"+id).remove();
					});
				};
				TIME_OUT_HANDLER = setTimeout(fun,3000);

			}
		}
		else
		{
			clearTimeout(TIME_OUT_HANDLER);
			$("#"+id).stop();
			$("#"+id+" .TBM").html(msg);
		}
		
		$("#"+id).removeClass("TOOLTIP_BOX_DOWN");
		if(down == 1)
		{
			$("#"+id).addClass("TOOLTIP_BOX_DOWN");
		}
		
		$("#"+id).show();
		var offset = obj.offset();
		var left;
		var top;
		if(down == 1)
		{
			top = offset.top + obj.height();
		}
		else
		{
			top = offset.top - $("#"+id).height() - 8;
		}
		
		if(lcr == 1)
		{
			left = offset.left;
			$("#"+id+" .TBB").css({"left":10});
		}
		else if(lcr == 2)
		{
			left = offset.left + obj.width() - $("#"+id).width();
			$("#"+id+" .TBB").css({"left":$("#"+id).width() - 27});
		}
		else
		{
			left = offset.left + (obj.width() - $("#"+id).width()) / 2;
			$("#"+id+" .TBB").css({"left":$("#"+id).width() / 2 - 7});
		}
		
		if(parent)
		{
			offset = parent.offset();
			left = left - offset.left;
			top = top - offset.top;
		}

		$("#"+id).css({"left":left,"top":top,"opacity":100});
	}
	
	EDUCAT.FileProgressHandler = function(target,loaded,total,msg){
		$(target).progressbar("value",loaded / total * 100);
		var html;
		if(typeof msg == "undefined")
		{
			if(total > 1048576)
				html = '<span class="pl_loaded">' + Math.round(loaded * 10 / 1048576) / 10 + 'M</span> / <span class="pl_total">' + Math.round(total * 10 / 1048576) / 10 + "</span>M";
			else
				html = '<span class="pl_loaded">' + Math.round(loaded / 1024) + 'KB</span> / <span class="pl_total">' + Math.round(total / 1024) + "</span>KB";
		}
		else
		{
			html = '<span class="pl_msg">' + msg + "</span>";
		}
		$(target + " .progress-label").html(html);
	}
	//成功
	EDUCAT.ShowSucc = function(title,msg,func){
		var tip_title = LANG['handler_success'];
		if(title!=false)
			tip_title = title;
		EDUCAT.ShowConfirm(tip_title,msg,func);
	}
	//失败
	EDUCAT.ShowErr = function(title,msg,func){
		var tip_title = LANG['handler_failed'];
		if(title!=false)
			tip_title = title;
		EDUCAT.ShowConfirm(tip_title,msg,func);
	}
	
	//确认
	EDUCAT.ShowConfirm = function(title,msg,okFunc,okName,cancelFunc,cancelName) {
		var style = '';
		if(EDUCAT.getStringLength(msg) < 46)
		{
			style = 'style="text-align:center;"';
		}
		
		var isCancel = false;
		if(typeof cancelFunc != "undefined")
			isCancel = true;
		
		if(typeof okName == "undefined" || okName == "")
			okName = "确定";
			
		if(typeof cancelName == "undefined" || cancelName == "")
			cancelName = "取消";
		
		var html = '<div class="alert_content" '+ style +'>'+ msg +'</div>';
		$.fdialogs.open(html,{boxid:"CONFIRM_WEEBOX",showClose:false,showButton:true,showOk:true,showCancel:isCancel,title:title,width:380,okBtnName:okName,onOk: function(){
			if(okFunc !=null )
			{
				okFunc.call(this);
			}
			$.fdialogs.close("CONFIRM_WEEBOX");
		},cancelBtnName:cancelName,onCancel:function(){
			if (cancelFunc != null)
			{
				cancelFunc.call(this);
			}
			$.fdialogs.close("CONFIRM_WEEBOX");
		}});
	}
	
	EDUCAT.ShowAlert = function(title,msg,className) {
		if(typeof className == "undefined")
			className = "";
		
		var style = '';
		if(EDUCAT.getStringLength(msg) < 46)
		{
			style = 'style="text-align:center;"';
		}
		var html = '<div class="alert_content '+ className +'" '+ style +'>'+ msg +'</div>';
		$.fdialogs.open(html,{boxid:'ALERT_WEEBOX',title:title,contentType:'text',width:380});
	}
	
	EDUCAT.CreateTimeOptions = function(obj,type,val,_min,_max) {
		var str;
		val = parseInt(val);
		if(isNaN(val))
			val = 0;
			
		_min = parseInt(_min);
		if(isNaN(_min))
			_min = 0;
			
		_max = parseInt(_max);
		if(isNaN(_max))
			_max = 0;
		
		switch(type)
		{
			case "h":
				str = LANG.hour;
				if(_max == 0)
					_max = 23;
			break;
			case "m":
				str = LANG.minute;
				if(_max == 0)
					_max = 59;
			break;
			case "s":
				str = LANG.second;
				if(_max == 0)
					_max = 59;
			break;
			default:
				return;
			break;
		}
		
		var html = "";
		for(_min;_min <= _max;_min++)
		{
			html += '<option value="'+ _min +'"'+ (_min == val ? ' selected="selected"' : "") +'>'+ (_min > 9 ? _min : '0' + _min) + str +'</option>';
		}
		obj.append(html);
	}
	
	//省市联动
	EDUCAT.BindCity = function(province,city,pid,cid) {
		var i;
		var count = CITYS.province.length;
		var provinceID,cityID,selected;
		var html = "<option value=0>--请选择省份--</option>";
		for(i = 0; i<count; i++)
		{
			provinceID = CITYS.province[i];
			//if(pid == 0)
			//{
			//	pid = provinceID;
		//	}
			
			if(pid == provinceID)
			{
				selected = ' selected="selected"';
			}
			else
			{
				selected = '';
			}

			html += '<option value="'+ provinceID +'"'+ selected +'>'+ CITYS.all[provinceID].name +'</option>';
		}

		$(province).html(html);

		$(province).change(function(){
			pid = this.value;
			count = CITYS.city[pid].length;
			html = '';
			for(i = 0; i<count; i++)
			{
				cityID = CITYS.city[pid][i];
				html += '<option value="'+ cityID +'">'+ CITYS.all[cityID].name +'</option>';
			}
			$(city).html(html);
		});
		var html = "<option value=0>--请选择城市--</option>";
		if(typeof(CITYS.city[pid])=='undefined'){
			count = 0;
		}else{
			count = CITYS.city[pid].length;
		}
						
		for(i = 0; i<count; i++)
		{
			cityID = CITYS.city[pid][i];
			if(cid == cityID)
			{
				selected = ' selected="selected"';
			}
			else
			{
				selected = '';
			}

			html += '<option value="'+ cityID +'"'+ selected +'>'+ CITYS.all[cityID].name +'</option>';
		}
		$(city).html(html);
	}
	
	//绑定省
	EDUCAT.BindProvince = function(province,pid) {
		var i;
		var count = CITYS.province.length;
		
		var provinceID,selected;
		var html = "";
		for(i = 0; i<count; i++)
		{
			provinceID = CITYS.province[i];
			if(pid == provinceID)
			{
				selected = ' selected="selected"';
			}
			else
			{
				selected = '';
			}

			html += '<option value="'+ provinceID +'"'+ selected +' center="'+ CITYS.all[provinceID].center +'">'+ CITYS.all[provinceID].name +'</option>';
		}
		$(province).append(html);
	}
	
	EDUCAT.SelectedProvinceByName = function(province,name) {
		var i;
		var options = $(province).get(0).options;
		var c = options.length;
		for(i = 0; i<c; i++)
		{
			if(options[i].text.indexOf(name) > -1 || name.indexOf(options[i].text) > -1)
			{
				$(province).get(0).selectedIndex = i;
			}
		}
	}
	
	EDUCAT.FormatAppendHtml = function(){
		$('input[maxlen],textarea[maxlen]').each(function(){
			var isIe6 = $(this).attr('isIe6');
			if(isIe6 == 1 && !IS_IE6)
				return;
			var rel = $(this).data('lengthrel');
			if(typeof rel == "undefined" || rel == "")
			{
				var maxlength = parseInt($(this).attr('maxlen'));
				EDUCAT.INPUT_MAXLENGTH_COUNT++;
				rel = "inputMaxlenSpan" + EDUCAT.INPUT_MAXLENGTH_COUNT;
				$(this).data("lengthrel",rel);
				
				var value = this.value;
				var nocn = parseInt($(this).attr('nocn'));
				var length;
				if(isNaN(nocn) || nocn == 0)
				{
					length = EDUCAT.getStringLength(value);
					if(length > maxlength)
					{
						this.value = EDUCAT.getLengthString(value,maxlength,'');
						length = EDUCAT.getStringLength(this.value);
					}
				}
				else
				{
					length = value.length;
					if(length > maxlength)
					{
						this.value = value.substr(0,maxlength);
						length = this.value.length;
					}
				}
				
				length = maxlength - length;
				var nonum = parseInt($(this).attr('nonum'));
				var pposition;
				if(isNaN(nonum) || nonum == 0)
				{
					pposition = $(this).parent().css("position");
					if(pposition != "relative" && pposition != "absolute")
					{
						$(this).parent().css("position","relative");
					}
				}
				var whpbo = EDUCAT.GetElementWHPBO($(this));
				var w,h,x,y;
				w = EDUCAT.INPUT_MAXLENGTH_WIDTHS[maxlength.toString().length - 1];
				if(this.tagName.toLowerCase() == "input")
				{
					h = whpbo.h + whpbo.ps.t + whpbo.ps.b - 4;
					x = whpbo.x + whpbo.w + whpbo.bs.l + whpbo.ps.l + whpbo.ps.r - w - 2;
					y = whpbo.y + whpbo.bs.t + 2;
					if(isNaN(nonum) || nonum == 0)
					{
						$(this).after('<span id="'+ rel +'" class="inputlength" style="width:'+ w +'px;height:'+ h +'px;top:'+ y +'px;left:'+ x +'px;line-height:'+ h +'px;">'+ length +'</span>');
					}
					$(this).css({"padding-right":w + whpbo.ps.r,"width":whpbo.w - w});
				}
				else
				{
					h = 24;
					x = whpbo.x + whpbo.w + whpbo.bs.l + whpbo.ps.l + whpbo.ps.r - w - 2;
					y = whpbo.y + whpbo.h + whpbo.bs.t + whpbo.ps.t + whpbo.ps.b - h - 2;
					if(isNaN(nonum) || nonum == 0)
					{
						$(this).after('<span id="'+ rel +'" class="inputlength" style="width:'+ w +'px;top:'+ y +'px;left:'+ x +'px;">'+ length +'</span>');
					}
				}
			}
		});
		

		$("img.LOAD_SCALE_IMG").each(function(){
			EDUCAT.ScaleImage(this);
			$(this).removeClass('LOAD_SCALE_IMG');
		});
		if($(".END_TIME").length > 0 && !EDUCAT.UPDATE_END_TIME_RUN)
		{
			EDUCAT.UPDATE_END_TIME_RUN = true;
			EDUCAT.UpdateEndTime();
		}
	}
	
	EDUCAT.UpdateEndTime = function(){
		var date = new Date();
		var time = date.getTime();
		$(".END_TIME").each(function(i){
			var endDate =new Date($(this).attr("endTime"));
			var endTime = endDate.getTime();
			var lag = (endTime - time) / 1000;
			
			if(lag > 0)
			{
				var second = Math.floor(lag % 60); 
				second = second < 10 ? "0" + second : second;    
				var minite = Math.floor((lag / 60) % 60);
				minite = minite < 10 ? "0" + minite : minite;
				var hour = Math.floor((lag / 3600) % 24);
				hour = hour < 10 ? "0" + hour : hour;
				var day = Math.floor((lag / 3600) / 24);
				$(this).html(day+"天"+hour+"小时"+minite+"分"+second+"秒");
			}
			else
				$(this).html("");
		});
		setTimeout("EDUCAT.UpdateEndTime()",1000);
	}
	
	EDUCAT.GetElementWHPBO = function(obj){
		var whpb = new Object();
		whpb.w = obj.width();
		whpb.h = obj.height();
		whpb.x = obj.position().left;
		whpb.y = obj.position().top;
		whpb.bs = new Object();
		whpb.bs.l = 0;
		whpb.bs.t = 0;
		whpb.bs.r = 0;
		whpb.bs.b = 0;
		whpb.ps = new Object();
		whpb.ps.l = 0;
		whpb.ps.t = 0;
		whpb.ps.r = 0;
		whpb.ps.b = 0;
		
		var t;
		t = parseInt(obj.css("border-left-width"));
		if(!isNaN(t) && t > 0)
		{
			whpb.bs.l = t;
		}
			
		t = parseInt(obj.css("border-top-width"));
		if(!isNaN(t) && t > 0)
		{
			whpb.bs.t = t;
		}
			
		t = parseInt(obj.css("border-right-width"));
		if(!isNaN(t) && t > 0)
		{
			whpb.bs.r = t;
		}
			
		t = parseInt(obj.css("border-bottom-width"));
		if(!isNaN(t) && t > 0)
		{
			whpb.bs.b = t;
		}
			
		t = parseInt(obj.css("padding-left"));
		if(!isNaN(t) && t > 0)
		{
			whpb.ps.l = t;
		}
			
		t = parseInt(obj.css("padding-top"));
		if(!isNaN(t) && t > 0)
		{
			whpb.ps.t = t;
		}
			
		t = parseInt(obj.css("padding-right"));
		if(!isNaN(t) && t > 0)
		{
			whpb.ps.r = t;
		}
			
		t = parseInt(obj.css("padding-bottom"));
		if(!isNaN(t) && t > 0)
		{
			whpb.ps.b = t;
		}
			
		return whpb;
	}
	
	/*=====================会员BEGIN=====================*/
	//检测会员是否登陆
	EDUCAT.CheckLogin = function(){
		if(USER_ID == 0) {
			login.loginbox().showModal();
			return false;
		} else {
			return true;
		}
	}
	
	EDUCAT.ShowLoginDialog = function(obj){
		if(!EDUCAT.CheckLogin()){
			return false;
		}
		location.href= obj.attr('href');
	}
	//提交登陆
	EDUCAT.LoginSubmit = function(form) {
		$('#login_submit',form).attr("disabled",true);
		$('.lf_tip',form).removeClass('lf_loading');
		$('.lf_tip',form).removeClass('lf_error');
		$('.lf_tip span',form).html('');
		var account = $.trim(form.account.value);
		if(account == '' || account == $(form.account).attr('placeholder')) {
			$('#login_submit',form).attr("disabled",false);
			$('.lf_tip span',form).html(LANG.account_require);
			$('.lf_tip',form).addClass('lf_error');
			form.account.focus();
			return false;
		}
		
		var pwd = form.password.value;
		if(pwd == '') {
			$('#login_submit',form).attr("disabled",false);
			$('.lf_tip span',form).html(LANG.user_pass_require);
			$('.lf_tip',form).addClass('lf_error');
			form.password.focus();
			return false;	
		}
		
		$('.lf_tip span',form).html(LANG.login_loading);
		$('.lf_tip',form).addClass('lf_loading');
		$.ajax({
			type:"POST",
			url:SITEURL + "index.php?m=user&a=ajaxlogin",
			data:$(form).serialize(),
			dataType:"json",
			success:function(result){
				$('#login_submit',form).attr("disabled",false);
				$('.lf_tip',form).removeClass('lf_loading');
				if(result.status == 1) {
					USER_ID = result.uid;
					window.location.reload();
				} else {
					$('.lf_tip span',form).html(result.msg);
					$('.lf_tip',form).addClass('lf_error');
					switch(result.field) {
						case "account": {
							form.account.focus();
						}
						break;
						case "password": {
							form.password.focus();
						}
						break;
					}
				}
			},
			error:function(){
				$('#login_submit',form).attr("disabled",false);
				$('.lf_tip',form).removeClass('lf_loading');
				$('.lf_tip span',form).html(LANG.login_error);
				$('.lf_tip',form).addClass('lf_error');
			}
		});
		return false;
	}
	
	//关注会员，uid 要关注的会员编号，ojb 点击对像
	EDUCAT.UserFollow=function(uid,obj) {
		if(!EDUCAT.CheckLogin())
			return false;

		var query = new Object();
		query.uid = uid;

		$.ajax({
			url: SITEURL + "index.php?m=user&a=follow",
			type: "POST",
			data:query,
			dataType: "json",
			success: function(result){
				$(obj).parent().html(result.html);
			}
		});
	}
	/*=====================会员END  =====================*/
	
	/*=====================课程BEGIN=====================*/
	//显示课程创建弹出层
	EDUCAT.ShowCourseCreate = function(){
		if(!EDUCAT.CheckLogin()) {
			return false;
		}
		$.fdialogs.open(SITEURL + "index.php?m=course&a=create", {boxid:'COURSE_CREATE_WEEBOX',title:LANG.course_create,contentType:'ajax'});
	}
	
	//提交课程创建
	EDUCAT.CourseCreateSubmit = function(form){
		$('#create_submit',form).attr("disabled",true);
		$('.form_tip',form).removeClass('form_loading');
		$('.form_tip',form).removeClass('form_error');
		$('.form_tip',form).html('');
		var course_name = $.trim(form.course_name.value);
		if(course_name == '' || course_name == $(form.course_name).attr('placeholder'))
		{
			$('#create_submit',form).attr("disabled",false);
			$('.form_tip',form).html(LANG.course_name_require);
			$('.form_tip',form).addClass('form_error');
			form.course_name.focus();
			return false;
		}
		
		var course_brief = form.course_brief.value;
		if(course_brief == '' || course_brief == $(form.course_brief).attr('placeholder'))
		{
			$('#create_submit',form).attr("disabled",false);
			$('.form_tip',form).html(LANG.course_brief_require);
			$('.form_tip',form).addClass('form_error');
			form.course_brief.focus();
			return false;	
		}
		
		$('.form_tip',form).html(LANG.submit_loading);
		$('.form_tip',form).addClass('form_loading');
		$.ajax({
			type:"POST",
			url:SITEURL + "index.php?m=course&a=save",
			data:$(form).serialize(),
			dataType:"json",
			success:function(result){
				$('#create_submit',form).attr("disabled",false);
				$('.form_tip',form).removeClass('form_loading');
				if(result.status == 1)
				{
					$.fdialogs.close('COURSE_CREATE_WEEBOX');
					setTimeout(function(){
						location.href = result.url;
					},1);
				}
				else
				{
					$('.form_tip',form).html(result.msg);
					$('.form_tip',form).addClass('form_error');
					switch(result.field)
					{
						case "name":
						{
							form.course_name.focus();
						}
						break;
						case "brief":
						{
							form.course_brief.focus();
						}
						break;
					}
				}
			},
			error:function(){
				$('#create_submit',form).attr("disabled",false);
				$('.form_tip',form).removeClass('form_loading');
				$('.form_tip',form).html(LANG.submit_error);
				$('.form_tip',form).addClass('form_error');
			}
		});
		return false;
	}
	
	//喜欢课程，cid 要喜欢的课程编号，obj 点击对像
	EDUCAT.CourseLike=function(cid,obj,func) {
		if(!EDUCAT.CheckLogin())
			return false;

		var query = new Object();
		query.cid = cid;
		
		$.ajax({
			url: SITEURL + "index.php?m=course&a=like",
			type: "POST",
			data:query,
			dataType: "json",
			success: function(result){
				if(func!=null)
					func.call(this,cid,obj,result);
				else
					$(obj).closest('span').html(result.html);
			}
		});
	}
	
	//课程报名，cid 要报名的课程编号，obj 点击对像
	EDUCAT.CourseSign=function(cid,is_sign,obj) {
		if(!EDUCAT.CheckLogin())
			return false;
		
		var fun = function(){
			var query =  Object();
			query.cid = cid;
	
			$.ajax({
				url: SITEURL + "index.php?m=course&a=sign",
				type: "POST",
				data:query,
				dataType: "json",
				success: function(result){
					if(result.status == 2){
						$.fdialogs.open(result.html, {boxid:'COURSE_SIGN_WEEBOX',title:LANG.course_sign,contentType:'html'});
					}else
					{
						EDUCAT.COURSE_SIGN[cid] = result.status == 1;
						$(obj).parent().html(result.html);
					}
				}
			});
		}
		
		if(is_sign)
		{
			EDUCAT.ShowConfirm(LANG.course_clear,LANG.course_clear_tip,fun,"确定取消",function(){},"我点错了");
		}
		else
			fun();
	}
	
	//搜索课程
	EDUCAT.SearchCourse = function(keyowrds,tpl,fun){
		var query = new Object();
		if(typeof keyowrds != "undefined" && keyowrds != "")
			query.keyowrds = keyowrds;
		
		var type = "json";
		if(typeof tpl != "undefined" && tpl != "")	
		{
			query.tpl = tpl;
			type = "html";
		}
		
		$.post(SITEURL + "index.php?m=course&a=ajaxSearch",query,function(result){
			fun.call(null,result);
		},type);
	}
	
	$('#topsearch_btn').click(function(){
		$('#frm_topsearch').submit();
	});
	/*=====================课程END  =====================*/
	
	/*=====================标签BEGIN=====================*/
	//关注标签
	EDUCAT.TagFollow=function(tid,obj,func) {
		if(!EDUCAT.CheckLogin())
			return false;

		var query = new Object();
		query.tid = tid;

		$.ajax({
			url: SITEURL + "index.php?m=tag&a=follow",
			type: "POST",
			data:query,
			dataType: "json",
			success: function(result){
				func.call(this,tid,obj,result);
			}
		});
	}
	/*=====================标签END  =====================*/
	
	EDUCAT.getStringLength=function(str){
		str = $.trim(str);

		if(str=="")
		{
			return 0;
		}

		var length=0;
		for(var i=0;i <str.length;i++)
		{
			if(str.charCodeAt(i)>255)
			{
				length+=2;
			}
			else
			{
				length++;
			}
		}

		return length;
	}

	EDUCAT.getLengthString=function(str,length,suffix,isSpace){
		if(arguments.length < 3)
        {
            suffix = "...";
        }
        
        if(arguments.length < 4)
		{
			var isSpace = true;
		}

		if($.trim(str)=="")
		{
			return "";
		}

		var tempStr="";
		var strLength = 0;

		for(var i=0;i <str.length;i++)
		{
			if(str.charCodeAt(i)>255)
			{
				strLength+=2;
			}
			else
			{
				if(str.charAt(i) == " ")
				{
					if(	isSpace)
					{
						strLength++;
					}
				}
				else
				{
					strLength++;
				}
			}

			if(length >= strLength)
			{
				tempStr += str.charAt(i);
			}
		}
        
        if(str != tempStr)
            tempStr += suffix;
		return tempStr;
	}

	EDUCAT.checkRequire = function(value){
		var reg = /.+/;
        return reg.test($.trim(value));
	}

	EDUCAT.minLength = function(value, length , isByte) {
		var strLength = $.trim(value).length;
		if(isByte)
		{
			strLength = EDUCAT.getStringLength(value);
		}
		return strLength >= length;

	};

	EDUCAT.maxLength = function(value, length , isByte) {
		var strLength = $.trim(value).length;
		if(isByte)
		{
			strLength = EDUCAT.getStringLength(value);
		}
		return strLength <= length;
	};

	EDUCAT.rangeLength = function(value, minLength,maxLength, isByte) {
		var strLength = $.trim(value).length;
		if(isByte)
		{
			strLength = EDUCAT.getStringLength(value);
		}
		return strLength >= minLength && strLength <= maxLength;
	}

	EDUCAT.checkMobilePhone = function(value){
		return /^0{0,1}1[3458][0-9]{9}$/i.test($.trim(value));
	}

	EDUCAT.checkPhone = function(val){
  		var flag = 0;
		val = $.trim(val);
  		var num = ".0123456789/-()";
  		for(var i = 0; i < (val.length); i++)
		{
    		tmp = val.substring(i, i + 1);
    		if(num.indexOf(tmp) < 0)
			{
      			flag++;
			}
 		}
  		if(flag > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	EDUCAT.checkEmail = function(val){
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		return reg.test(val);
	};

	EDUCAT.checkUrl = function(val){
		var reg = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
        return reg.test(val);
	};

	EDUCAT.checkCurrency = function(val){
		var reg = /^\d+(\.\d+)?$/;
        return reg.test(val);
	};

	EDUCAT.checkNumber = function(val){
		var reg = /^\d+$/;
        return reg.test(val);
	};

	EDUCAT.checkInteger = function(val){
		var reg = /^[-\+]?\d+$/;
        return reg.test(val);
	};

	EDUCAT.checkDouble = function(val){
		var reg = /^[-\+]?\d+(\.\d+)?$/;
        return reg.test(val);
	};

	EDUCAT.checkPrice = function(val){
		var reg = /^\d+(\.\d+)?$/;
        return reg.test(val);
	};

	EDUCAT.checkEnglish = function(val){
		var reg = /^[A-Za-z]+$/;
        return reg.test(val);
	};

	EDUCAT.checkQQMsn = function(val){
		var reg = /^[1-9]*[1-9][0-9]*$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(val);
	};
	
	EDUCAT.getClickIsElement = function(obj,event)
	{
		var offset = obj.offset();
		var minX = offset.left;
		var minY = offset.top;
		var maxX = minX + obj.width();
		var maxY = minY + obj.height();
		if(event.pageX < minX || event.pageX > maxX || event.pageY < minY || event.pageY > maxY)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	$.ajaxSetup({
		beforeSend:function(xhr,self){
			if(self.url.indexOf("?") == -1)
			{
				self.url += "?isajax=1";
			}
			else
			{
				self.url += "&isajax=1";
			}
		},
		dataFilter: function(data,type){
			if(data == "ACTIVATE_EMAIL")
			{
				$.fdialogs.close();
				EDUCAT.ShowConfirm("帐户提示","请先激活你的邮箱",function(){
					location.href = "http://education.EDUCAT.cn/user/activateEmail";
				},"点击激活");
				return;
			}
			return data;
		}
	});
	
	if($("#footer").length > 0) {
		var footerFun = function(){
			$("#footer").css({"position":"relative"});
			$(".FULL_HEIGHT").height("auto");
			var docHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var footerTH = $("#footer").offset().top + $("#footer").height();
			if(footerTH < docHeight)
			{
				if($(".FULL_HEIGHT").length > 0)
					$(".FULL_HEIGHT").height($(".FULL_HEIGHT").height() + docHeight - footerTH);
				else
					$("#footer").css({"position":"absolute","bottom":0,"left":0});
			}
			setTimeout(footerFun,1000);
		}
		footerFun();
	}
	
	EDUCAT.FormatAppendHtml();

	if(IS_IE6)
	{
		$(document).on('click','.format_label span',function(){
			$(this).prev().click();
		});
	}
	
	$('form').on('submit',function(){
		$('input[placeholder],textarea[placeholder]',this).each(function(){
			if(this.value == $(this).attr("placeholder"))
				this.value = "";
		});
	})
	
	$(document).on('focus','.ftext',function(){
		if(!$(this).hasClass("ftextfocus"))
		{
			var whpbo = EDUCAT.GetElementWHPBO($(this));
			$(this).css({"padding-left":whpbo.ps.l - 1,"padding-top":whpbo.ps.t - 1,"padding-right":whpbo.ps.r - 1,"padding-bottom":whpbo.ps.b - 1});
			$(this).addClass("ftextfocus");
		}
	}).on('blur','.ftext',function(){
		if($(this).hasClass("ftextfocus"))
		{
			var whpbo = EDUCAT.GetElementWHPBO($(this));
			$(this).css({"padding-left":whpbo.ps.l + 1,"padding-top":whpbo.ps.t + 1,"padding-right":whpbo.ps.r + 1,"padding-bottom":whpbo.ps.b + 1});
			$(this).removeClass("ftextfocus");
		}
	}).on('focus','.current_btn input',function(){
		$(this).blur();
	}).on('keyup','input[maxlen],textarea[maxlen]',function(){
		var rel = "#" + $(this).data('lengthrel');
		if(typeof rel == "undefined" || rel == "")
		{
			return false;
		}
		
		var maxlength = parseInt($(this).attr('maxlen'));
		if(isNaN(maxlength) || maxlength == 0)
		{
			return false;
		}
		
		var value = this.value;
		var nocn = parseInt($(this).attr('nocn'));
		var length;
		if(isNaN(nocn) || nocn == 0)
		{
			length = EDUCAT.getStringLength(value);
			if(length > maxlength)
			{
				this.value = EDUCAT.getLengthString(value,maxlength,'');
				length = EDUCAT.getStringLength(this.value);
			}
		}
		else
		{
			length = value.length;
			if(length > maxlength)
			{
				this.value = value.substr(0,maxlength);
				length = this.value.length;
			}
		}
		
		var nonum = parseInt($(this).attr('nonum'));
		if(nonum == 1)
		{
			return false;
		}
		$(rel).html(maxlength - length);
	}).on('mouseover','#USER_INFO_USER,#USER_INFO_MSG',function(){
		clearTimeout(EDUCAT.USER_INFO_MENU_TIMEOUT);
		$(".USER_INFO_MENU").hide();
		var width = 0;
		$("#" + $(this).attr("rel")).show();
		$("#" + $(this).attr("rel") + " li a").each(function(){
			var lwidth = $(this).width();
			if(lwidth > width)
				width = lwidth;
		});
		
		$("#" + $(this).attr("rel") + " li a").each(function(){
			$(this).width(width)
		});
		
		if(width > $(this).width())
			$("#" + $(this).attr("rel")).css({"right":0,"width":width + 16});
		else
			$("#" + $(this).attr("rel")).css({"left":$(this).position().left+ 5,"width":width + 16});
	}).on('mouseout','#USER_INFO_USER,#USER_INFO_MSG',function(){
		var fun = function(){
			$(".USER_INFO_MENU").hide();
		}
		EDUCAT.USER_INFO_MENU_TIMEOUT = setTimeout(fun,100);
	}).on('mouseover','.USER_INFO_MENU li',function(){
		$(".USER_INFO_MENU li").removeClass("active");
		$(this).addClass("active");
	}).on('mouseout','.USER_INFO_MENU li',function(){
		$(this).removeClass("active");
	}).on('mouseover','.USER_INFO_MENU',function(){
		clearTimeout(EDUCAT.USER_INFO_MENU_TIMEOUT);
		$(this).show();
	}).on('mouseout','.USER_INFO_MENU',function(){
		$(this).hide();
	});

	/*
	tabbox 切换容器
	tabbar 切换手柄
	cont   切换内容
	e      事件
	barclass   手柄的当前CLASS
	*/
	EDUCAT.tabbox = function (tabbox,tabbar,cont,e,ajax,barclass,callback) {
		var tabbox=$(tabbox);
		tabbox.each(function() {
			var _this=$(this);
			_this.find(tabbar).on(e,function(){
				var i=_this.find(tabbar).index(this);
				_this.find(tabbar).removeClass(barclass);
				_this.find(tabbar).eq(i).addClass(barclass);
				if (ajax!=false) {
					var url = _this.find(this).attr(ajax);
					if (_this.find(cont).eq(i).find('.waiting').length>0) {
						$.ajax({
							type: "get",
							url: url,
							success: function(html){
								_this.find(cont).eq(i).html(html);
							}
						}); 
					}
				}
				_this.find(cont).eq(i).show().siblings(cont).hide();
				if (callback) {
					callback ();
				}
			})
		});
		
	};
	//星星评价
	EDUCAT.creatstar = function (obj) {
		obj.each(function(){
			var i=obj.index(this);
			var scold=$(this).attr("score");
			length=$(this).attr("num");
			for (var m=0;m<=length;m++) {
				var inpelmt="<input type='radio' class='"+obj.attr('starsty')+"' name='score["+i+"]' value='"+(m+1)+"' />";
				$(this).append(inpelmt);
			}
			if ($(this).attr("disabled")) {
				$(this).find("."+obj.attr('starsty')).attr("disabled","disabled");
			}
			$(this).find("."+obj.attr('starsty')).eq(scold-1).attr("checked","checked");
		})
		return obj;
	}
	//让低版本的浏览器兼容placeholder
	EDUCAT.placeholder = function(obj){
		var inputObj = document.createElement("input"),placeholdersupport ='placeholder' in inputObj;
		if(!placeholdersupport){
			$(obj).each(function(){
				var input = $(this),
					text = input.attr('placeholder'),
					pdl = 0,height = input.outerHeight(),
					width = input.outerWidth(),
					idinput=input.attr("id"),
					placeholder = $('<label for="'+idinput+'" class="phTips">'+text+'</label>');
					try{
						pdl = input.css('padding-left').match(/\d*/i)[0] * 1;
					}catch(e){
						pdl = 5;
					}
					placeholder.css({
						'margin-left': -(width-pdl),
						'height':height,
						'line-height':height+"px",
						'position':'absolute',
						'color': "#cecece",
						'font-size' : "12px"
					});
					if(input.val() != ""){
						placeholder.css({display:'none'});
					}else{
						placeholder.css({display:'inline'});
					}
					placeholder.insertAfter(input);
					input.keydown(function(e){
						placeholder.css({display:'none'});
					});
					input.keyup(function(e){
						if($(this).val() != ""){
							placeholder.css({display:'none'});
						}else{
							placeholder.css({display:'inline'});
						}
					});
			});
		}
	};
	EDUCAT.placeholder("input");
	exports.EDUCAT = EDUCAT;
})