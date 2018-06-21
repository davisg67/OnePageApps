//Lightbox - When a user clicks an image a larger overlay of the //images will be displayed. Clcking the overlay again will hide it.

'use strict';

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay to document.
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function (event) {
    event.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening.
    
    var imageLocation = $(this).attr("href"); //Get the <a> href info.
    
    //Set the images src attribute to the selected <a> href.
    $image.attr("src", imageLocation);
  
    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    
    //Show the overlay.
    $overlay.show();
});

//When overlay is clicked
$overlay.click(function () {
    //Hide the overlay
    $overlay.hide();
});
