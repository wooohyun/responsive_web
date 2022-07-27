$(function () {

    // .mbtn을 클릭했을때 .gnb의에 .on클래스를 토글로작동하게 .on을 뗐다가 붙였다가 
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    // 상단메뉴클릭했을때 클릭한 메뉴만 하단상세매뉴 나오게하는거
    $('.gnb>ul>li>a').on('click', function (event) {
        // 769사이즈 미만일때만 작동하도록
        if ($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    })

    // 사이즈가변할때 사라지게하는거
    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })
})