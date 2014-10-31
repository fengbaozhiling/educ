(function($){
	var fdialogList = new Array();
	var fdialog = function(content,options){
		var self = this;
		this.content 	= content || '';
		this.ajaxObj   	= null;
		this.options 	= options || {};
		this.dialog 	= null;
		this.body 		= null;
		this.mask 		= null;
		this.head 		= null;
		this.btns 		= null;
		this.title 		= null;
		this.closeBtn 	= null;
		this.okBtn 		= null;
		this.cancelBtn 	= null;
		
		this._defaults 	= {
			boxid: null,
			boxClass: null,
			cache: false,
			title: '',
			width: 0,
			height: 0,
			timeout: 0, 
			draggable: false,
			modal: true,
			position:'center',
			showHeader: true,
			showClose: true,
			showLoading:false,
			showButton: false,
			showOk: false,
			showCancel: false,
			okBtnName: '确定',
			cancelBtnName: '取消',
			contentType: 'text',
			clickClose: false,
			zIndex: 999,
			animate: '',
			showAnimate:'',
			hideAnimate:'',
			onClose: null,
			onReady:null,
			onCancel: null,
			onOk: null
		};
		
		this.init = function(){
			self.options  = $.extend(self._defaults,self.options);
			
			if (self.options.modal)
			{
				self.mask = $("<div class='fdialog_mask'></div>").appendTo('body').hide().css({
					width:self.pageWidth,
					height:self.pageHeight,
					zIndex:self.options.zIndex-1
				}).show().bgiframe();
			}
			
			var html = '<table border="0" cellspacing="0" cellpadding="0" class="fdialog">' +
						'	<tbody>' +
						'		<tr>' +
						'			<td class="fdialog_tl"></td>' +
						'			<td class="fdialog_tc"></td>' +
						'			<td class="fdialog_tr"></td>' +
						'		</tr>' +
						'		<tr>' +
						'			<td class="fdialog_mv"></td>' +
						'			<td class="fdialog_mc"></td>' +
						'			<td class="fdialog_mv"></td>' +
						'		</tr>' +
						'		<tr>' +
						'			<td class="fdialog_bl"></td>' +
						'			<td class="fdialog_bc"></td>' +
						'			<td class="fdialog_br"></td>' +
						'		</tr>' +
						'	</tbody>' +
						'</table>';
			
			self.dialog = $(html).appendTo('body').hide().css({
				position: 'absolute',	
				overflow: 'hidden',
				top:0,
				left:0,
				visibility:"hidden",
				zIndex: self.options.zIndex
			}).show();
			
			self.body = self.find('.fdialog_mc');
			if(self.options.showLoading || self.options.contentType == "ajax")
			{
				self.body.html('<div class="fdialog_loading"></div>');
			}
			
			if (self.options.boxid)
			{
				self.dialog.attr('id', self.options.boxid);
			}
			
			if (self.options.boxClass)
			{
				self.dialog.addClass(self.options.boxClass);
			}
			
			if (self.options.width>0)
			{
				self.dialog.css('width', self.options.width);
			}
			
			if (self.options.height>0)
			{
				self.dialog.css('height', self.options.height);
			}
			
			self.dialog.bgiframe();
			
			self.initContent();
		}
		
		this.initContent = function()
		{
			if (self.options.contentType == "ajax")
			{
				if (self.content.indexOf('?') == -1)
				{
					self.content += "?_t="+Math.random();
				}
				else
				{
					self.content += "&_t="+Math.random();
				}
				
				self.ajaxObj = $.ajax({
					type:"POST",
					url:self.content,
					dataType:"html",
					success:function(result){
						self.content = result;
						self.setContent();
					}
				});
			}
			else
			{
				self.setContent();
			}
		}
		
		this.setContent = function()
		{
			self.body.html("");
			
			self.body.append(self.content);
			
			if(self.options.showHeader)
			{
				self.head = $('<div class="fdialog_head"></div>').prependTo(self.body);
				self.title = $('<div class="fdialog_title"></div>').appendTo(self.head);
				self.closeBtn = $('<a href="javascript:;" class="fdialog_close"></a>').appendTo(self.head);
				if (self.options.title != "")
				{
					self.title.html(self.options.title);
				}
				
				if(!self.options.showClose)
				{
					self.closeBtn.hide();
				}
			}
			else
			{
				self.head = self.body.find(".fdialog_head");
				if(self.head.length == 0)
				{
					self.head = null;
				}
				else
				{
					self.title = self.head.find(".fdialog_title");
					if(self.title.length == 0)
						self.title = null;
						
					self.closeBtn = self.head.find(".fdialog_close");
					if(self.closeBtn.length == 0)
						self.closeBtn = null;
				}
			}
			
			if(self.head != null && self.options.draggable)
			{
				this.dragInit();	
			}
			
			if(self.options.showButton)
			{
				self.btns = $('<div class="fdialog_btns"></div>').appendTo(self.body);
				if (self.options.showOk)
				{
					self.okBtn = $('<label class="current_btn green_btn"><input type="button" value="'+ self.options.okBtnName +'" /></label>').appendTo(self.btns);
				}
				
				if (self.options.showCancel)
				{
					if (self.options.showOk)
					{
						self.btns.append("<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>");
					}
					
					self.cancelBtn = $('<label class="current_btn gray_btn"><input type="button" value="'+ self.options.cancelBtnName +'" /></label>').appendTo(self.btns);
				}
			}
			self.initEvent();
			EDUCAT.FormatAppendHtml();
			if (typeof(self.options.onReady) == "function") 
			{
				self.options.onReady(self)
			}
			self.position();
		}
		
		this.initEvent = function()
		{
			if(self.closeBtn)
			{
				self.closeBtn.unbind('click').click(function(){
					self.close()
				});	
			}
					
			if(self.okBtn && typeof(self.options.onOk) == "function") 
			{
				self.okBtn.unbind('click').click(function(){
					self.options.onOk(self)
				});
			} 
			
			if(self.cancelBtn && typeof(self.options.onCancel) == "function")
			{
				self.cancelBtn.unbind('click').click(function(){
					self.options.onCancel(self)
				});
			}
			
			if(self.body.find(".fdialog_tab_menus a").length > 0)
			{
				self.body.find(".fdialog_tab_menus a").click(function(){
					var index = self.body.find(".fdialog_tab_menus a").index(this);
					self.body.find(".fdialog_tab_menus a").removeClass("active");
					$(this).addClass("active");
					self.body.find(".fdialog_tab_body").removeClass("fdialog_tab_body_active");
					self.body.find(".fdialog_tab_body").eq(index).addClass("fdialog_tab_body_active");
					if(!self.options.draggable)
						self.position();
				});
			}
			
			if(self.options.timeout > 0)
			{
				window.setTimeout(self.close,(self.options.timeout * 1000));
			}
		}
		
		this.dragInit = function()
		{		
			self.head.mousedown(function(event){
				var h  = this; 
				var o  = document;
				var ox = self.dialog.position().left;
				var oy = self.dialog.position().top;
				var mx = event.clientX;
				var my = event.clientY;
				var width = self.dialog.width();
				var height = self.dialog.height();
				var dwidth = self.pageWidth();
				var dheight = self.pageHeight(); 
				
				if(h.setCapture)
				{
					h.setCapture();
				}
				
				$(document).mousemove(function(event){						
					if (window.getSelection)
					{
						window.getSelection().removeAllRanges();
					}
					else
					{ 
						document.selection.empty();
					}
					
					var left = Math.max(ox+event.clientX-mx, 0);
					var top = Math.max(oy+event.clientY-my, 0);
					var left = Math.min(left, dwidth-width);
					var top = Math.min(top, dheight-height);
					self.dialog.css({left: left, top: top});
				}).mouseup(function(){
					if(h.releaseCapture)
					{ 
						h.releaseCapture();
					}
					$(document).unbind('mousemove');
					$(document).unbind('mouseup');
				});
			});	
		}
		
		this.close = function()
		{	
			if(self.ajaxObj)
			{
				self.ajaxObj.abort();	
			}
			
			if (typeof(self.options.onClose) == "function")
			{
				self.options.onClose(self);
			}
			
			if (self.mask)
			{
				self.mask.remove();
			}
			self.dialog.remove();
		}
		
		this.position = function()
		{
			if (self.options.position == "center")
			{
				self.setCenterPosition();
			}
			
			if (self.options.position != "center")
			{
				self.setElementPosition();
			}
			
			if (self.mask)
			{
				self.mask.css({width: self.pageWidth(),height: self.pageHeight()});
			}
		}
		
		this.setCenterPosition = function()
		{
			var top = $(document).scrollTop() + ($(window).height() - self.dialog.height()) / 2;
			var left = $(document).scrollLeft() + ($(window).width() - self.dialog.width()) / 2;
			self.dialog.css({"top":top,"left":left,"visibility":"visible"});
		}
		
		this.setElementPosition = function()
		{
			var target = $(self.options.position.target);
			var targetTop = self.options.position.top || 0;
			var targetLeft = self.options.position.left || 0;
			var adjust = (typeof self.options.position.adjust=="undefined") ? true : self.options.position.adjust;
			
			var top = target.offset().top + target.height();
			var left = target.offset().left;
			var docWidth = document.documentElement.clientWidth || document.body.clientWidth;
			var docHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var docTop = document.documentElement.scrollTop || document.body.scrollTop;
			var docLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			var docBottom = docTop + docHeight;
			var docRight = docLeft + docWidth;
			if (adjust && left + self.dialog.width() > docRight)
			{
				left = docRight - self.dialog.width() - 1;
			}
			
			if (adjust && top + self.dialog.height() > docBottom)
			{
				top = docBottom - self.dialog.height() - 1;
			}
			
			left = Math.max(left + targetLeft, 0);
			top = Math.max(top + targetTop, 0);
			
			self.dialog.css({"top":top,"left":left});
		}
		
		//取得页面宽度
		this.pageWidth = function()
		{
			return Math.max($(document).width(),$(window).width());
		}
		
		//取得页面高度
		this.pageHeight = function()
		{
			return Math.max($(document).height(),$(window).height());
		}
		
		//在弹窗内查找元素
		this.find = function(selector){
			return self.dialog.find(selector);
		}
		
		this.init();
	}
	
	var fdialogs = function() {		
		var self = this;
		this._onbox = false;
		this._opening = false;
		this.zIndex = 999;
		
		this.open = function(content, options)
		{
			self._opening = true;
			if (typeof(options) == "undefined")
			{
				options = {};
			}
			
			if(options.boxid)
			{
				self.close(options.boxid);
			}
			
			options.zIndex = self.zIndex;
			self.zIndex += 1;
			
			var box = new fdialog(content, options);
			fdialogList.push(box);
			return box;
		}
		
		this.close = function()
		{
			var c = fdialogList.length;
			if(c == 0)
				return;
			
			var i = 0;
			if(arguments.length > 0)
			{
				for(i;i < c;i++)
				{
					if(fdialogList[i].options.boxid == arguments[0])
					{
						fdialogList[i].close();
						fdialogList.splice(i,1);
						return;
					}
				}
			}
			else
			{
				for(i;i < c;i++)
				{
					fdialogList[i].close();
				}
				fdialogList = new Array();
			}
		}
		
		this.getTopBox = function(){
			var c = fdialogList.length;
			if (c > 0)
			{
				return fdialogList[c - 1];
			}
			else
			{
				return false;
			}
		}
		
		this.getBoxById = function(id) {
			var c = fdialogList.length;
			if(c > 0)
			{
				var i = 0;
				var box;
				for(i;i < c;i++)
				{
					if(fdialogList[i].options.boxid == id)
					{
						return fdialogList[i];
					}
				}
			}
			else
			{
				return false;
			}
		}
		
		$(window).scroll(function(){
			var c = fdialogList.length;
			if(c > 0)
			{
				var i = 0;
				for(i;i < c;i++)
				{
					fdialogList[i].position();
				}
			}		
		}).resize(function(){
			var c = fdialogList.length;
			if(c > 0)
			{
				var i = 0;
				for(i;i < c;i++)
				{
					fdialogList[i].position();
				}
			}
		});
	}
	$.extend({fdialogs: new fdialogs()});
})(jQuery);