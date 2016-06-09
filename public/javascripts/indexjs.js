/**
 * Created by systems on 08-06-2016.
 */
$(document).ready(function(){
    $('.modal-trigger').leanModal();
    var c=$('.card-image').height();
    var a=$(".activator").height();
    var x=c-(a/2);
    $(".activator").css("top",x);
    $(".activator").css("right",10);
    $(document).on('click.card', '.card', function (e) {
        if ($(this).find('> .card-reveal').length) {
            if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
                // Make Reveal animate down and display none
                $(this).find('.card-reveal').velocity(
                    {translateY: 0}, {
                        duration: 225,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: function() { $(this).css({ display: 'none'}); }
                    }
                );
            }
            else if ($(e.target).is($('.activator')) ||
                $(e.target).is($('.activator img')) ) {
                $(e.target).closest('.card').css('overflow', 'hidden');
                $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
            }
            else
            {

            }
        }

        $('.card-reveal').closest('.card').css('overflow', 'hidden');

    });
});
