// @codekit-prepend "../bower_components/echojs/dist/echo.min.js";
// @codekit-prepend "../bower_components/jquery/dist/jquery.js";
// @codekit-prepend "../bower_components/masonry/dist/masonry.pkgd.min.js";
// @codekit-prepend "../bower_components/jquery.animaterect.js";
// @codekit-prepend "../bower_components/slick.js/slick/slick.min.js";
// @codekit-prepend "../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";


echo.init({
    offset: 100,
    throttle: 250,
    unload: false,
    callback: function (element, op) {
      // console.log(element, 'has been', op + 'ed');
      if(op === 'load') {
        element.classList.add('loaded');
      } else {
        element.classList.remove('loaded');
      }
    }
  });


$(function() {
	$("#filter a").on("click",function() {
		$("#grid-image .item[data-type]")
										.stop()
										.animate({'clip': 'rect(0px 300px 200px 0px)','opacity':'1'}, 1000);
		$("#filter li").removeClass("active");
		$(this).parent().addClass("active");
		var currentFilter = $(this).attr("data-type");
		$("#grid-image .item[data-type=" + currentFilter + "]")
																.stop()
																.animate({'clip': 'rect(20px 270px 180px 30px)','opacity':'0.2'}, 1000);
	});

	// slider item

	$('#grid-image .slider').slick({
	  infinite: true,
	  lazyLoad: 'ondemand',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  draggable: false,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	// popups

	$('.popup-image').magnificPopup({ 
	  type: 'image'
	});

	$('.popup-video').magnificPopup({
		type: 'iframe',
		iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; } 

		      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: '//player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: '//maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});

	//mansory

	var $container = $('#grid-image');
	$container.masonry({
	  columnWidth: 300,
	  itemSelector: '.item',
	  gutter: 20
	});
});