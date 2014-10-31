define(function(require, exports, module) {
	var base = require('./base');
	var lang = require('./lang');
	var lazy = require('./jquery.lazyload');
	var login = require('./login');
	var form = require('./formvalidat/1.0.0/form_and_validation');
	//图片延时
	$("img.lazy").lazyload({effect: "fadeIn"});
	$("img.lazy2").lazyload({effect: "fadeIn"});
	//改写部分定义了模块和加载CSS
	//头部下拉菜单
	$('.subnav_span').on({
	   mouseenter:
	   function(){
			$(this).find('div').removeClass('hidden').addClass('block');
			$(this).find('.subspan_bar').addClass('on');
		},
	   mouseleave:
	   function(){
			$(this).find('div').removeClass('block').addClass('hidden');
			$(this).find('.subspan_bar').removeClass('on');
		}
	});
	//头部登录框
	//登陆选择
	$(".loginlitb_box").hide();
	var menberEnter=$("#menberEnter");
	menberEnter.on("mouseenter",".loginlitb_name",function(){
			var _this=$(this);
			_this.find("li:first").css("border-top","none");
			_this.find("li:last").css("border-bottom","none");
			_this.find(".loginlitb_topname").css("border-bottom","1px solid #f5f5f5").height(31);
			_this.find(".loginlitb_box").css("display","block").css("top",53+"px"); 
		}
	).on("mouseleave",".loginlitb_name",function(){
			var _this=$(this);
			_this.find(".loginlitb_topname").css("border-bottom","1px solid #dfdfdf").height(26);
			_this.find(".loginlitb_box").css("display","none").css("top",53+"px"); 
		}
	);

	//微信二维码
	$("div[jsname='j_mosver']").length && $("div[jsname='j_mosver']").hover(
		function () {
			var lefwxinPosition=$(this).offset().left;
			var topwxinPosition=$(this).offset().top;
			$(this).siblings(".mosver_show").show().css("left",lefwxinPosition+60+"px").css("top",topwxinPosition-180+"px").css("z-index","1000");
		},
		function () {
			$(this).siblings(".mosver_show").hide()
		}
	);
	$('a[data=j-tologin]').click(function(){
		EDUCAT.ShowLoginDialog($(this));
		return false;
	});
	//侧边导航
	var sidnav=function(){
		var jsidbar=$("#j-sidbar");
		jsidbar.find('li').mouseenter(function(){
			var i=jsidbar.find('li').index(this),
				_this=$(this);
			_this.addClass('select');
			_this.find('.catynavlist').show();
			if(i<=1){
				_this.find('.catynavlist').css('top','0px')
			} else{
				_this.find('.catynavlist').css('bottom','0px')
			}
			var _img=_this.find("img");
			_img.each(function(index, element) {
				$(this).attr("src",$(this).attr("data-original"))
			});
		}).mouseleave(function(){
			var _this=$(this);
			_this.removeClass('select');
			_this.find('.catynavlist').hide();
		});
		//有隐藏的侧边导航
		var hidebar=$("div[j-hide='hidebar']");
		hidebar.length && function(){
			hidebar.addClass("hidebar")
			hidebar.on({
				mouseenter:function(){
					var _this=$(this);
					_this.find('.sidbar_main').show();
					_this.find('#sidbarbottom').show();
					_this.find("div:first span").removeClass("ico_arrdown").addClass('ico_arrtop');
				},
				mouseleave:function(){
					var _this=$(this);
					_this.find('.sidbar_main').hide();
					_this.find('#sidbarbottom').hide();
					_this.find("div:first span").removeClass("ico_arrtop").addClass('ico_arrdown');
				}
			});	
		}()
	}();

	//列表页分类切换
	$("div[data='j-filtbox']").length && EDUCAT.tabbox ("div[data='j-filtbox']",".bar a",".box","mouseover","j_ajax","crent");
	//列表页样式调整
	$("div[data='j-list']").length && $("div[data='j-list']").find(".perm").each(function(index, element) {
		var i=$("div[data='j-list']").find(".perm").index(this);
		if ((i+1)%3==0){
			$("div[data='j-list']").find(".perm").eq(i).css({"margin-right":"auto"})
		}
	});
	
	//绑定登录窗口事件
	$(document).on("click","#j-lgclose",function(){
		login.loginbox().close().remove();
		return false;
	}).on("click","div[data='j-tablogin'] span",function () {
		var relbox=$(this).attr("rel");
		$(this).addClass("crent").siblings().removeClass("crent");
		$("#"+relbox).show().siblings().hide();
	}).on("click","a[data='j-loginbox']",function(){
		login.loginbox().showModal();
		form.form_valid();
		EDUCAT.placeholder("input");
		return false;
	}).on("click","a[data='j-registerbox']",function(){
		login.loginbox().showModal();
		form.form_valid();
		EDUCAT.placeholder("input");
		$("span[rel=regBox]").addClass("crent").siblings().removeClass("crent");
		$("#regBox").show().siblings().hide();
		return false;
		});
	
})