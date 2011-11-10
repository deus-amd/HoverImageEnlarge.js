/*
 * HoverImageEnlarge.js 1.0
 * Written by Jack O'Connor
 * Copyright 2011, Bit Circus http://bitcircus.co.uk
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 */

(function($) {
	$.fn.hoverImageEnlarge = function() {
		
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
		// set hover events
		imgBoxes.hover(function() {
			// don't do anything if already enlarged
			if ($(this).hasClass("enlarged")) return;
			var profilePic = $(this).children("img");
			// grow the viewer box to the full image size
			var imgWidth = profilePic.width();
			var imgHeight = profilePic.height();
			//console.log("width="+imgWidth+", height="+imgHeight);
			$(this).addClass("enlarged").stop().animate({width: imgWidth, height: imgHeight});
			// remove negative offsets
			profilePic.stop().animate({top: 0, left: 0});
		},
		function() {
			// don't do anything if not already enlarged
			if (!$(this).hasClass("enlarged")) return;
			var profilePic = $(this).children("img");
			// grab original box styles
			var originalWidth = $(this).data("originalWidth");
			var originalHeight = $(this).data("originalHeight");
			$(this).stop().animate({width: originalWidth, height: originalHeight}, function() {
				$(this).removeClass("enlarged");
			});
			// grab original img styles
			var originalTop = profilePic.data("originalTop");
			var originalLeft = profilePic.data("originalLeft");
			profilePic.stop().animate({top: originalTop, left: originalLeft});
		});
		
		
		
	};
})(jQuery);