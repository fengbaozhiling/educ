<script src="<?php echo $domainurl;?>/public/js/jquery.js"></script>
<script src="<?php echo $domainurl;?>/public/js/sea.js"></script>
<script>
var http_host = window.location.host,
	SITEURL		= "http://"+http_host+"/",
	IMGURL		= "http://"+http_host+"/",
	CSSURL		= "http://"+http_host+"/",
	JSURL		= "http://"+http_host+"/",
	uid 		 = parseInt('')+0;//判断是否登录
seajs.config({
	base: 'http://'+http_host+'/public/',
	alias: {
		//"chosen": "chosen/chosen.jquery",
//		"jcarousel": "plugin/seajcarousel/jquery.jcarousel.min",
//		"lazy": "plugin/jquery.lazyload",
//		"scrollbar": "plugin/jquery.scrollbar",
//		"rating": "plugin/rating/jquery.rating",
//		"browser": "plugin/jquery.browser/jquery.mb.browser.min",
//		"datepicker": "datepicker/jquery.datepicker",
//		"masonry": "plugin/jquery.masonry.min",
//		"bgiframe": "plugin/jquery.bgiframe",
//		"form": "plugin/form_and_validation",
//		"swfobject":"swfobject",
//		"jqueryui": "jquery-ui/jquery-ui-1.10.4.custom.min",
//		"pcas": "plugin/pcasunzip",
//		"dialog":"dialog/src/dialog-plus",
//		"base": "base",
//		"ask": "ask",
//		"login": "login",
//		"dot": "dot",
//		"fdialog":"plugin/fdialog.js",
		"index":"js/src/index",
		"edstyle": "js/src/edstyle",
		"forget": "js/src/forget",
		"detail": "js/src/detail",
		"user":"js/src/user",
		"creat": "js/src/creat",
		"help": "js/src/help"
//		"comment":"comment",
//		"edacount": "edacount",
//		
	}
});
</script>
<!--[if IE 6]>
<script src="public/plugin/DD_belatedPNG_0.0.8a-min.js"></script>
<script>
DD_belatedPNG.fix('.ico, background');
DD_belatedPNG.fix('.logo img');
</script>
<![endif]-->
