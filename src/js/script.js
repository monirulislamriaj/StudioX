$(document).ready(function () {
  "use strict";
  // Navbar Dropdown on hover
  // $('ul.navbar-nav li.dropdown').hover(function() {
  //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  //   }, function() {
  //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  // });

  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //  AOS Initialize
  AOS.init();

  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#navigationBar").addClass("sticky-nav");
    } else {
      $("#navigationBar").removeClass("sticky-nav");
    }
  });

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
 //Copyright Date
  document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();


  // work Item Match Height
  $(".work-item").matchHeight({
    byRow: 0,
  });
  // counter-up-content Item Match Height
  $(".counter-up-content").matchHeight({
    byRow: 0,
  });

  // if (window.innerWidth > 991) {
  //   $(".counter-up-content").matchHeight({
  //     byRow: 0,
  //   });

  // teams-member Item Match Height
  $(".teams-member").matchHeight({
    byRow: 0,
  });
  
  // services Item Match Height
  $(".services-item").matchHeight({
    byRow: 0,
  });
 
  $(".card-items").matchHeight({
    byRow: 0,
  });
  // case-study-item Match Height
  $(".case-study-items").matchHeight({
    byRow: 0,
  });
  // testimonials-slider
  $(".testimonials-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:
      `<button type="button" class="slick-prev"><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 16L5 16" stroke="#494C56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 25L5 16L14 7" stroke="#494C56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>
        <svg width="100%" height="100%" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" stroke="#74767C"/>
        </svg>
      </button>`,
    nextArrow:
      `<button type="button" class="slick-next">
      <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 16H27" stroke="#494C56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 7L27 16L18 25" stroke="#494C56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </span>
        <svg width="100%" height="100%" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="26.5" stroke="#74767C"/>
        </svg>
      </button>`,
    // centerMode: true,
    //centerPadding: "80px",
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
         // centerMode: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          infinite: false,
        },
      },
    ],
  });

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });


 // Magnific Popup
 $(".popup-vimeo").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

  // counter-up
  $(".counter").counterUp({});

  $(document).ready(function () {
   
    // Scroll spy
    $('body').scrollspy({
        target: "#scrol-nav",
        offset: 70
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#scrol-nav");
        if ($(this).scrollTop() >= 100) {
            navbar.addClass("bg-light").removeClass("bg-transparent");
        } else if ($(this).scrollTop() < 100) {
            navbar.removeClass("bg-light").addClass("bg-transparent");
        }
    }
});
   //****************************
  // Isotope Load more button
  //****************************
  // init Isotope
  var initial_items = 6;
  var next_items = 2;
  var $grid = $('#grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'masonry',
      stamp: '.element-item--static'
  });


  // bind filter button click
  $('.button-group-home').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      $grid.isotope({filter: filterValue});
      updateFilterCounts();
  });
  function updateFilterCounts() {
      // get filtered item elements
      var itemElems = $grid.isotope('getFilteredItemElements');
      var count_items = $(itemElems).length;
    
      if (count_items > initial_items) {
          $('#showMore').show(1000, 'linear');
      }
      else {
          $('#showMore').hide(1000, 'linear');
      }
      if ($('.element-item').hasClass('visible_item')) {
          $('.element-item').removeClass('visible_item');
      }
      var index = 0;

      $(itemElems).each(function () {
          if (index >= initial_items) {
              $(this).addClass('visible_item');
          }
          index++;
      });
      $grid.isotope('layout');
  }
  // change is-checked class on buttons
  $('.button-group-home').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
      });
  });

  function showNextItems(pagination) {
      var itemsMax = $('.visible_item').length;
      var itemsCount = 0;
      $('.visible_item').each(function () {
          if (itemsCount < pagination) { $(this).removeClass('visible_item'); itemsCount++; } }); if (itemsCount >= itemsMax) {
          $('#showMore').hide(1000, 'linear');
      }
      $grid.isotope('layout');
  }
  // function that hides items when page is loaded
  function hideItems(pagination) {
      var itemsMax = $('.element-item').length;
      var itemsCount = 0;
      $('.element-item').each(function () {
          if (itemsCount >= pagination) {
              $(this).addClass('visible_item');
          }
          itemsCount++;
      });
      if (itemsCount < itemsMax || initial_items >= itemsMax) {
          $('#showMore').hide(1000, 'linear');
      }
      $grid.isotope('layout');
  }
  $('#showMore').on('click', function (e) {
      e.preventDefault();
      showNextItems(next_items);
  });
  hideItems(initial_items);

  //  //File upload 
  //  const actualBtn = document.getElementById('file-input');
  //  const fileChosen = document.getElementById('file-chosen');
  //  actualBtn.addEventListener('change', function(){
  //    fileChosen.textContent = this.files[0].name
  //  })
});

