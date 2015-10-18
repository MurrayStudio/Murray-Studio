var main = function () {

    var shown = false;
    var delay = 0;
    var delay2 = 500;
    var topOfWindow = $(window).scrollTop();
    
    var foo = function (input) { return input + 1; };

    $('#title').addClass("expandOpenEdit");

    setTimeout(function () {
        $('#first.image').addClass("slideLeft");
    }, 500); // delay 100 ms
    
    
    /* BEGIN GRAPHIC DESIGN GALLERY JS */
    

    //define gallery container prefs
    $('#image-gallery-graphic-design').justifiedGallery({
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
        $("#fifth-row.row.featurette").hide("slow");

        $('#image-gallery-graphic-design').show();
        $("#gallery-graphic-design.back-container").show();
        $('#gallery-heading-graphic-design').show();
        $('#gallery-heading-graphic-design').addClass('fadeIn');
        $('#gallery-graphic-design.back-container').addClass('fadeIn');

        $('#image-gallery-graphic-design a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });


    //click link button to expand gallery of images
    $('#gallery-button-graphic-design').click(function () {
        $("#fifth-row.row.featurette").hide("slow");

        $('#image-gallery-graphic-design').show();
        $("#gallery-graphic-design.back-container").show();
        $('#gallery-heading-graphic-design').show();
        $('#gallery-heading-graphic-design').addClass('fadeIn');
        $('#gallery-graphic-design.back-container').addClass('fadeIn');

        $('#image-gallery-graphic-design a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });

    //click back button to close image gallery and open row 4 again
    $('#gallery-graphic-design.go-back').click(function () {
        $("#image-gallery-graphic-design").hide("slow");
        $("#gallery-graphic-design.back-container").hide("slow");
        $("#gallery-heading-graphic-design").hide("slow");

        $('#fifth-row.row.featurette').show();
        $('#fifth-row.row.featurette').addClass('fadeIn');

    });
    
    
    /* BEGIN MURRAY STUDIO GALLERY JS */
    
    
        //define gallery container prefs
    $('#image-gallery-murray-studio').justifiedGallery({
        rowHeight: 430,
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
    $('#murray-studio-gallery.expand').click(function () {
        $("#forth-row.row.featurette").hide("slow");

        $('#image-gallery-murray-studio').show();
        $("#gallery-murray-studio.back-container").show();
        $('#gallery-heading-murray-studio').show();
        $('#gallery-heading-murray-studio').addClass('fadeIn');
        $('#gallery-murray-studio.back-container').addClass('fadeIn');

        $('#image-gallery-murray-studio a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });


    //click link button to expand gallery of images
    $('#gallery-button-murray-studio').click(function () {
        $("#forth-row.row.featurette").hide("slow");

        $('#image-gallery-murray-studio').show();
        $("#gallery-murray-studio.back-container").show();
        $('#gallery-heading-murray-studio').show();
        $('#gallery-heading-murray-studio').addClass('fadeIn');
        $('#gallery-murray-studio.back-container').addClass('fadeIn');

        $('#image-gallery-murray-studio a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });

    //click back button to close image gallery and open row 4 again
    $('#gallery-murray-studio.go-back').click(function () {
        $("#image-gallery-murray-studio").hide("slow");
        $("#gallery-murray-studio.back-container").hide("slow");
        $("#gallery-heading-murray-studio").hide("slow");

        $('#forth-row.row.featurette').show();
        $('#forth-row.row.featurette').addClass('fadeIn');

    });
    
    /* BEGIN STORY STUDIO GALLERY JS */
    
            //define gallery container prefs
    $('#image-gallery-story-studio').justifiedGallery({
        rowHeight: 430,
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
    $('#story-studio-gallery.expand').click(function () {
        $("#first-row.row.featurette").hide("slow");

        $('#image-gallery-story-studio').show();
        $("#gallery-story-studio.back-container").show();
        $('#gallery-heading-story-studio').show();
        $('#gallery-heading-story-studio').addClass('fadeIn');
        $('#gallery-story-studio.back-container').addClass('fadeIn');

        $('#image-gallery-story-studio a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });


    //click link button to expand gallery of images
    $('#gallery-button-story-studio').click(function () {
        $("#first-row.row.featurette").hide("slow");

        $('#image-gallery-story-studio').show();
        $("#gallery-story-studio.back-container").show();
        $('#gallery-heading-story-studio').show();
        $('#gallery-heading-story-studio').addClass('fadeIn');
        $('#gallery-story-studio.back-container').addClass('fadeIn');

        $('#image-gallery-story-studio a').each(function () {
            var $a = $(this);
            setTimeout(function () {
                $a.addClass('expandOpenEdit');
            }, delay += 300); // delay 100 ms
            //}
        });
    });

    //click back button to close image gallery and open row 4 again
    $('#gallery-story-studio.go-back').click(function () {
        $("#image-gallery-story-studio").hide("slow");
        $("#gallery-story-studio.back-container").hide("slow");
        $("#gallery-heading-story-studio").hide("slow");

        $('#first-row.row.featurette').show();
        $('#first-row.row.featurette').addClass('fadeIn');

    });
    
    /* BEGIN YOUTUBE VIDEO FOR STORY STUDIO GALLERY JS */


    //click link button to expand and play youtube video
    $('#youtube-video-story-studio').click(function () {
        $("#first-row.row.featurette").hide("slow");

        $('#video-container-story-studio').show();
        $('#video-container-story-studio').addClass('fadeIn');

        $('#video-story-studio.back-container').show();
        $('#video-story-studio.back-container').addClass('fadeIn');

        $("#video-story-studio")[0].src = "https://www.youtube.com/embed/PT8qZGleTYA?enablejsapi=1&autoplay=1";
        ev.preventDefault();

    });

    //click back button to close and stop youtube video
    $('#video-story-studio.go-back').click(function () {
        $("#video-container-story-studio").hide("slow");
        $("#video-story-studio.back-container").hide("slow");

        $('#first-row.row.featurette').show();
        $('#first-row.row.featurette').addClass('fadeIn');

        $("#video-story-studio")[0].src = "https://www.youtube.com/embed/PT8qZGleTYA?enablejsapi=1";
        ev.preventDefault();

    });
    
    
    /* BEGIN YOUTUBE VIDEO FOR MURRAY STUDIO GALLERY JS */
    
        //click link button to expand and play youtube video
    $('#video-button-murray-studio').click(function () {
        $("#forth-row.row.featurette").hide("slow");

        $('#video-container-murray-studio').show();
        $('#video-container-murray-studio').addClass('fadeIn');

        $('#video-murray-studio.back-container').show();
        $('#video-murray-studio.back-container').addClass('fadeIn');

        $("#video-murray-studio")[0].src = "https://www.youtube.com/embed/7nudUlwRLV8?enablejsapi=1&autoplay=1";
        ev.preventDefault();

    });

    //click back button to close and stop youtube video
    $('#video-murray-studio.go-back').click(function () {
        $("#video-container-murray-studio").hide("slow");
        $("#video-murray-studio.back-container").hide("slow");

        $('#forth-row.row.featurette').show();
        $('#forth-row.row.featurette').addClass('fadeIn');

        $("#video-murray-studio")[0].src = "https://www.youtube.com/embed/7nudUlwRLV8?enablejsapi=1";
        ev.preventDefault();

    });
    
    
    /* BEGIN NAVBAR RESPONSIVE UI SCALING ON SCROLLING JS */
    

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
        
        /* BEGIN ANIMATION OF IMAGES WHEN SCROLLING JS */

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

        $('#forth.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#forth.image').addClass("slideRight");
            }
        });


    });

    //if page loads in middle, load the animations without scolling
    $('#second.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            setTimeout(function () {
                $('#second.image').addClass("slideRight");
            }, delay2 += 500);
        }
    });

    $('#third.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            setTimeout(function () {
                $('#third.image').addClass("slideLeft");
            }, delay2 += 500);
        }
    });

    $('#forth.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            setTimeout(function () {
                $('#forth.image').addClass("slideRight");
            }, delay2 += 500);
        }
    });

}

$(document).ready(main);