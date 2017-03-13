document.addEventListener('DOMContentLoaded', function() {
  var menu = false;
  var mobile = undefined;

  $('.menu').click(function(){
    if (menu) {
      closeMenu();
    } else {
      openMenu();
    }
  })

  $('.section-link').click(function(){
    if (mobile) {
      closeMenu();
    }
  });

  function openMenu() {
    $('nav .section-link').css('display', 'block');
    menu = !menu;
  }

  function closeMenu() {
    $('nav .section-link').css('display', 'none');
    menu = !menu;
  }

  // responsive behaviour trigger
  var mql = window.matchMedia('(max-width: 768px)');
  mql.addListener(handleOrientationChange);

  // function which executes whenever a orientation change happens
  function handleOrientationChange(mql) {
    if (mql.matches) {
      mobile = true;
    } else {
      mobile = false;
    }
  };

  handleOrientationChange(mql);

  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // js-get
  $('.js-get').each( function() {
    var self = $(this);
    $.get($(this).data('url')).done(
      function(data) {
        self.append(new XMLSerializer().serializeToString(data));
      }
    );
  });

  // Gallery
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'http://placehold.it/350x150',
          w: 300,
          h: 150
      },
      {
          src: 'http://placehold.it/400x400',
          w: 400,
          h: 400
      }
  ];

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  // gallery.init();


  // Grid
  // $('.grid').masonry({
  //   itemSelector: '.grid-item',
  //   columnWidth: 200
  // });

})
