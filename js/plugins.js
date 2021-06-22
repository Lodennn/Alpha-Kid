/*global $, alert, console*/

$(function () {
    
    'use strict';

    /** GLOBAL VARIABLES */
    var characters  = $(".characters"),
        kid         = $('.kid'),
        filter      = $('.filter');
    /** GLOBAL VARIABLES */

    // Window Scroll
    $(window).on('scroll', function() {
        var sc = $(this).scrollTop();
        if(sc>=152) {
            characters.css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                zIndex: '99999',
                height: '8rem'
            });
            characters.find('li').css({
                width: '6.5rem',
                height: '6.5rem',
            });
            characters.find('li').addClass('removeShades');
        } else {
            characters.css({
                position: 'static',
                width: '100%',
                height: '12rem',
            });
            characters.find('li').css({
                width: '9.5rem',
                height: '9.5rem',
            });
            characters.find('li').removeClass('removeShades');
        }
    });

    // Kids Evaluate
    kid.mouseenter(function () {
        $(this).find('.kid__info').css({
            opacity: 1,
            visibility: 'visible'
        });
    });
    kid.mouseleave(function () {
        $(this).find('.kid__info').css({
            opacity: 0,
            visibility: 'hidden',
        });
    });
    
    // Active Links on Parent Profile
    $('.profile__item').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Auth Form Flip
    $('#signup').on('click', function() {
        $('.auth-form .front').css('transform', 'rotateY(180deg)');
        $('.auth-form .back').css('transform', 'rotateY(0deg)');
    });

    // Notification SWITCH
    $("#notification__btn").on('click', function() {
        $('.settings')
        .toggleClass('active')
        .parent()
        .siblings('li#profile__btn')
        .find('.profile__settings')
        .removeClass('active');
    });
    // Profile SWITCH
    $("#profile__btn").on('click', function() {
        $('.profile__settings')
        .toggleClass('active')
        .parent()
        .siblings('li#notification__btn')
        .find('.settings')
        .removeClass('active');
    });

    /*  FILTER */
    // Filter Menu ON
    $(".filter .ak-btn-filter").on('click', function() {
        $(this).parent().find('.filter__menu').css({
            opacity: 1,
            visibility: 'visible',
        });
        $(this).parent().find('.filter__menu').find('.overlay').css({
            opacity: 1,
            visibility: 'visible',
            right: 0
        });
    });
    // Filter Menu OFF
    $("#close__filter").on('click', function() {
        filter.find('.filter__menu').css({
            opacity: 0,
            visibility: 'hidden',
        });
        filter.find('.filter__menu').find('.overlay').css({
            opacity: 0,
            visibility: 'hidden',
            right: '-100rem',
        });
    });
    /*  FILTER */

    /* Characters */
    $('.characters__character').each(function(i) {
        setInterval(function() {
            $('.characters__character').eq(i).css({
                opacity: 1,
                transform: 'rotateY(0) scale(1)',
            });
            i++;
        }, 200 * (i + 1))
    })

    // Nice Scroll Plugin
    $("html").niceScroll({
        cursorcolor: '#F2002F',
        cursorwidth: '10px',
        cursorborder: 'none',
        cursorborderradius: '2px',
        scrollspeed: '80'
    });
    $(".notification").niceScroll({
        cursorcolor: '#31C4FF',
        cursorwidth: '1px',
        cursorborder: 'none',
        cursorborderradius: '2px',
        scrollspeed: '80'
    });

});

// Vanilla
window.onload = function() {
    document.getElementById('loading').style.opacity = 0;
    document.getElementById('loading').style.visibility = 'hidden';

    var insertedQuestion = document.getElementById('inserted-question'),
    addQuestion = document.querySelector('.add-question');

    // Add Questions
    var i = 5;
    addQuestion.addEventListener('click', function() {
        var html = '<div class="col-sm-6"><!-- Question --><div class="form-group"><label for="exampleInputEmail1">Question '+i+'</label><input type="text" class="form-control" id="exampleInputEmail'+i+'" aria-describedby="emailHelp" placeholder="Enter question '+i+'"></div><!-- Question --><!-- Answers --><div class="form-group"><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter answer 1"></div><div class="form-group"><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter answer 2"></div><div class="form-group"><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter answer 3"></div><!-- Answers --></div>';
        insertedQuestion.insertAdjacentHTML('afterbegin', html);
        i++;
    });

}