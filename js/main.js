$(document).ready(function () {
    $(".sidenav").sidenav();

    $("#works-btn").on("click", function() {
        $(".page-two").css("height", "100%");
    });

    $("#works-btn-2").on("click", function() {
        $(".page-two").css("height", "0%");
    });

    $("#contact-btn").on("click", function() {
        $(".page-three").css("height", "100%");
    });

    $("#contact-btn-3").on("click", function() {
        $(".page-three").css("height", "0%");
    })
})