var main = function () {

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

        $('#project-box').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $('#project-box').addClass("slideUp2");
                //                $('#project-box').show();
                //                $('#project-box').removeClass("slideDown");
                //                enabled = true;
                //                scrolled = true;
            }
        });

        $('.first-col7').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.first-col7').addClass("slideUp");
            }
        });

        $('.first-col5').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.first-col5').addClass("slideUp");
            }
        });

        $('.second-col7').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.second-col7').addClass("fadeIn");
            }
        });

        $('.second-col5').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.second-col5').addClass("fadeIn");
            }
        });

        $('.third-col7').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.third-col7').addClass("fadeIn");
            }
        });

        $('.third-col5').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('.third-col5').addClass("fadeIn");
            }
        });

    });

    //$('#carousel').carousel('cycle');
}

$(document).ready(main);