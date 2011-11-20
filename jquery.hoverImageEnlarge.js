/*
 * HoverImageEnlarge.js 1.1
 * Written by Jack O'Connor http://jackocnr.com
 * Copyright 2011, Bit Circus http://bitcircus.co.uk
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 */

(function($) {
	$.fn.hoverImageEnlarge = function() {
		
		
		// check if browser is android/apple etc
		var isMobile = ((navigator.userAgent.match(/iPhone/i))
				|| (navigator.userAgent.match(/iPod/i))
				|| (navigator.userAgent.match(/iPad/i))
				|| (navigator.userAgent.match(/Android/i)));
		
		var imgBoxes = $(this).parent();
		
		// first save the original CSS values for use later on
		imgBoxes.each(function() {
			// box width/height values
			var boxWidth = $(this).css("width");
			var boxHeight = $(this).css("height");
			$(this).data("originalWidth", boxWidth);
			$(this).data("originalHeight", boxHeight);
			// img top/left values
			var profilePic = $(this).children("img");
			var imgTop = profilePic.css("top");
			var imgLeft = profilePic.css("left");
			profilePic.data("originalTop", imgTop);
			profilePic.data("originalLeft", imgLeft);
			//console.log("storing box width="+boxWidth+", height="+boxHeight+", img top="+imgTop+", left="+imgLeft);
		});
		
		// enlarge the given image
		function enlargeImage(i) {
			var profilePic = i.children("img");
			// grow the viewer box to the full image size
			var imgWidth = profilePic.width();
			var imgHeight = profilePic.height();
			//console.log("width="+imgWidth+", height="+imgHeight);
			i.addClass("enlarged").stop().animate({width: imgWidth, height: imgHeight});
			// remove negative offsets
			profilePic.stop().animate({top: 0, left: 0});
		}
		
		// shrink the given image
		function shrinkImage(i) {
			// don't do anything if not already enlarged
			if (!i.hasClass("enlarged")) return;
			var profilePic = i.children("img");
			// grab original box styles
			var originalWidth = i.data("originalWidth");
			var originalHeight = i.data("originalHeight");
			i.stop().animate({width: originalWidth, height: originalHeight}, function() {
				i.removeClass("enlarged");
			});
			// grab original img styles
			var originalTop = profilePic.data("originalTop");
			var originalLeft = profilePic.data("originalLeft");
			profilePic.stop().animate({top: originalTop, left: originalLeft});
		}
		
		// set different event handlers depending on browser
		if (isMobile) {
			// set click event
			imgBoxes.click(function() {
				if ($(this).hasClass("enlarged")) shrinkImage($(this));
				else {
					// shrink others
					$(".enlarged").each(function() {
						shrinkImage($(this));
					});
					enlargeImage($(this));
				}
			});
		}
		else {
			// set hover events
			imgBoxes.hover(function() {
				if (!$(this).hasClass("enlarged")) enlargeImage($(this));
			},
			function() {
				if ($(this).hasClass("enlarged")) shrinkImage($(this));
			});
		}
		
		
		
	};
})(jQuery);