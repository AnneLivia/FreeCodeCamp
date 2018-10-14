var loaded = false;
$(document).ready(function () {
    if(!loaded) {
        changeQuoteAndColor();
        loaded = true;
    } 
    $(".newQuote").on("click", function () {
        changeQuoteAndColor();
    })
    $('#tweet').on('click', function() {
          openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    });
})
var colors = ["#5877ff", "#ff5555", "#96ff66", "#ffcff4a", "#ffa24a", "#ff5898","#cc99ff","#ff9999"];
var i = 0;
function changeQuoteAndColor() {
    var author = "", quote = "";
    $.ajax({
        url: 'https://talaikis.com/api/quotes/random/',
        dataType: 'json',
        success: function (data) {
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
            $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quote + '" ' + data.author));
            if(loaded) {
                $(".phrase").animate({
                    opacity: 0
                }, 300,
                    function () {
                        $(this).animate({
                            opacity: 1
                        }, 500);
                        $('#text').html("<i class='fas fa-quote-left'></i> " + data.quote + " <i class='fas fa-quote-right'></i>");
                    });
                $(".author").animate({opacity: 0},300, function () {
                    $(this).animate({
                        opacity: 1
                    }, 300);
                    $("#nameAuthor").html(" - " + data.author);
                });
            } else {
                $(".phrase").animate({
                    opacity: 0
                }, 100,
                    function () {
                        $(this).animate({
                            opacity: 1
                        }, 200);
                        $('#text').html("<i class='fas fa-quote-left'></i> " + data.quote + " <i class='fas fa-quote-right'></i>");
                    });
                $(".author").animate({opacity: 0},100, function () {
                    $(this).animate({
                        opacity: 1
                    }, 100);
                    $("#nameAuthor").html(" - " + data.author);
                });
            }
            $("body").css("background-color", colors[i]);
                i++;
                if (i == colors.length)
                    i = 0;
        }
    });
}
    