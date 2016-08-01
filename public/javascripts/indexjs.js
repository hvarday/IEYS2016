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
        $('.menu-icon').css('background-color','transparent');
        $('.close-button').css('background-color','transparent');
    var a='';
    for(var i=0;i<teamleads.length;i++)
    {
        for(var j=1;j<teamleads[i].length;j++)
        {
            a+='<div class="col s10 m5 l4 offset-m1 offset-s1 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">'+
            '<div class="card z-depth-2">'+
            '<div class="card-image">'+
            '<img src="/images/loader.svg"/>'+
            '</div>'+
            '<div class="card-content">'+
            '<h5 class="card-title">'+teamleads[i][j]+'</h5>'+
            '</div>'+
            '<div class="card-action">'+
            '<p>'+teamleads[i][0]+'</p>'+
            '</div>'+

            '</div>'+
            '</div>'
        }

    }
    var e=document.getElementById('team-leads');
    e.innerHTML=a;

    a='';
    for(var i=0;i<mentors.length;i++)
    {
        for(var j=1;j<mentors[i].length;j++)
        {
            a+='<div class="col s10 m5 l4 offset-m1 offset-s1 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">'+
            '<div class="card z-depth-2">'+
            '<div class="card-image">'+
            '<img src="/images/loader.svg"/>'+
            '</div>'+
            '<div class="card-content">'+
            '<h5 class="card-title">'+mentors[i][j]+'</h5>'+
            '</div>'+
            '<div class="card-action">'+
            '<p>'+mentors[i][0]+'</p>'+
            '</div>'+

            '</div>'+
            '</div>'
        }

    }
    e=document.getElementById('mentors-card');
    e.innerHTML=a;
    var h=$(window).height();
    var b=document.getElementsByClassName('background');
    var c=b[0].children;
    if(h>1080){
        h=1080;
    }
    c[0].setAttribute('height',h);
    var h=$('#developers .card-image').height();
    console.log(h);
    var w=$('#developers .card-image').width();
    w=w/2;
    w=w-50;
    $('.image').css('left',w);
    $('.image').css('top',h-(100/2));
});
