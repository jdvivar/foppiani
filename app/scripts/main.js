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

})
