// Owlcarousel
$(document).ready(function () {
  $(".owlCarousel1").owlCarousel({
    stagePadding: -90,
    loop: true,
    margin: 15,
    nav: true,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class=' fa-angle-left'></i>",
      "<i class=' fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owlCarousel2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa-angle-left'></i>",
      "<i class='fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });
});
