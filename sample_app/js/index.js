//console.log(document.body.clientHeight);
$('.bg-2').css('height',$(window).height());
$('.bg-1').css('height',$(window).height());
$(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    $('.bg-2').css('top','-'+((scrolled*.05))+'px');
    $('.bg-1').css('top','-'+((scrolled*.25))+'px');
});