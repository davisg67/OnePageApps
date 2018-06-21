
//This script allows you to wrap span tags with a class of 
//spoiler around text that you do not want revealed without 
//user consent. 

// <span class="spoiler">Don't show this text unless you want to</span>

//When the user clicks the words "Spoiler Alert" the spoiler text is
//revealed inline with the rest of the existing text. The tags can be used
//in multiple places on a page and will only reveal the text that the user
//clicks at a time.


'use strict';

//Insert the 'revealMsg' span after every span with class 'spoiler'
$("<span class='warningTxt'>Spoiler Alert</span>").insertAfter(".spoiler");

//Add CSS to 'Reveal Spoiler' text.
$(".warningTxt").css({"color": "Red", "font-weight": "bold"});

//Hide the span around the spoiler text.
$(".spoiler").hide();


$(".warningTxt").click(function () {
    //Show the spoiler span previous to the clicked revealMsg span.
    $(this).prev().show();
    //Remove this revealMsg span.
	$(this).remove();
});