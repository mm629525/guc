$('.nav').children('li').hover(
	function(){
		$(this).children('.sub-nav-wrap').show();
		$(this).children('a').children('.jiao').show();
	},
	function(){
		$(this).children('.sub-nav-wrap').hide();
		$(this).children('a').children('.jiao').hide();
	}
);

$('.menu-left').click(function(){
	$('.mid-menu').show();
})
$('.mid-menu div span').click(function(){
	$('.mid-menu').hide();
})
$('.backUp .back-top').click(function(){
	$("html,body").animate({scrollTop:0}, 500);
})
$('footer .backT').click(function(){
	$("html,body").animate({scrollTop:0}, 500);
})
$('.spice-block').hover(
	function(){
		var iIndex = $(this).index();
		// $('.spice-block').eq(iIndex-1).('.menu-plus').text()
		// $('.spice-block').children().hide();
		$('.spice-block').eq(iIndex-1).children().show();

	},
	function(){
		var iIndex = $(this).index();
		$('.spice-block .spice-footerT').eq(iIndex-1).siblings().hide();
	}
	// function(){
	// 	var iIndex = $(this).index();
	// 	// $('.spice-block').eq(iIndex-1).('.menu-plus').text()
	// 	// $('.spice-block').children().hide();
	// 	// $('.spice-block .spice-footerT').eq(iIndex-1).siblings('ul').hide();console.log(iIndex-1)
	// }
)
$('.module-win').click(function(){
	$('.module-windows').show();
})
$('.module-windows .module-close').click(function(){
	$('.module-windows').hide();
})
$('.module-windows .module-close1').click(function(){
	$('.module-windows').hide();
})