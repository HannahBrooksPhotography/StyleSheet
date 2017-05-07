$(document).ready(function(){
               
               //Big picture slides

               $(".innerImgWrap img").click(function() {
                   
                  var imgClass = $(this).attr('class'); //connects clicks
                  
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

        				default: return; // exit this handler for other keys
    				}
   				 	e.preventDefault(); // prevent the default action (scroll / move caret)
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
                 
                var vpWidth = $(window).width();
               	var vpHeight = $(window).height();
               	var thumbsInView = vpWidth/(0.17*vpHeight); //0.17*vpHeight = 17vh, which is the picture width. 
               	var thumbsTotal = $(".thumbImg img").length;
               	var imgThumbWidth = (thumbsTotal - thumbsInView)*17 + 1; //width of the hidden portion of the division (in vw) containing all of the img thumbnails
               	$('.thumbImg').css("margin-right","-"+imgThumbWidth+"vh"); //sets size (margin-right) of imgThumbnail class so there isn't an infinite scroll. 
                  
               //Slides tab (.imgThumbnail) when it goes out of site and you've navigated to the next/previous picture               
               	$('img').click(function () {
			var imgNumber = $('.thumbImg .selected').parent().attr('class').replace('img', '');
			var sp1 = (0.17*vpHeight)*imgNumber; //scroll position if thumbnail were on left side of screen
			sp2=(0.17*vpHeight*imgNumber)-vpWidth+(0.17*vpHeight);
						
			var ap = $('.imgThumbnail').scrollLeft(); //actual position of scroll/image
						
			if(ap <= sp1 && ap >= sp2){
				return;
			}
			else if(ap > sp1) {
				$('.imgThumbnail').animate({scrollLeft: sp2}, 1000);
			}
			else { //i.e. if a > sp2
				$('.imgThumbnail').animate({scrollLeft: sp1}, 1000);
			}
		});

   
                //No Right click
                
                $('body').on('contextmenu', 'img', function(e){ return false; });

            });
               
                                          //Double Click
               
               //$(".innerImgWrap img").dblclick(function() {
                   
                 // var imgClass = $(this).attr('class'); //connects clicks
                  
                  //$('.innerImgWrap img').removeClass('first');     
                  //$('.innerImgWrap img').removeClass('selected'); 
                  //$('.innerImgWrap img').removeClass('next');
                  //$('.innerImgWrap img').removeClass('previous');
                  //$('.innerImgWrap img').addClass('hideImg');
                  //$(this).next().next().removeClass('hideImg').addClass('next');
                  //$(this).removeClass('hideImg').addClass('previous');
                  //$(this).next().removeClass('hideImg').addClass('selected');
                  
               //});
