// JQuery sheet for main pages

$(document).ready(function(){
            
               $('.exitButton').hide();
            
                //Picture Slide
                
               $('iframe').hide();
               
               $('td a').click(function(){
                  $('iframe').show().focus(); 
                  $('.cover2').css('margin-left','0%');
                  $('.exitButton').show();
                  $('.exitButton').css('margin-left','0%');
               });
               
               //exit iframe
                    //Button
               $('.exitButton').click(function() {
                    $('.cover2').css('margin-left','-104%');
                    $('iframe').hide();
                    $('iframe').attr('src','');
                    $('.exitButton').hide();
               });
                    //Click off iframe
               $('.cover2').click(function() {
                    $('.cover2').css('margin-left','-104%');
                    $('iframe').hide();
                    $('iframe').attr('src','');
                    $('.exitButton').hide();
               });
               
               $('.cover2').hover(
                   function() {
                       $('.cover2').fadeTo('fast', 0)},
                   function() {
                       $('.cover2').fadeTo('fast',0.9)
               });  
            
            
            
               //Menu
               $('button.menu-button').click(function() {
                    $('.left-off-canvas-menu').animate({left: "20%"},300);
                    $('.left-off-canvas-toggle').animate({left:"20%"},30);
                    $('.cover1').css('margin-left','0%');
                    $('.left-off-canvas-toggle').css('z-index',"1");
               }); 
               
               $('.cover1').click(function() {
                    $('.left-off-canvas-menu').animate({left: "0%"},1);
                    $('.left-off-canvas-toggle').animate({left:"0%"},1);
                    $('.cover1').css('margin-left','-104%');
                    $('.left-off-canvas-toggle').css('z-index',"3");
               });
               
               $('.cover1').hover(
                   function() {
                       $('.cover1').fadeTo('fast', 0)},
                   function() {
                       $('.cover1').fadeTo('fast',0.6)
               });
        });
