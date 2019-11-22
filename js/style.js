$(document).foundation();
   
    var slidingComponent = $('.sliding-border');
    var listHeight = $('.tabs-title').outerHeight();
    slidingComponent.css('height',listHeight);
   
$('.tabs-title a').click(function(e){
        activePosition = $(this).parent().position().top;
        listHeight = $(this).parent().outerHeight();
        slidingComponent.css('height',listHeight);
        slidingComponent.css('transform', 'translateY('+activePosition+'px)');
    }); 