'use strict';

$(document).ready(() => {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: '<div class="container"><button type="button" class="slick-next"></button></div>',
        prevArrow: '<div class="container"><button type="button" class="slick-prev"></button></div>',
    });

    $('.menu_burger').on('click', () => {
        $('.menu_burger').toggleClass('menu_burger_active');
        $('nav').toggleClass('nav_active');
    });

    $('.list_categories-item').on('click', (e) =>{
        if (e.target.classList.contains('active_list')){
            $(e.target).removeClass('active_list').find('ul').slideToggle();
            return;
        }
        $('.list_categories-item').each((index, element) => {
            if (element.classList.contains('active_list')){
                $(element).removeClass('active_list').find('ul').slideToggle();
            }
        });
        $(e.target).addClass('active_list').find('ul').slideToggle();
    });

    $('.sublist_categories_item').on('click', (e) =>{
        e.stopPropagation();
        if (e.target.classList.contains('active_item')){
            return;
        }
        $('.sublist_categories_item').each((index, element) => {
            element.classList.remove('active_item');
            if (e.target == element){
                element.classList.add('active_item');
            }
        });
    });

    $('.feedback_form button').on('click', (e) => {
        e.preventDefault();
        $('#username, #tel, #email').each((index, element) =>{
            if (element.value == ''){
                $(element).addClass('error').attr('placeholder', 'Поле обязательно для заполения');
            } else {
                $(element).removeClass('error').attr('placeholder', '').val('');
            }
        });
    });

    $('.count').on('click', (e) => {
        if (e.target.classList.contains('count_active')){
            return;
        }
        $('.count').each((index, item) => {
            item.classList.remove('count_active');
        });
        $(e.target).addClass('count_active');
    });
});

