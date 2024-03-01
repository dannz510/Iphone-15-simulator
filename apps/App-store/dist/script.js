$('.grid').click(() => {
  $('.content-modal').addClass('active');
  $('.wrapper').addClass('blur');
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$('.content-modal .icon').click(() => {
  $('.content-modal').removeClass('active');
  $('.wrapper').removeClass('blur');
});