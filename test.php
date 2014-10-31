<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>

<script>
tAjax ({
	url:"php.html",
	complete:function(data) {
		console.log (data)
	}
})

var tAjax = function (config) {
	var url = config.url;
	var complete = config.complete;
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest () :new ActiveXObject ("microsoft.XMLHTTP");
	xhr.open ("post",url);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200 ) {
				complete (xhr.responseText);
			}
		}
	}
	xhr.send();
}
</script>

</body>
</html>