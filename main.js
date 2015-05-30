var main = function () {

    var shown = false;
    var topOfWindow = $(window).scrollTop();

    $('#carousel').addClass("expandOpenEdit");

    $(window).scroll(function () {


        if ($(window).scrollTop() == 0) {
            $('.navbar').animate({
                height: "80px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                height: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                width: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                paddingTop: "9px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                paddingTop: "30px"
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
                paddingTop: "30px"
            }, {
                duration: 300,
                queue: false
            });

            shown = false;
        } else if ($(window).scrollTop() > 0 && !shown) {
            $('.navbar').animate({
                height: "40px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                height: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                paddingTop: "0px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo-class').animate({
                width: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                paddingTop: "15px"
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
                paddingTop: "15px"
            }, {
                duration: 300,
                queue: false
            });

            shown = true;
        }

        $('#first.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#first.image').addClass("slideLeft");
            }
        });

        $('#second.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#second.image').addClass("slideRight");
            }
        });

        $('#third.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#third.image').addClass("slideLeft");
            }
        });

    });
    
    //if page loads in middle, load the animations without scolling

    $('#first.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#first.image').addClass("slideLeft");
        }
    });

    $('#second.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#second.image').addClass("slideRight");
        }
    });

    $('#third.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#third.image').addClass("slideLeft");
        }
    });

}

$(document).ready(main);