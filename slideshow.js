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
                  
                  //Small image response (selected effect)
                  
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
        				case 37: // left
        					$(".previous").trigger('click');
        				break;

        				case 40: // down
        					$(".previous").trigger('click');
        				break;

        				case 38: // up
        					$(".next").trigger('click');
        				break;

        				case 39: // right
        					$(".next").trigger('click');
       				 	break;

        				default: return; // exit this handler for other keys
    				}
   				 	e.preventDefault(); // prevent the default action (scroll / move caret)
				});
               
               //Double Click
               
               $(".innerImgWrap img").dblclick(function() {
                   
                  var imgClass = $(this).attr('class'); //connects clicks
                  
                  $('.innerImgWrap img').removeClass('first');     
                  $('.innerImgWrap img').removeClass('selected'); 
                  $('.innerImgWrap img').removeClass('next');
                  $('.innerImgWrap img').removeClass('previous');
                  $('.innerImgWrap img').addClass('hideImg');
                  $(this).next().next().removeClass('hideImg').addClass('next');
                  $(this).removeClass('hideImg').addClass('previous');
                  $(this).next().removeClass('hideImg').addClass('selected');
                  
                  //Small image response (selected effect)
                  $('.imgThumbnail .selected').removeClass("selected").next().addClass('selected');
                  
               });
               
               
                
                //hover over thumbnail effect
               $('.imgThumbnail img').hover(
                   function() {
                    $(this).css({"height":"18vh","width":"18vh"})},
                   
                   function() {
                    $(this).css({"height":"17vh","width":"17vh"});    
               }); 
                
                //selected effect
               
               $('.imgThumbnail img').click(function(){
                  $('.imgThumbnail img').removeClass("selected");
                  $(this).addClass("selected");
               });
               
               //stop thumb infinite scroll (defines length of .thumbImg margin-right)
               
            });
            
            
            
            
            //connecting click events
            $(document).ready(function(){
                
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
                
                //No Right click
                
                $('body').on('contextmenu', 'img', function(e){ return false; });
            });
            
                        //stop thumb infinite scroll (defines length of .thumbImg margin-right)
            
            $(document).ready(function(){
               var vpWidth = $(window).width();
               var vpHeight = $(window).height();
               var thumbsInView = vpWidth/(0.17*vpHeight);
               var thumbsTotal = $(".thumbImg img").length;
               var imgThumbWidth = (thumbsTotal - thumbsInView)*17 + 1; //width of division containing all of the img thumbnails
               $('.thumbImg').css("margin-right","-"+imgThumbWidth+"vh");
            });
               
            
