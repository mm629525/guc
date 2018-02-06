//商品信息到达一定高度后由固定定位改为

window.onscroll=function(){
	let pageHeight=document.documentElement.scrollTop||document.body.scrollTop;
	
	if(pageHeight>=240){
		$('.goods-info-wrap').css({
			    position: 'absolute',
			    bottom: '-15px',
			    top: 'auto',
		});
	}
	if(pageHeight<=240){
		$('.goods-info-wrap').css({
			    position: 'fixed',
			    top:'187px'
		});
	}
}
//点击商品图片，全屏显示图片并且图片变大
$('.goods-img').click(function(){
	$(this).children('img').toggleClass('goods-img-big');
});

