define(function(require, exports, module) {
	var rating=require('./rating/jquery.rating');
	$("div[data='j-star']").length>0 && EDUCAT.creatstar($("div[data='j-star']")).each(function(){
		$(this).find(".star").rating()
	});
})