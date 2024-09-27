var isSplash = true;

$(document).ready(function(){
	var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:280,//mandatory property for decktop
		bottomMargin:80,//mandatory property for decktop
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		bodyMinHeight:850,
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				$(">a", this).append("<div class='openPart'></div>");
			})
		},
		buttonOver:function (item){
			if(MSIE8){
				item.css({"color":"#919191"});
				$(".openPart", item).css({"visibility":"visible"});
			}else{
				item.stop(true).animate({"color":"#919191"}, 200, "easeOutCubic");
				$(".openPart", item).stop(true).animate({"opacity":"1","top":"0px"}, 400, "easeOutCubic");
			}
		},
		buttonOut:function (item){
			if(MSIE8){
				item.css({"color":"#fff"});
				$(".openPart", item).css({"visibility":"hidden"});
			}else{
				item.stop(true).animate({"color":"#fff"}, 200, "easeOutCubic");
				$(".openPart", item).stop(true).animate({"opacity":"0","top":"-120px"}, 400, "easeOutCubic");
			}
		},
		subMenuButtonOver:function (item){ 
		      item.stop().animate({"color":"#000"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      item.stop().animate({"color":"#fff"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});
      
			}
        },
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
              page.css({left:'-1500px'}).stop(true).css({"top":"0"}).delay(100).animate({left:0}, 500, "easeInOutExpo");
              isSplash = false;
              $(window).trigger('resize');   
        },
		prevPageAnimate:function (page){
              page.stop(true).animate({"top":$(window).height()+20}, 500, "easeInSine");
              $("#wrapper>section>#content_part").css({"visibility":"visible"}).stop(true).animate({"top":0}, 100, "easeInOutCubic");
              $("#splash").stop(true).delay(0).animate({opacity:0, marginLeft:"500px"}, 500, "easeInOutCubic");
              $("#logo_holder").stop(true).delay(0).animate({top:90}, 900, "easeInOutCubic");
              $(".big_square").stop(true).delay(0).css({height:'100%'});
      
        },
		backToSplash:function (){
		      isSplash = true;
              $("#wrapper>section>#content_part").stop(true).delay(500).animate({"top":$(window).height()+20}, 700, "easeInOutCubic", function(){$(this).css({"visibility":"hidden"})});
              $("#splash").stop(true).delay(0).animate({opacity:1, marginLeft:0}, 500, "easeInOutCubic");
              $("#logo_holder").stop(true).delay(0).animate({top:390}, 900, "easeInOutCubic");
              $(".big_square").stop(true).delay(0).css({height:'0'});
              $(window).trigger('resize');        
        },
		pageLoadComplete:function (){
		},
	});
})
$(window).load(function(){	
	$("#webSiteLoader").delay(150).animate({opacity:0}, 500, "easeInCubic", function(){$("#webSiteLoader").remove()});


	$('#prev_arr, #next_arr')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})

	
	$('.social_icons > li').hoverSprite({onLoadWebSite:true}); 


//-----Window resize------------------------------------------------------------------------------------------
	$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');

	function resize_function(){
	    var h_cont = $('header').height();
	    var wh = $(window).height();
		m_top = ~~(wh-h_cont)/2-100;
            if(isSplash){
                /*$("header").stop(true).delay(300).animate({"top":m_top}, 350, "easeOutSine");*/
                /*$("footer").stop(true).animate({"height":88}, 350, "easeOutSine");*/
            }else{
                /*$("header").stop(true).animate({"top":0}, 500, "easeOutCubic");*/
            }          
    }
    $(document).resize(
        function(){}
    ).trigger('resize');


    $('#description li').each(function(){
        if($(this).index() != 0)
            $(this).fadeOut();
    })  

	//bgStretch ---------------------------------------------------------------------------------------------

		$('#bgStretch')
		.bgStretch({
			align:'rightTop',
			navigs:$('.gall_thumbs_all').navigs({autoPlay:20000000, prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
		}).sImg({
			spinner:$('.gall_spinner')
		})  


		var aniButtonDuration = 350;
		$('#thumbNav li span').css({opacity:1})
	    $('#thumbNav li a').hover(function()
	    {
	        $(this).find('span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic')					   
	    }, function(){
	        $(this).find('span').stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic')						   
	    })


	    var preview = $('#bgStretch').parent();
	    var description = $('#description');
	    var close_gall = $('#close_gall');
	    
	    $('#description li').each(function(){
	        $(this).find('> div').css({display:'none'})
	    })
	    
	    preview.fadeOut(0);
		close_gall.fadeOut(0);
	    description.stop().animate({opacity:0}, 0, function(){
	        $(this).css({display:'none'})
	    });
	    
	    $('#close_gall').click(function(){
	        closePreview();
	        return false;
	    })

	    function closePreview(){
	      preview.fadeOut(600);
		  close_gall.fadeOut(600);
	    }
	    preview.fadeIn(10);
	    preview.fadeOut(10);





});