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
