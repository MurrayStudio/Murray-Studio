var main = function () {

    var enabled = false;
    $('#project-box').hide();

    $('.project-list').click(function () {
        debugger;
        if (enabled == false) {
            $('#project-box').addClass("slideUp");
            $('#project-box').removeClass("slideDown");
            enabled = true;
            $('#project-box').show();

        } else {
            $('#project-box').removeClass("slideUp");
            $('#project-box').addClass("slideDown");
            enabled = false;

            $("#project-box").on('webkitAnimationEnd', function () {
                if (enabled == false) {
                    $('#project-box').hide();
                }
            });
        }


        //$('#project-box').toggleClass("slideUp");
    });

    $(window).scroll(function () {
        $('#project-box').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass("slideUp");
                $('#project-box').show();
                $('#project-box').removeClass("slideDown");
                enabled = true;
            }
        });
    });

    //$('#carousel').carousel('cycle');
}

$(document).ready(main);