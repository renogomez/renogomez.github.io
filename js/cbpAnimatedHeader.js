/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			document.querySelector(".navbar-big").style.background = "#717c82";
			var links = document.querySelectorAll('a.page-scroll');
			links.forEach(element => {
			  element.style.color = "white";
			  
			});
		}
		else {

			classie.remove( header, 'navbar-shrink');
			document.querySelector(".navbar-big").style.background = document.querySelector('#fill').style.background;

			var links = document.querySelectorAll('a.page-scroll');
			links.forEach(element => {
			  element.style.color = document.querySelector('.seed-container').style.color;
			  
			});
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();