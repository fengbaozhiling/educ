<?php
	$domainurl='http://' . $_SERVER['HTTP_HOST'];
	if ($_SERVER['REQUEST_URI'] == '/index.php?m=user&a=login&isajax=1' or $_SERVER['REQUEST_URI'] == '/index.php?m=user&a=login') {
		header('Location: http://www.educat.net/ajax/loginbox.php');
	}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>首页</title>
<link href="public/css/common.css" type="text/css" rel="stylesheet">
<link href="public/css/index.css" type="text/css" rel="stylesheet">
</head>

<body>
<?php include 'header-top.php'; ?>
<?php include 'header.php'; ?>
<?php include 'nav.php'; ?>
<div class="wrap">
	<div class="container mt_10 clfix">
		<div class="pael f_l">
			<div id="j-pael" class="jcarousel">
				<ul>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
					<li><img src="public/images/img1.jpg" width="500" height="500" alt=""></li>
				</ul>
			</div>
			<a id="j-paelpre" href="#" class="jcarousel-control-prev">&lsaquo;</a>
			<a id="j-paelnex" href="#" class="jcarousel-control-next">&rsaquo;</a>
			<p id="j-paelpag" class="jcarousel-pagination"></p>
		</div>
		<div class="plimg">
			<img class="lazy" data-original="public/images/img2.jpg" alt="">
			<img class="lazy" data-original="public/images/img3.jpg" alt="">
		</div>
		<div class="sider f_r">
			<div class="m-ypzx">
				<div class="pad20 t_c">
					<h2 class="mb_10">一品在线学堂</h2>
					<div class="mb_10"><img class="lazy" data-original="public/images/kouha.jpg"></div>
					<a class="btn btn_blue" href=""><strong>现在就开始选择课程吧</strong></a>
				</div>
				<div class="mybag">
					<div class="mb_5"><strong>我的书包</strong></div>
					<div class="clfix">
						<a href="" class="lt">
							<i class="ico i-keb"></i><br>
							课程表
						</a>
						<a href="" class="lt">
							<i class="ico i-ask"></i><br>
							提问
						</a>
						<a href="" class="lt">
							<i class="ico i-nod"></i><br>
							笔记
						</a>
						<a href="" class="lt">
							<i class="ico i-tal"></i><br>
							讨论
						</a>
					</div>
				</div>
			</div>
			<div class="clear mt_20"></div>
			<div class="list1 box_ef">
				<div class="pad20">
					<strong>公告</strong>
					<ul>
						<li><a href="">传统企业如何用微信微博赚钱</a></li>
						<li><a href="">传统企业如何用微信微博赚钱</a></li>
						<li><a href="">传统企业如何用微信微博赚钱</a></li>
						<li><a href="">传统企业如何用微信微博赚钱</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<div data="j-push" class="m-push clfix">
			<div class="f_l">
				<div class="tab">
					<h3>一品向您推荐</h3>
					<span class="etim crent" j_ajax="./ajax/ajax_push.html"><a href="">最热的点播课程</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push.html"><a href="">推荐名师热课</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push.html"><a href="">免费课程尝鲜</a></span>
				</div>
				<div class="tags">
					<h3><em>热门标签</em>&nbsp;<i>/&nbsp;TAGS</i></h3>
					<div class="iner">
						<a class="crent" href="">动漫设计</a><a href="">微信营销</a><a href="">黄金法则</a><a href="">SEO</a><a href="">网页</a><a href="">互联网</a><a href="">标志设计</a><a href="">百度</a><a href="">程序开发</a><a href="">ASP</a><a href="">工业</a><a href="">微博营销</a><a href="">产品外观</a><a href="">PHP</a><a href="">ASP</a><a href="">工业</a><a href="">互联网</a><a href="">标志设计</a>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="perm">
					<div class="img"><a href=""><img class="lazy" data-original="public/images/img4.jpg" alt=""></a></div>
					<div class="con">
						<strong><a href="">PHP网站开发从0基础到精通</a></strong>
						<b>￥10</b>时长：45分58秒<br>
						<span class="tp">115082人看过<i class="ico i-like"></i>&nbsp;15421人喜欢</span>
					</div>
					<div class="pinfo">
						<span class="sp">讲师： <strong>墨星</strong> [ 初级 ]</span>
						<div class="pcon clfix">
							<div class="f_l"><img class="lazy" data-original="public/images/img6.jpg" alt=""></div>
							<span class="brd">
								<b>35</b><br>
								主讲课程数
							</span>
							<span>
								<b>235</b><br>
								学员关注数
							</span>
						</div>
						<div class="cont">
							曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...<a href="" target="_blank">[详细]</a>
						</div>
					</div>
				</div>
				<div class="perelbox clfix">
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
				</div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
		</div>
		
		<div class="titl_a">
			<h3><em>设计课程</em>&nbsp;<i>/&nbsp;DESIGN</i></h3>
			<span><a href="" target="_blank">商标/VI设计</a>|<a href="" target="_blank">应用设计</a>|<a href="" target="_blank">动漫设计</a>|<a href="" target="_blank">网页设计</a>|<a href="" target="_blank">工业设计</a></span>
		</div>
		<div data="j-push" class="m-push clfix">
			<div class="f_l">
				<div class="tab">
					<span class="etim crent" j_ajax="./ajax/ajax_push_b.html"><a href="">商标/VI设计</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">应用设计</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">服装设计</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">应用设计</a></span>
				</div>
				<div class="intro">
				 	<div class="pad20">
					<p>说明文字：曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...</p>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="perm">
					<div class="img"><a href=""><img class="lazy" data-original="public/images/img4.jpg" alt=""></a></div>
					<div class="con">
						<strong><a href="">PHP网站开发从0基础到精通</a></strong>
						<b>￥10</b>时长：45分58秒<br>
						<span class="tp">115082人看过<i class="ico i-like"></i>&nbsp;15421人喜欢</span><br>
						
						讲师： 墨星 <span class="tp">[ 初级 ] </span>
					</div>
				</div>
				<div class="perelbox clfix">
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
				</div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
		</div>
		
		<div class="titl_a">
			<h3><em>开发课程</em>&nbsp;<i>/&nbsp;DEVELOPMENT</i></h3>
			<span><a href="" target="_blank">商标/VI设计</a>|<a href="" target="_blank">应用设计</a>|<a href="" target="_blank">动漫设计</a>|<a href="" target="_blank">网页设计</a>|<a href="" target="_blank">工业设计</a></span>
		</div>
		<div data="j-push" class="m-push clfix">
			<div class="f_l">
				<div class="tab">
					<span class="etim crent" j_ajax="./ajax/ajax_push_b.html"><a href="">网站开发</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">软件开发</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">移动应用开发</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">网游服务</a></span>
				</div>
				<div class="intro">
				 	<div class="pad20">
					<p>说明文字：曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...</p>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="perm">
					<div class="img"><a href=""><img class="lazy" data-original="public/images/img4.jpg" alt=""></a></div>
					<div class="con">
						<strong><a href="">PHP网站开发从0基础到精通</a></strong>
						<b>￥10</b>时长：45分58秒<br>
						<span class="tp">115082人看过<i class="ico i-like"></i>&nbsp;15421人喜欢</span><br>
						
						讲师： 墨星 <span class="tp">[ 初级 ] </span>
					</div>
				</div>
				<div class="perelbox clfix">
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
				</div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
		</div>
		
		<div class="titl_a">
			<h3><em>营销课程</em>&nbsp;<i>/&nbsp;MARKETING</i></h3>
			<span><a href="" target="_blank">家居装修</a>|<a href="" target="_blank">建筑装修</a>|<a href="" target="_blank">建筑设计</a>|<a href="" target="_blank">网页设计</a>|<a href="" target="_blank">工业设计</a></span>
		</div>
		<div data="j-push" class="m-push clfix">
			<div class="f_l">
				<div class="tab">
					<span class="etim crent" j_ajax="./ajax/ajax_push_b.html"><a href="">SEO优化</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">微博营销</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">口碑营销</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">微信营销</a></span>
				</div>
				<div class="intro">
				 	<div class="pad20">
					<p>说明文字：曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...</p>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="perm">
					<div class="img"><a href=""><img class="lazy" data-original="public/images/img4.jpg" alt=""></a></div>
					<div class="con">
						<strong><a href="">PHP网站开发从0基础到精通</a></strong>
						<b>￥10</b>时长：45分58秒<br>
						<span class="tp">115082人看过<i class="ico i-like"></i>&nbsp;15421人喜欢</span><br>
						
						讲师： 墨星 <span class="tp">[ 初级 ] </span>
					</div>
				</div>
				<div class="perelbox clfix">
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
				</div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
		</div>
		
		<div class="titl_a">
			<h3><em>装修课程</em>&nbsp;<i>/&nbsp;DECORATE</i></h3>
			<span><a href="" target="_blank">家居装修</a>|<a href="" target="_blank">建筑装修</a>|<a href="" target="_blank">建筑设计</a>|<a href="" target="_blank">网页设计</a>|<a href="" target="_blank">工业设计</a></span>
		</div>
		<div data="j-push" class="m-push clfix">
			<div class="f_l">
				<div class="tab">
					<span class="etim crent" j_ajax="./ajax/ajax_push_b.html"><a href="">家居装修</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">建筑装修</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">建筑设计</a></span>
					<span class="etim" j_ajax="./ajax/ajax_push_b.html"><a href="">软装设计</a></span>
				</div>
				<div class="intro">
				 	<div class="pad20">
					<p>说明文字：曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...</p>
					</div>
				</div>
			</div>
			<div class="box">
				<div class="perm">
					<div class="img"><a href=""><img class="lazy" data-original="public/images/img4.jpg" alt=""></a></div>
					<div class="con">
						<strong><a href="">PHP网站开发从0基础到精通</a></strong>
						<b>￥10</b>时长：45分58秒<br>
						<span class="tp">115082人看过<i class="ico i-like"></i>&nbsp;15421人喜欢</span><br>
						
						讲师： 墨星 <span class="tp">[ 初级 ] </span>
					</div>
				</div>
				<div class="perelbox clfix">
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
					<div class="perelm">
						<div class="img">
							<a href=""><img class="lazy2" data-original="public/images/img5.jpg" alt=""></a>
						</div>
						<strong><a href="" target="_blank">李志刚老师工业设计课程</a></strong>
						<b>免费</b>  85422人看过
					</div>
				</div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
			<div class="box" style="display:none;">
				<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
			</div>
		</div>
		
		<div class="titl_a">
			<h3><em>豪华讲师阵容</em>&nbsp;<i>/&nbsp;SQUAD</i></h3>
			<span><a href="" target="_blank">更多&nbsp;&gt;</a></span>
		</div>
		<div data="j-techer" class="m-techer clfix">
			<div class="tstar">
				<h3>今日明星讲师</h3>
				<div class="img">
					<a href="" target="_blank"><img class="lazy" data-original="public/images/img7.jpg" alt=""></a>
					<a href="">讲师： <b>墨星</b> [ 初级 ]</a>
				</div>
				<div class="cont">
					曾先后在安达信和普华永道任职，有丰富的资本运作经验。1999年加盟新浪后，仅用半年的时间就成功地让新浪在美国纳斯达克上市，成为第一家...<a href="">[详细]</a>
				</div>
			</div>
			<div class="menber">
				<div class="mbar">
					<a class="crent" href="" target="_blank" j_ajax="./ajax/ajax_teacher.html">特级讲师</a>
					<a href="" target="_blank" j_ajax="./ajax/ajax_teacher.html">人气讲师</a>
					<a href="" target="_blank" j_ajax="./ajax/ajax_teacher.html">人气机构</a>
					<a href="" target="_blank" j_ajax="./ajax/ajax_teacher.html">最新加入</a>
				</div>
				<div class="box">
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
					<div class="elmt">
						<a href="" target="_blank"><img class="lazy" data-original="public/images/img8.jpg" alt=""></a>
						<b><a href="" target="_blank">马云</a></b><br><span>课程数：<b>308</b></span>
					</div>
				</div>
				<div class="box" style="display:none;">
					<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
				</div>
				<div class="box" style="display:none;">
					<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
				</div>
				<div class="box" style="display:none;">
					<div class="waiting"><img class="lazy" data-original="public/images/loadinwait.gif" alt="载入中..."></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="clear mt_30"></div>
<?php include 'links.php'; ?>
<?php include 'footerhelp.php'; ?>
<?php include 'footer.php'; ?>
<script>
seajs.use("index");
</script>
</body>
</html>