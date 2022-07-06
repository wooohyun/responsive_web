$(function () {
    $('.hamburger').on('click', function () {
        // html에 is-active 가 이미 붙어있는경우 반대로 작동함 적용된상태에서 한번더 작동해서 그런듯
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on')
    })
})