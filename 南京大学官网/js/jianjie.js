$(document).ready(function(){

	//alert($("body").innerWidth());  获取屏幕宽度
	//search 部分
	$(".sub").click(function(){
		/*$(".sub").stopPropagation();*/

		if(parseInt($(".tex").css("right"))==0)
		{
			if($(".tex").val()!="")
			{
				window.location.href="index.html";
			}
			else{
				alert("请输入关键词");
			}
		}
		else{
			$(".sear .col-md-6 img").animate({right:'0px'});
			$(".tex").animate({right:'0px'});
		}

		return false;
		
	});

	$(".tex").click(function(){
		return false;
	});

	$("body").click(function(){
		$(".sear .col-md-6 img").animate({right:'-150px'});
		$(".tex").animate({right:'-150px'});

	});

	//menu
	$("#setA").click(function(){
		$('.child_menu').stop().slideToggle(800);
		return false;	
	});

	$("body").click(function(){		
		$('.child_menu').stop().slideUp(800);
		//$(".menuSet").css("display",'none');
	});

	/*链接下拉*/
	$(".about").click(function(){
		$("#ul01").slideToggle('slow');
	});
	/*二维码*/
	$(".lianjie .col-md-4 img").mouseout(function(){
		$(".lianjie .col-md-4 .img01").css("opacity",'0.3');
		$(".lianjie .col-md-4 .img02").css("opacity",'0.3');
	});
	$(".weibo").mouseover(function(){
		$(".weibo").css("opacity",'0.5');
	});
	$(".weibo").mouseout(function(){
		$(".weibo").css("opacity",'1');
	});
	$(".weixin").mouseover(function(){
		$(".weixin").css("opacity",'0.5');
		$(".erweima").fadeIn('slow');
	});
	$(".weixin").mouseout(function(){
		$(".weixin").css("opacity",'1');
		$(".erweima").fadeOut('slow');
	});
	$(".biaozhi").mouseover(function(){
		$(".biaozhi").css("opacity",'0.5');
	});
	$(".biaozhi").mouseout(function(){
		$(".biaozhi").css("opacity",'1');
	});


});