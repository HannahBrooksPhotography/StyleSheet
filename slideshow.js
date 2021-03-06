$(document).ready(function(){
               
               //Big picture slides

               $(".innerImgWrap img").click(function() {
                  
                  //Large Image Slide Show Effect 
                  $('.innerImgWrap img').removeClass('first');     
                  $('.innerImgWrap img').removeClass('selected'); 
                  $('.innerImgWrap img').removeClass('next');
                  $('.innerImgWrap img').removeClass('previous');
                  $('.innerImgWrap img').addClass('hideImg');
                  $(this).next().removeClass('hideImg').addClass('next');
                  $(this).prev().removeClass('hideImg').addClass('previous');
                  $(this).removeClass('hideImg').addClass('selected');

               });
               
               //Click next or previous arrow
               	$(".next-arrow").click(function() {
              		$(".next").trigger('click');
              	}); 
              	
              	$(".previous-arrow").click(function(){
              		$(".previous").trigger('click');
              	});
              	
              	//Keyboard "clicks"
              	
              	$(document).keydown(function(e) {
    				switch(e.which) {
    					case 13: //enter
       				 		$(".next").trigger('click');
       				 	break;
       				 	
       				 	case 32: //spacebar
       				 		$(".next").trigger('click');
       				 	break;
    				
        				case 37: // left
        					$(".previous").trigger('click');
        				break;

        				case 38: // up
        					$(".next").trigger('click');
        				break;

        				case 39: // right
        					$(".next").trigger('click');
       				 	break;

        				case 40: // down
        					$(".previous").trigger('click');
        				break;

        				default: return; 
    				}
   				 	e.preventDefault();
				});
               

                //hover over thumbnail effect
               $('.imgThumbnail img').hover(
                   function() {
                    $(this).css({"height":"18vh","width":"18vh"})},
                   
                   function() {
                    $(this).css({"height":"17vh","width":"17vh"});    
               }); 
                
                //selected effect on thumb
               
               $('.imgThumbnail img').click(function(){
                  $('.imgThumbnail img').removeClass("selected");
                  $(this).addClass("selected");
               });
               
               //Connect Clicks
               
               $('.thumbImg img').each(function(i) {
                   $(this).wrap("<span class = 'img" + i + "'></span>");
                });
                
                $('.innerImgWrap img').each(function (i) {
                    $(this).addClass('img' + i);
                });
                
                $('.thumbImg span').click(function() {
                    var imgClass = $(this).attr('class');
                    
                    $('.innerImgWrap img').removeClass('first');     
                    $('.innerImgWrap img').removeClass('selected'); 
                    $('.innerImgWrap img').removeClass('next');
                    $('.innerImgWrap img').removeClass('previous');
                    $('.innerImgWrap img').addClass('hideImg');
                    
                    $('.innerImgWrap .' + imgClass).next().removeClass('hideImg');
                    $('.innerImgWrap .' + imgClass).prev().removeClass('hideImg');
                    $('.innerImgWrap .' + imgClass).removeClass('hideImg');
                    $('.innerImgWrap .' + imgClass).next().addClass('next');
                    $('.innerImgWrap .' + imgClass).prev().addClass('previous');
                    $('.innerImgWrap .' + imgClass).addClass('selected');
                    

                    
                });
                
                 $('.innerImgWrap img').click(function() {
                 	var imgClass = $(this).attr('class').replace('selected','');
                 	
                 	$('.thumbImg .selected').removeClass('selected');
                    $('.thumbImg .' + imgClass).children().addClass('selected');
                 });
                 
                 //Window size dependent functions

                vpWidth = $(window).width();
               	vpHeight = $(window).height();
               	thumbsInView = vpWidth/(0.17*vpHeight);
               	var thumbsTotal = $(".thumbImg img").length;
               	imgThumbWidth = (thumbsTotal - thumbsInView)*17 + 1; 
               	$('.thumbImg').css("margin-right","-"+imgThumbWidth+"vh"); 
                  
               //Scrolls .imgThumbnail            
               	$('img').click(function () {
					imgNumber = $('.thumbImg .selected').parent().attr('class').replace('img', '');
					sp1 = (0.17*vpHeight)*imgNumber; 
					sp2=(0.17*vpHeight*imgNumber)-vpWidth+(0.17*vpHeight); 
						
					ap = $('.imgThumbnail').scrollLeft(); 
						
					if(ap <= sp1 && ap >= sp2){
						return;
					}
					else if(ap > sp1) {
						$('.imgThumbnail').animate({scrollLeft: sp2}, 1000);
					}
					else { 
						$('.imgThumbnail').animate({scrollLeft: sp1}, 1000);
					}
				});
                
                //changes variables on resize/orientationchange
                
                var changeSizeVar = function () {
                    vpWidth = $(window).width();
               	    vpHeight = $(window).height();
               	    thumbsInView = vpWidth/(0.17*vpHeight);
               	    imgThumbWidth = (thumbsTotal - thumbsInView)*17 + 1;
               	    $('.thumbImg').css("margin-right","-"+imgThumbWidth+"vh");
                    
                };
                
                window.addEventListener("resize", changeSizeVar, false);
                window.addEventListener("orientationchange", changeSizeVar, false);
    
                //No Right click
                
                $('body').on('contextmenu', 'img', function(e){ return false; });

            });
