---
sitemap:
  exclude: true
---

// slabText
{% include js/jquery.slabtext.min.js %}

function calcSlab() {
  $("h1, section.break p").slabText({
      "viewportBreakpoint":180
  });
}

$( document ).ready(function() {
  calcSlab()

  setTimeout( function(){
    calcSlab()
  }, 1000);
});


// about section

function expand_about(el) {
  var init_height = 300;
  var inner = $(el).find('.about__inner .about__content');
  var actual_height = inner.outerHeight(true) + $(el).find('.read-more').outerHeight(true) + 10;

  if ( init_height <= actual_height ) {
    inner.css('height', init_height );
    $(el).addClass('overflow');
  }

  if ( ( $(el).hasClass('overflow') ) ) {
    $(el).find('.read-more').click( function() {
      if ( $(el).hasClass('active') ) {
        $(el).removeClass('active');
        inner.css('height', init_height );
      } else {
        $(el).addClass('active');
        inner.css('height', actual_height );
      }
    });
  }
}

$('.about__item').each( function() {
  expand_about(this);
  
})