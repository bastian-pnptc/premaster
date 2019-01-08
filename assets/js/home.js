---
sitemap:
  exclude: true
---

// slabText
{% include js/jquery.slabtext.min.js %}

$( document ).ready(function() {
  setTimeout( function(){
    $("h1, section.break p").slabText({
        "viewportBreakpoint":180
    });
  }, 1000);
});
