define(function(require, exports, module) {
	var edstyle = require('./edstyle');
	var base = require('./base');
	var jcarousel=require('./seajcarousel/jquery.jcarousel.min');
	//首页广告
	var slideadv=function(){
		
		
		function mycarousel_initCallback(carousel)
		{
			carousel.buttonNext.bind('click', function() {
				carousel.startAuto(0);
			});
		
			carousel.buttonPrev.bind('click', function() {
				carousel.startAuto(0);
			});
		
			carousel.clip.hover(function() {
				carousel.stopAuto();
			}, function() {
				carousel.startAuto();
			});
		};
		
		
		var jpael=$("#j-pael"),
			jpaelpre=$("#j-paelpre"),
			jpaelnex=$("#j-paelnex"),
			jpaelpag=$('#j-paelpag');
		jpael.jcarousel({
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel_initCallback
		});
		jpaelpre.on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
		}).on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
		}).jcarouselControl({
			target: '-=1'
		});
		jpaelnex.on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
		}).on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
		}).jcarouselControl({
			target: '+=1'
		});
		jpaelpag.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		}).on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		}).jcarouselPagination();
	}();
	
	//推荐课程切换
	$("div[data='j-push']").length && EDUCAT.tabbox ("div[data='j-push']",".etim",".box","mouseover","j_ajax","crent");
	//会员中心推荐课程
	$("div[data='j-pushuser']").length && EDUCAT.tabbox ("div[data='j-pushuser']",".od a",".box","mouseover","j_ajax","seleted");
	//讲师切换
	$("div[data='j-techer']").length && EDUCAT.tabbox ("div[data='j-techer']",".mbar a",".box","mouseover","j_ajax","crent");
})
