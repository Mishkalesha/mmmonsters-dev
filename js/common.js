$(document).ready(function () {
  //---Menu
  var options = {
    offset: 1500
  }
  var header = new Headhesive('.header__navigation');
  //---Smooth scroll
  function getRelatedContent(el) {
    return $($(el).attr('href'));
  }
  var ofset_top = 30;
  $('nav ul li a').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: getRelatedContent(this).offset().top - ofset_top
    })
  });
  //END Smooth scroll
  $('.header__main-info__container').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },

    }
  })


  $('.testimonials-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    margin: 10,
    nav: false,
    dots: true,
    checkVisible: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },

    }
  })
  //slogan block
  if ($(window).width() < 768) {

    $("button.delete-button").remove()
    $('.slogan__block').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3500,
      margin: 10,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },

      }
    });

    $('.blog__container-cards').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5500,
      margin: 40,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 2
        },

      }
    });

    $('.team__container-info').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      margin: 40,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 1
        },

      }
    });

    $('.main-container__blog').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 50,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 2
        },

      }
    });

    $('.container-progress__bar').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5200,
      margin: 10,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 2
        },

      }
    });

    $('.main-container__info-block').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout: 5200,
      margin: 10,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        600: {
          items: 1
        },

      }
    });

    $('.container-partners__img').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5200,
      margin: 10,
      nav: false,
      center: true,
      dots: true,
      checkVisible: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 3
        },
        600: {
          items: 5
        },

      }
    });
  }
  //--end slogan block

  //filter-portfolio

  // quick search regex
  var qsRegex;
  var filterSelector = "*";

  // init Isotope
  var isoGrid = document.querySelector(".grid-items");
  if (isoGrid) {
    var iso = new Isotope(isoGrid, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
      masonry: {

        columnWidth: 40,
        isFitWidth: true
      },
      filter: function (itemElem) {
        var search = qsRegex ? itemElem.textContent.match(qsRegex) : true;
        var filterRes =
          filterSelector != "*" ?
          itemElem.dataset.cat.includes(filterSelector) :
          true;

        return search && filterRes;
      }
    });
  }

  // use value of search field to filter
  var quicksearch = document.querySelector(".quicksearch");
  if (quicksearch) {
    quicksearch.addEventListener(
      "keyup",
      debounce(function () {
        qsRegex = new RegExp(quicksearch.value, "gi");
        iso.arrange();
      }, 300)
    );
  }

  // bind filter button click
  var filtersElem = document.querySelector(".filters");
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "button")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      // filterSelector = filterValue == '*' ? filterValue : '[data-cat='+filterValue+']';
      filterSelector = filterValue;

      iso.arrange();
    });
  }

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll(".filters");
  for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
  }

  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, "button")) {
        return;
      }
      buttonGroup.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
    });
  }

  function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;

      function delayed() {
        fn.apply(_this, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  }

  // END isotope

  //progress bar animate
  var flag = false;

  $(window)
    .scroll(function () {
      if (flag == true) {
        return;
      }
      var progressSection = $('.properties__container');
      if (
        $(window).scrollTop() >
        $(progressSection).offset().top - $(window).height() * 0.75 &&
        $(window).scrollTop() <
        $(progressSection).offset().top + $(progressSection).height() - $(window).height() * 0.25
      ) {
        $("svg.radial-progress").each(function (index, value) {
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom


          // Get percentage of progress
          percent = $(value).data("percentage");
          var text = value.querySelector("text");

          function animateValue(elem, start, end, duration) {

            var range = end - start;
            var current = start;
            var increment = end > start ? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            var timer = setInterval(function () {

              current += increment;
              elem.textContent = current + "%";
              if (current == end) {
                clearInterval(timer);
              }
            }, stepTime);
          }

          radius = $(this)
            .find($("circle.complete"))
            .attr("r");

          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({
              "stroke-dashoffset": strokeDashOffset
            }, 2250);
          animateValue(text, 0, percent, 2000);
          flag = true;


        })
      };
    })
    .trigger("scroll");

  //END progress bar animate

  //accordion
  $(".toggle_down", this).click(function () {
    var def = $('.toggle_down_btn', this).html();
    if (def == '-') {
      $('.toggle_down_btn', this).html("+");
      $('.toggle_down_btn', this).css("background-color", "");
    } else {
      $('.toggle_down_btn', this).html("-");
      $('.toggle_down_btn', this).css("background-color", "#036b7e");
    }
    $(this).next('.content_toggle_down').slideToggle('400');
  });
  //END accordion
  $('.btn-grid ').click(function () {
    var show_btn = $(".btn-grid ").html();
    $('.grid-items').toggleClass('grid-item-full');
    if (show_btn == 'show more') {
      $(".btn-grid ").html("show less");
      setTimeout(function () {
        $('.grid-items').addClass('overflow');
      }, 600);
    } else {
      $(".btn-grid ").html("show more");
      $('.grid-items').removeClass('overflow');

    }
  });

  //gamburger menu

  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
  });

  //END gambueger menu---

  //owl carousel 





});