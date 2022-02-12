const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2.6,
      spaceBetween: 10,
    },
    // 1024px以上の場合
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 2.6,
      spaceBetween: 20,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
});


$(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {

    $(".openbtn").click(function () {
      if ($(this).hasClass("active")) {  // ナビを閉じるときの処理
        $("html").removeClass("is-fixed");  // 背景固定解除！
      } else {                              // ナビを開くときの処理
        $("html").addClass("is-fixed");     // 背景固定！
      }
      $(this).toggleClass('active');
      $(".header-nav-sp-container").toggleClass('panelactive');
      $(".header-search-sp").removeClass("active-search");
      $(".header-search-wrap").removeClass("panelactive-search");
    });

    $(".header-search-sp").click(function () {
      if ($(this).hasClass("active-search")) {  // ナビを閉じるときの処理
        $("html").removeClass("is-fixed");  // 背景固定解除！
      } else {                              // ナビを開くときの処理
        $("html").addClass("is-fixed");     // 背景固定！
      }
      $(this).toggleClass("active-search");
      $(".header-search-wrap").toggleClass("panelactive-search");
      $(".openbtn").removeClass("active");
      $(".header-nav-sp-container").removeClass("panelactive");
    });
  } else if (window.matchMedia('(max-width:1023px)').matches) {
    $(".openbtn").click(function () {
      if ($(this).hasClass("active")) {  // ナビを閉じるときの処理
        $("html").removeClass("is-fixed");  // 背景固定解除！
      } else {                              // ナビを開くときの処理
        $("html").addClass("is-fixed");     // 背景固定！
      }
      $(this).toggleClass("active");
      $(".header-nav-sp-container").toggleClass("panelactive");
    });
    $(".header-search-sp").click(function () {
      if ($(this).not("active")) {                              // ナビを開くときの処理
        $("html").addClass("is-fixed");     // 背景固定！
      }
      $(this).addClass("active-search");
      $(".header-search-wrap").addClass("panelactive-search");
      $(".openbtn").removeClass("active");
      $(".header-nav-sp-container").removeClass("panelactive");
    });
    $(".search-close-btn").click(function() {
      if ($(".header-search-sp").hasClass("active-search")) {  // ナビを閉じるときの処理
        $("html").removeClass("is-fixed");  // 背景固定解除！
      } 
      // $(this).removeClass("active-search");
      $(".header-search-wrap").removeClass("panelactive-search");
    });
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    $(".header-search").click(function () {
      if ($(".header-search-wrap").not("panelactive-search")) {                              // ナビを開くときの処理
        $("html").addClass("is-fixed");     // 背景固定！
      }
      $(".header-search-wrap").addClass("panelactive-search");
    });
    $(".search-close-btn").click(function() {
      if ($(".header-search-wrap").hasClass("panelactive-search")) {  // ナビを閉じるときの処理
        $("html").removeClass("is-fixed");  // 背景固定解除！
      }
      $(".header-search-wrap").removeClass("panelactive-search");
    });
  }
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).width() * 0.766) {
      $('.sidebar').addClass('fixed');
    } else {
      $('.sidebar').removeClass('fixed');
    }
    
  });

  $(function(){
    if (window.matchMedia('(max-width: 1024px)').matches) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).width() * 0.02856) {
          $('.header').addClass('fixed-header');
        } else {
          $('.header').removeClass('fixed-header');
        }
      });
    } else if (window.matchMedia('(max-width:767px)').matches) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).width() * 0.048865) {
          $('.header').addClass('fixed-header');

        } else {
          $('.header').removeClass('fixed-header');
        }
      });
  }});  
});

$(function(){
	if (window.matchMedia('(min-width: 1421px)').matches) {
		$(window).scroll(function () {
      if ($(this).scrollTop() > 1087.72) {
        $('.sidebar').addClass('fixed');
      } else {
        $('.sidebar').removeClass('fixed');
      }
    });
}});


$(function () {  
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).width() * 16.5989) {
        $('.button-fixed').removeClass('fixed-');
      } else {
        $('.button-fixed').addClass('fixed-');
      } 
    });
  }
});


