var minute = 0;
var goal = 0;

$(document).ready(function () {
    goOn();
    addMinutes();
    returning();
    reset();
    $(".goOn").mouseenter(function () {
        $(".goOn").addClass("animated pulse");
    })

    $(".goOn").mouseleave(function () {
        $(".goOn").removeClass("animated pulse");
    })

    $("#nMinute").tooltip({
        classes: {
            "ui-tooltip": "highlight text-center"
        },
        position: {
            my: "left top",
            at: "right+20 top-16",
            collision: "none"
        }
    });

    $("#addMinute").tooltip({
        classes: {
            "ui-tooltip": "highlight text-center"
        },
        position: {
            my: "left top",
            at: "left-35 top+50",
            collision: "none"
        }
    });
})

function goOn() {
    $(".goOn").on("click", function (e) {
        e.preventDefault();
        goal = parseInt($("#nMinute").val());
        $(".timeToReach").html(goal + " minutes");
        $(".startPage").hide(580);
        $(".processPage").show(580);
        $(".processPage h1").addClass("animated swing");
        move();
        if (minute < goal)
            defaultColors();
    })
}

function defaultColors() {
    $(".textTime").html(minute + " minutes");
    $(".timeToReach").css("color", "#ff8c94");
    $(".timeToReach").css("font-size", "13pt");
    $(".timeToReach").removeClass("animated rubberBand");
    $(".time").css("border-color", "white");
    $(".time").css("color", "white");
}

function addMinutes() {
    $(".add").on("click", function () {
        minute += parseInt($("#addMinute").val());
        move();
        $(".textTime").html(minute + " minutes");
        if (minute >= goal) {
            $(".timeToReach").css("color", "#57e703");
            $(".timeToReach").css("font-size", "15pt");
            $(".timeToReach").addClass("animated rubberBand");
            $(".time").css("border-color", "#57e703");
            $(".time").css("color", "#facf12");
        }
    });
}

function returning() {
    $(".btReturn").on("click", function (e) {
        e.preventDefault();
        $(".startPage").show("slow");
        $(".processPage").slideUp("slow");
        $(".processPage h1").addClass("animated swing");
    });
}

function reset() {
    $(".btReset").on("click", function (e) {
        e.preventDefault();
        $("#dialog").dialog({
            hide: {
                effect: "fold",
                duration: 250,
            },
            show: {
                effect: "fold",
                duration: 250,
            },
            resizable: false,
            height: "auto",
            width: 280,
            modal: true,
            buttons: {
                "Yes": function () {
                    minute = 0;
                    $(".textTime").html(minute + " minutes");
                    $(".timeToReach").css("color", "#ff8c94");
                    $(".timeToReach").css("font-size", "13pt");
                    $(".timeToReach").removeClass("animated rubberBand");
                    $(".time").css("border-color", "white");
                    $(".time").css("color", "white");
                    $("#bar").css("background-color", "#d549ff");
                    move();
                    $(this).dialog("close");
                },
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });
    })
}

function move() {
    var elem = document.getElementById("bar");
    var width = ((minute * 100) / goal) - 1;
    if (width < 100) {
        width++;
        elem.style.width = width + '%';
        if (width >= 25 && width < 50)
            elem.style.backgroundColor = "#ff9b49";
        if (width >= 50 && width < 75)
            elem.style.backgroundColor = "#d6ff1f";
        if (width >= 75 && width < 100)
            elem.style.backgroundColor = "#e94e11";
    }
    if (width >= 100 && minute >= goal) {
        elem.style.width = 100 + '%';
        elem.style.backgroundColor = "#57e703";
    }
}