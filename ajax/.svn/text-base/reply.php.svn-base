<div class="m-login">
	<div data="j-tablogin" class="tab"><span rel="loginBox" class="crent">登录</span><span rel="regBox">注册</span><a class="f_r" id="j-lgclose" href="">×</a></div>
	<div class="login_form">
		<div id="loginBox">
			<form onsubmit="return $.MsgCreateSubmit(this)" method="post" action="/infocenter/saveMsg">
				<div class="elmt">
					收信人：<input type="text" style="width: 300px; padding: 5px;" placeholder="填写收信人姓名" value="" class="ftext" id="msg_user_name" name="user_name">
				</div>
				<div class="elmt">
					<textarea style="width: 550px; height: 80px; padding: 5px;" maxlen="200" class="ftext" name="message"></textarea>
				</div>
				<div class="elmt elmt_btn">
					<button class="btn btn_org" id="create_submit">发送</button>
				</div>
					<!--<a href="/index.php?m=user&a=register">注册会员</a> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> <a href="/index.php?m=user&a=retakePwd">找回密码</a>-->
				<input name="rhash" value="75771462" type="hidden"/>
				<input name="a" value="ajaxlogin" type="hidden"/>
			</form>
		</div>
	</div>
</div>
<script>
EDUCAT.MsgCreateSubmit = function(form) {
	var box = $(form);
	$('#create_submit', form).attr("disabled", true);

	var user_name = $.trim(form.user_name.value);
	if (user_name == '' || user_name == $(form.user_name).attr('placeholder')) {
		$('#create_submit', form).attr("disabled", false);
		form.user_name.focus();
		EDUCAT.ShowMiNiTooltip($(form.user_name), "MSG_TOOLTIP", "收信人不能为空", 0, 1);
		return false;
	}

	var message = $.trim(form.message.value);
	if (message == '') {
		$('#create_submit', form).attr("disabled", false);
		form.message.focus();
		EDUCAT.ShowMiNiTooltip($(form.message), "MSG_TOOLTIP", "请输入信件的内容", 0, 1);
		return false;
	}

	EDUCAT.ShowLoading(box);
	EDUCAT.post(SITE_PATH + "index.php?m=infocenter&a=saveMsg", $(form).serialize(),
	function(result) {
		EDUCAT.HideLoading(box);
		$('#create_submit', form).attr("disabled", false);
		if (result.status > 0) {
			location.href = "/infocenter/message";
		} else {
			if (result.status == -2) {
				EDUCAT.ShowMiNiTooltip($(form.user_name), "MSG_TOOLTIP", "没有这个会员", 0, 1);
			} else if (result.status == -1) {
				EDUCAT.ShowMiNiTooltip($(form.user_name), "MSG_TOOLTIP", "只能给粉丝发送信件", 0, 1);
			} else EDUCAT.ShowMiNiTooltip($('#create_submit', form), "MSG_TOOLTIP", "发送信件失败", 0, 1);
		}
	},
	'json');
	return false;
}

EDUCAT.GetFans = function(page) {
	var box = $("#fans_list");
	EDUCAT.ShowLoading(box);
	$.ajax({
		url: SITE_PATH + "index.php?m=infocenter&a=fans",
		type: "POST",
		data: "page=" + page,
		dataType: "html",
		success: function(html) {
			EDUCAT.HideLoading(box);
			box.html(html);
		},
		error: function() {
			EDUCAT.HideLoading(box);
		}
	});
}
$(document).on('click', '#fans_list .pagination a',function() {
	var page = parseInt($(this).attr('page'));
	if (!isNaN(page) && page > 0) EDUCAT.GetFans(page);
}).on('click', '#fans_list ul li',
function() {
	$("#msg_user_name").val($(this).attr('uname'));
});
EDUCAT.GetFans(1);
</script>