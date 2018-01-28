// (function scrollReveal() {
//     window.sr = ScrollReveal();
//
//     sr.reveal('.card-box', {
//         duration   : 600,
//         distance   : '20px',
//         easing     : 'ease-out',
//         origin     : 'bottom',
//         reset      : true,
//         scale      : 1,
//         viewFactor : 0,
//         afterReveal  : revealChildren
//     }, 150);
//
//     var revealChildren = sr.reveal('.card-button, .card-text', {
//         duration   : 500,
//         scale      : 1,
//         distance   : '20px',
//         origin     : 'bottom',
//         reset      : true,
//         easing     : 'ease-out',
//         viewFactor : 1
//     }, 75);
// })();
window.sr = ScrollReveal({ reset: true });
sr.reveal('.top-scroll', {easing: 'ease-out',scale: 1, origin: 'top', distance: '100px', duration: 1000 });
sr.reveal('.bottom-scroll', {easing: 'ease-out',scale: 1, origin: 'bottom', distance: '50px', duration: 1000 });
sr.reveal('.right-scroll', {origin: 'right', distance: '300px', duration: 2000});
sr.reveal('.left-scroll', {origin: 'left', distance: '300px', duration: 2000});

$('.clip-1 a').click(function (e) {
    e.preventDefault();

    $('html , body').animate({
        scrollTop:$('#' + $(this).data('scroll')).offset().top + 10
    },1000);
});

$('.back-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});