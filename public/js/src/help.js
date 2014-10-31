define(function(require, exports) {
	var edstyle = require('./edstyle');
	$("#j-helpl").on("click", "span",function() {
		if($(this).next().is(":hidden")){
			$(this).next().show();
			$(this).find("i").html("&#xf0022;")
		} else {
			$(this).next().hide();
			$(this).find("i").html("&#xf0021;")
		}
		$(this).parent().siblings().find("dl").hide();
		$(this).parent().siblings().find("i").html("&#xf0021;")
		return false;
	})
	$("#searchHelp").click(function(){
	alert($("#helpForm").attr('action'));
		$("#helpForm").submit();
		return false;
	});
});