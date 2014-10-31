define(function(require, exports, module) {
	var dialog = require('./dialog/1.0.0/dialog-plus');
	//声明登录窗口
	var loginbox;
	var loginhtml=null;
	loginbox = function () {
		var d=null;
		if (loginhtml==null) {
			loginhtml=$.ajax({
				type: "GET",
				url: SITEURL + "index.php?m=user&a=login",
				async:false,
				dataType: "html"
			}).responseText;
		}
		d= dialog({
			id:'loginBox',
			content: loginhtml,
			width :520,
			padding:0
		})
		return d;
	}

	exports.loginbox = loginbox;
})