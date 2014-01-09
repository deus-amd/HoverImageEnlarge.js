# HoverImageEnlarge.js
A jQuery plugin for a nice enlarge effect when hovering images. For an example, see http://bitcircus.co.uk/#!/about

## How it works
Start with a positioned div which has a fixed width and height (set to the size of the thumbnail you want to display), and overflow:hidden. Inside that div, put your img tag for your larger image, set it to position:absolute and give the top and left styles a negative value so you get the right thumbnail showing through. Then add these scripts:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
   	<script src="jquery.hoverImageEnlarge-1.0.js"></script>
   	<script>
      $(".hover-pics").hoverImageEnlarge();
    </script>

Hovering those images should now expand them to their full size.

## Setting the direction of the expansion
You can set the direction the image will expand using just CSS. It all depends on the orientation of the parent div. If you set it to have position:absolute and then position it in the top left of it's container (top:0;left:0;), it will grow out right and down. If you set it to sit in the bottom right (bottom:0;right:0), it will grow up and to the left.

## Caveats
* The parent div must have position (relative/absolute)
* The parent must contain only one img element

