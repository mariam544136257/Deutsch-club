// Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  
  /*scroll navbar*/
$("header a").on("click", function(e) {
  e.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000,
    function() {
      window.location.hash = hash;
    }
  );
});



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

