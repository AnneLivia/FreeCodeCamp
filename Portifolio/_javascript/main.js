/* Function to make the scrool moving slowly when clicked*/
$("#idNav a").click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'), 
    targetOffset = $(id).offset().top,
    menuheight = $('#idNav').innerHeight();
    
    $('html, body').animate({
        scrollTop: targetOffset
    }, 800);
});
/* Function to make the scrool moving slowly when clicked*/
$(".goto a").click(function(e) {
    e.preventDefault();
    var id = $(this).attr("href"), targetOffset = $(id).offset().top;

    $("html, body").animate({
        scrollTop: targetOffset
    },800);
});

$(".btSend").mouseover(function(){
    $(this).addClass("animated rubberBand");
});

$(".btSend").mouseout(function(){
    $(this).removeClass("animated rubberBand");
});

function fixedBar() {
    var documentTop = $(document).scrollTop() - 10;
    var control = $(document).scrollTop() - 10;
    if(documentTop > $('.nav').offset().top) {
        $('.nav').addClass('fixed');
        $('.nav').addClass('animated slideInLeft');
    }

    if(documentTop < 0) {
        $('.nav').removeClass('fixed');
        $('.nav').removeClass('animated slideInLeft');
    }
}

function animation() 
{
    var documentTop = $(document).scrollTop() + 400;
    
    $('.anime1').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated lightSpeedIn');
        } 
    });

    $('.anime2').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated rollIn');
        }
    });

    $('.anime3').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated slideInLeft');
        }
    });

    $('.anime4').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated fadeInRight');
        }
    });

    $('.anime5').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated zoomIn');
        }
    });

    $('.anime6').each(function(){
        if(documentTop > $(this).offset().top) {
            $(this).addClass('animated slideInUp');
        }
    });

   

    if(documentTop == 400) {
        $('.anime1').removeClass('animated lightSpeedIn');
        $('.anime2').removeClass('animated rollIn');
        $('.anime3').removeClass('animated slideInLeft');
        $('.anime4').removeClass('animated fadeInRight');
        $('.anime5').removeClass('animated zoomIn'); 
        $('.anime6').removeClass('animated slideInUp');
    }
}

animation();
fixedBar();

$(document).scroll(function(){
    animation();
    fixedBar();
});




