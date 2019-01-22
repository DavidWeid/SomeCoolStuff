var boatImg = $("#boat");
var width = boatImg.get(0).width;
var screenWidth = $(window).width();
var duration = 5000;

var cursorX;
var cursorY;

function getMouseLocation(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log(cursorX);
    console.log(cursorY);
}

function animateBoat() {

    boatImg.css("left", cursorX);
    boatImg.css("top", cursorY);

    boatImg.css("left", cursorX).animate( {
        "left": screenWidth
    }, duration, removeBoat);

}

function removeBoat() {
    $("#boat").css("display", "none");
}

function returnBoat() {
    $("#boat").css("visibility", "visible");
    $("#boat").css("display", "unset");
}

$(document).on("click", function(e) {

    returnBoat();
    getMouseLocation(e);
    animateBoat();

})

// animateBoat();