function closeNotification(el) {
    console.log('oi')
    $(el).parent('.notf').remove();
}

$('buttom.close').on('click', function() {
    console.log('oi')
    $(this).parent('.notf').remove();
})
$('.celefone-mask').mask('(00) 0.0000-0000')