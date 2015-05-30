var main = function () {

    var shown = false;
    var delay = 0;

    $('#title').addClass("expandOpenEdit");
    $('#first.image').addClass("slideLeft");

    //    the ability to change the icon arrow for the gallery can be done by switching out image file in source folder
    $('#imageGallery').justifiedGallery({
        rowHeight: 230,
        maxRowHeight: 0,
        minRowHeight: 210,
        lastRow: 'nojustify',
        rel: 'gallery1',
        margins: 2,
        sizeRangeSuffixes: {
            lt100: '_t',
            lt240: '_m',
            lt320: '_n',
            lt500: '',
            lt640: '_z',
            lt1024: '_b'
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });

    
    //click hover button to expand gallery of images
    $('#graphic-design-gallery.expand').click(function () {
        $("#forth-row.row.featurette").hide("slow");

        $('#imageGallery').show();
        $("#gallery.back-container").show();
        $('#gallery-heading').show();
        $('#gallery-heading').addClass('fadeIn');
        $('#gallery.back-container').addClass('fadeIn');

        $('#imageGallery a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });

    
    //click link button to expand gallery of images
    $('#gallery-button').click(function () {
        $("#forth-row.row.featurette").hide("slow");

        $('#imageGallery').show();
        $("#gallery.back-container").show();
        $('#gallery-heading').show();
        $('#gallery-heading').addClass('fadeIn');
        $('#gallery.back-container').addClass('fadeIn');

        $('#imageGallery a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });

    //click back button to close image gallery and open row 4 again
    $('#gallery.go-back').click(function () {
        $("#imageGallery").hide("slow");
        $("#gallery.back-container").hide("slow");
        $("#gallery-heading").hide("slow");

        $('#forth-row.row.featurette').show();
        $('#forth-row.row.featurette').addClass('fadeIn');

    });


    //click link button to expand and play youtube video
    $('#youtube-video').click(function () {
        $("#first-row.row.featurette").hide("slow");

        $('#video-container').show();
        $('#video-container').addClass('fadeIn');

        $('#video.back-container').show();
        $('#video.back-container').addClass('fadeIn');

        $("#video")[0].src = "https://www.youtube.com/embed/0aGEfgc-haQ?enablejsapi=1&autoplay=1";
        ev.preventDefault();

    });

    //click back button to close and stop youtube video
    $('#video.go-back').click(function () {
        $("#video-container").hide("slow");
        $("#video.back-container").hide("slow");

        $('#first-row.row.featurette').show();
        $('#first-row.row.featurette').addClass('fadeIn');

        $("#video")[0].src = "https://www.youtube.com/embed/0aGEfgc-haQ?enablejsapi=1";
        ev.preventDefault();

    });

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

        /*        $('#first.image').each(function () {
                    var imagePos2 = $(this).offset().top;

                    var topOfWindow = $(window).scrollTop();
                    if (imagePos2 < topOfWindow + 500) {
                        $('#first.image').addClass("slideLeft");
                    }
                });*/

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

        $('#forth.image').each(function () {
            var imagePos2 = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#forth.image').addClass("slideRight");
            }
        });


    });

    /*    $(document).ready(function () {
            if (Modernizr.touch) {
                // show the close overlay button
                $(".close-overlay").removeClass("hidden");
                // handle the adding of hover class when clicked
                $(".first-image").click(function (e) {
                    if (!$(this).hasClass("hover")) {
                        $(this).addClass("hover");
                    }
                });
                // handle the closing of the overlay
                $(".close-overlay").click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ($(this).closest(".first-image").hasClass("hover")) {
                        $(this).closest(".first-image").removeClass("hover");
                    }
                });
            } else {
                // handle the mouseenter functionality
                $(".first-image").mouseenter(function () {
                        $(this).addClass("hover");
                    })
                    // handle the mouseleave functionality
                    .mouseleave(function () {
                        $(this).removeClass("hover");
                    });
            }
        });*/

}

$(document).ready(main);