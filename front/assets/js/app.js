function closeNotification(el) {
    console.log('oi')
    $(el).parent('.notf').remove();
}

$('buttom.close').on('click', function() {
    console.log('oi')
    $(this).parent('.notf').remove();
})
$('.celefone-mask').mask('(00) 0.0000-0000')

$('.exercicios-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    infinite: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000
})