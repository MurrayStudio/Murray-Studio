var main = function () {

    var shown = false;
    var delay = 0;
    var delay2 = 500;
    var topOfWindow = $(window).scrollTop();

    $('#title').addClass("expandOpenEdit");

    setTimeout(function () {
        $('#first.image').addClass("slideLeft");
    }, 500); // delay 100 ms



    $(window).scroll(function () {


        if ($(window).scrollTop() == 0) {
            $('.logo').animate({
                height: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                width: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginTop: "15px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                fontSize: "42px"
            }, {
                duration: 300,
                queue: false
            });

            $('#navbar a').animate({
                fontSize: "20px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginTop: "15px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle').animate({
                marginTop: "25px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle.collasped').animate({
                marginTop: "25px"
            }, {
                duration: 300,
                queue: false
            });

            shown = false;
        } else if ($(window).scrollTop() > 0 && !shown) {
            $('.logo').animate({
                height: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                width: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginBottom: "0px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginTop: "2px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginBottom: "2px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                fontSize: "32px"
            }, {
                duration: 300,
                queue: false
            });

            $('#navbar a').animate({
                fontSize: "18px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginTop: "3px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginBottom: "1px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle.collasped').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            shown = true;
        }


    });

}

$(document).ready(main);