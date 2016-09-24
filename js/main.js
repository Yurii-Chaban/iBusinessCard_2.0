// for main menu
$(function () {
    $('.list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('list-menu-active');
        }
    });
});

/*---------------------*/
/*SETTINGS CLICK*/
/*---------------------*/
$("#settings").click(function() {
  $(this).find("span").toggleClass('active-setting');
  $("#sett").toggleClass("show");
});

// for slider in Home page
var swiper_main = new Swiper('.swiper-container-home-page', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});