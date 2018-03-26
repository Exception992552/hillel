$(document).ready(function(){
new WOW().init();
var owl = $('.slider-get-started');
var owl2 = $('.slider-latest-works');
owl.owlCarousel({
    loop:true,
    nav:false,
    items:1,
    // autoplay:true
   	animateOut: 'fadeOut'
});
owl2.owlCarousel({
	loop:true,
    nav:false,
    margin:30,
    items:4,
    navText:false
 
})

$('.btn-next').click(function() {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
});


 // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  var round = 0;
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
    
      setAnimation ($elemsToanim, 'in');
  });

  
$('.btn-up-scroll').click(function() {
  $('body,html').animate({scrollTop:0},1200);
  });


 $("li.item-menu.item-mega-menu").hover(
  function () {
     $('div.drop-mega-menu').stop(true, true).slideDown('300');
  }, 
  function () {
     $('div.drop-mega-menu').stop(true,true).slideUp('300');
  }
);

});






  // owl.on('translated.owl.carousel', function(event) {
  //     if (event.item.index == (event.page.count - 1))  {
  //       if (round < 1) {
  //         round++
  //         console.log (round);
  //       } else {
  //         owl.trigger('stop.owl.autoplay');
  //         var owlData = owl.data('owl.carousel');
  //         owlData.settings.autoplay = false; //don't know if both are necessary
  //         owlData.options.autoplay = false;
  //         owl.trigger('refresh.owl.carousel');
  //       }
  //     }
  // });
// var owl2 = $('.carousel-latest-works.flex');
// owl2.owlCarousel({
//    items:4,
//    loop:true,
//    margin:40,
//    nav:true,
//    navContainer:'.block-nav.flex',
//    navText:false				  
// });

// $('article').readmore({
// 	speed: 75,
//   lessLink: '<a href="#">Read less</a>'
// });











