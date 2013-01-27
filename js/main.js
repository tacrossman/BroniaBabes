$(function() {
    $(".rslides").responsiveSlides({
		  auto: false,             // Boolean: Animate automatically, true or false
		  nav: true,             // Boolean: Show navigation, true or false
		  prevText: "back",   // String: Text for the "previous" button
		  nextText: "forward",       // String: Text for the "next" button
		  maxwidth: "1026",           // Integer: Max-width of the slideshow, in pixels
		  navContainer: ".gallery-nav",       // Selector: Where controls should be appended to, default is after the 'ul'
		  namespace: "rslides"
		});

    $('.contact').on('mouseenter mouseleave', function(){
		$(".original").toggle('slow');
		$('.email').toggle('fast', 'linear');
    });
});
