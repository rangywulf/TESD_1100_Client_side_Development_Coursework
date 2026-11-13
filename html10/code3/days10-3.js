"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 3

   Debug
   Author: Jess Stubbs
   Date:   11/13/2026


*/

// Create a date object holding today's date and time
var thisDay = new Date();

// get the day of the week
var wDay = thisDay.getDay();

// create image
var imgSrc = "";

// Pick the image file based on the day of the week
switch (wDay) {
   case 0:
      imgSrc = "sunday.png";
      break;
   case 1:
      imgSrc = "monday.png";
      break;
   case 2:
      imgSrc = "tuesday.png";
      break;
   case 3:
      imgSrc = "wednesday.png";
      break;
   case 4:
      imgSrc = "thursday.png";
      break;
   case 5:
      imgSrc = "friday.png";
      break;
   case 6:
      imgSrc = "saturday.png";
      break;
}

// Build the img tag using the file name from the switch
var htmlCode = "<img src='" + imgSrc + "' alt='' />";
document.getElementById("banner").innerHTML = htmlCode;