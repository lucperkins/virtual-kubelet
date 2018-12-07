function scrollFadeInOut(threshold, element) {
  //element.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > threshold) {
      element.fadeIn();
    } else {
      element.fadeOut();
    }
  });
}

function navbarScrollToggle() {
  const navbar = $('.is-home-page .navbar');
  const heroHeight = $('.hero').height();

  scrollFadeInOut(heroHeight, navbar);
}

$(function() {
  navbarScrollToggle();
});
