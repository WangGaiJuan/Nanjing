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

//轮播	
	var timer=null;
	var index=0;
	$('.lunbo ul li:gt(0)').css('display','none');
	timer=setInterval(function(){
		//alert($(".lunbo ul li").length);
		//alert(index);
		if(index+1==$(".lunbo ul li").length)
		{
			$(".lunbo ul li").eq(4).fadeOut('slow');
			$(".lunbo ul li").eq(0).fadeIn('slow');
			index=0;
		}
		else
		{
			$(".lunbo ul li").eq(index).fadeOut('slow');
			$(".lunbo ul li").eq(++index).fadeIn('slow');
		}
			
	},5000);

	/*点击切换图片*/
	$(".btn_left").click(function(){
		clearInterval(timer);
		if(index==0)
		{
			$(".lunbo ul li").eq(index).fadeOut('slow');
			$(".lunbo ul li").eq(4).fadeIn('slow');
			index=4;
		}
		else{
				$(".lunbo ul li").eq(index).fadeOut('slow');
				$(".lunbo ul li").eq(--index).fadeIn('slow');
		}
		
	});
	$(".btn_right").click(function(){
		clearInterval(timer);
		if(index==4)
		{
			$(".lunbo ul li").eq(index).fadeOut('slow');
			$(".lunbo ul li").eq(0).fadeIn('slow');
			index=0;
		}
		else{
			$(".lunbo ul li").eq(index).fadeOut('slow');
			$(".lunbo ul li").eq(++index).fadeIn('slow');
		}
		
	});

	//显示隐藏转换
	$(".point_vis").mouseover(function(){

		$(".vis").stop().animate({left:'-800px'},800);
		$(".hid").stop().animate({left:'0px'},800);
		$(".point_vis").css("background",'#63065f').css("border",'#63065f');
		$(".point_hid").css("background",'#ccc').css("border","#ccc");
	});

	$(".point_hid").mouseover(function(){
		$(".vis").stop().animate({left:'0px'},800);
		$(".hid").stop().animate({left:'800px'},800);
		$(".point_vis").css("background",'#ccc');
		$(".point_hid").css("background",'#63065f').css("border",'#63065f');
	});
	/*模糊度改变*/
	$(".lianjie .col-md-4 .img01").mouseover(function(){
		
		$(".lianjie .col-md-4 .img01").css("opacity",'1');
		$(".lianjie .col-md-4 .img02").css("opacity",'0.3');
		$(".lianjie .col-md-4 .img01").css("fliter",'100');
		$(".lianjie .col-md-4 .img02").css("filter",'30');
	/*	$(".lianjie .col-md-4 img").css("opacity",'0.3');*/
	});
	$(".lianjie .col-md-4 .img02").mouseover(function(){
		
		$(".lianjie .col-md-4 .img02").css("opacity",'1');
		$(".lianjie .col-md-4 .img02").css("filter",'100');
		$(".lianjie .col-md-4 .img01").css("fliter",'30');
		$(".lianjie .col-md-4 .img01").css("opacity",'0.3');
		//$(".lianjie .col-md-4 img").css("opacity",'0.3');
	});
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
