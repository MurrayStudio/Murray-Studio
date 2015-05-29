var main = function () {

    var shown = false;

    $('#carousel').addClass("expandOpenEdit");

    //    var enabled = false;
    //    var scrolled = false;
    //    $('#project-box').hide();
    //
    //    $('.project-list').click(function () {
    //        debugger;
    //        if (enabled == false) {
    //            $('#project-box').addClass("slideUp2");
    //            $('#project-box').removeClass("slideDown");
    //            enabled = true;
    //            $('#project-box').show();
    //
    //        } else {
    //            $('#project-box').removeClass("slideUp2");
    //            $('#project-box').addClass("slideDown");
    //            enabled = false;
    //
    //            $("#project-box").on('webkitAnimationEnd', function () {
    //                if (enabled == false) {
    //                    $('#project-box').hide();
    //                }
    //            });
    //        }
    //    });

    //    $(window).scroll(function () {
    //        $('#project-box').each(function () {
    //            var imagePos = $(this).offset().top;
    //
    //            var topOfWindow = $(window).scrollTop();
    //            if (imagePos < topOfWindow + 400 && scrolled == false) {
    //                $('#project-box').addClass("slideUp2");
    //                $('#project-box').show();
    //                $('#project-box').removeClass("slideDown");
    //                enabled = true;
    //                scrolled = true;
    //            }
    //        });
    //    });

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

        //        $('#project-box').each(function () {
        //            var imagePos = $(this).offset().top;
        //
        //            var topOfWindow = $(window).scrollTop();
        //            if (imagePos < topOfWindow + 500) {
        //                $('#project-box').addClass("slideUp2");
        //                //                $('#project-box').show();
        //                //                $('#project-box').removeClass("slideDown");
        //                //                enabled = true;
        //                //                scrolled = true;
        //            }
        //        });

        $('#first.image').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#first.image').addClass("slideLeft");
            }
        });

        $('#second.image').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#second.image').addClass("slideRight");
            }
        });

        $('#third.image').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#third.image').addClass("slideLeft");
            }
        });

    });

    /*    $(document).ready(function(){
        if (Modernizr.touch) {
            // show the close overlay button
            $(".close-overlay").removeClass("hidden");
            // handle the adding of hover class when clicked
            $(".first-image").click(function(e){
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
            });
            // handle the closing of the overlay
            $(".close-overlay").click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".first-image").hasClass("hover")) {
                    $(this).closest(".first-image").removeClass("hover");
                }
            });
        } else {
            // handle the mouseenter functionality
            $(".first-image").mouseenter(function(){
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function(){
                $(this).removeClass("hover");
            });
        }
    });*/

}

$(document).ready(main);