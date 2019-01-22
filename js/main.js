var boatImg = $("#boat");
var width = boatImg.get(0).width;
var screenWidth = $(window).width();
var duration = 5000;

function animateBoat() {

    boatImg.css("left", -width).animate( {
        "left": screenWidth
    }, duration, removeBoat);

}

function removeBoat() {
    $("#boat").css("display", "none");
}

animateBoat();