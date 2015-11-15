 $(document).ready(function() {
        $(window).resize(function() {
                var winWidth = $(window).width();
                var parentWidth = $('#big_box').innerWidth();
                 var divider = parentWidth /96 ; 
                   
                    $('#big_box img').css( "margin", divider );
                
            
                if(winWidth < 321) {
                parentWidth = 320;
               $('#big_box').innerWidth('100%');
                $('.box-1').width( divider * 94) ;        //1 column
                $('.box-2').width( divider * 94) ;
                $('.box-3').width( divider * 94) ;
                $('.box-4').width( divider * 94) ;
                } 
                    else if(winWidth < 480) {
                parentWidth = 480;
                      $('#big_box').innerWidth('100%');
                $('.box-1').width(divider * 46).height(divider * 46) ;        //2 col
                $('.box-2').width(divider * 94).height(divider * 46) ;
                $('.box-3').width(divider * 46).height(divider * 94) ;
                $('.box-3').css( "float","left" ) ;
                $('.box-4').width(divider * 94).height(divider * 94) ;
                } 
                    else if(winWidth < 768) {
                parentWidth = 768;
                       $('#big_box').innerWidth(480);
                $('.box-1').width(divider * 30).height(divider * 30) ;        //3 col
                $('.box-2').width(divider * 62).height(divider * 30);
                $('.box-3').width(divider * 30).height(divider * 62);
                $('.box-3:first').css( "float","right" ) ;
                $('.box-4').width(divider * 62).height(divider * 62) ;
                } 
                    else if(winWidth < 1024) {
                parentWidth = 1024;
                      $('#big_box').innerWidth(720);
                $('.box-1').width(divider * 22).height(divider * 22) ;        //4 col
                $('.box-2').width(divider * 46).height(divider * 22) ;
                $('.box-3').width(divider * 46).height(divider * 94) ;
                $('.box-3').css( "float","right" ) ;
                $('.box-4').width(divider * 46).height(divider * 46) ;
                        
                }
                    else if(winWidth < 1224) {
                parentWidth = 1224;
                      $('#big_box').innerWidth(960);
                $('.box-1').width(divider * 14).height(divider * 14);        //6 col
                $('.box-2').width(divider * 30).height(divider * 14) ;
                $('.box-2:first').width(divider * 62).height(divider * 30) ;
                $('#big_box img:nth-child(12)').width(divider * 62).height(divider * 30) ;
                $('#big_box img:nth-child(23)').width(divider * 62).height(divider * 30) ;
                $('.box-3').width(divider * 14).height(divider * 30) ;
                $('.box-3').css( "float","left" ) ;
                $('.box-4').width(divider * 30).height(divider * 30) ;
                }
                    else {
                parentWidth = 1824;
                             
                };
            });
    $(window).trigger('resize');
});