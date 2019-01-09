function num_elements() {
  var num_elements = $('.pnp-timeline').length;
  return( num_elements );
}

num_elements();

function calc_height( input ) {
  var el = '#timeline_' + input
  $('section.timeline').outerHeight( $(el).outerHeight( true ) );
}

function move( input ) {
  var no = num_elements();
  var calculation = 100 / no * (input - 1);
  console.log(calculation)
  $('.pnp-timeline__frame').css('transform', 'translateX( -' + calculation + '% )');
}


function setActive( input ) {
  var el = '.pnp-timeline__btn p[data-trigger=' + input + ']'
  $('.pnp-timeline__btn p').removeClass('active');
  $(el).addClass('active')
}

$('.pnp-timeline__btn p').click( function() {
  var no_el = $(this).data( 'trigger' );
  move( no_el );
  calc_height( no_el );
  setActive( no_el );
});
