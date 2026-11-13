"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Jess Stubbs
   Date:   11/12/2026

*/
/* Run the clock now and every second after */
showClock();
setInterval(showClock, 1000);

/* Show the date and time */
function showClock() {
   /* Set the date and time */
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* Write the date and time into the page */
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + "</span>";

   /* Get the next 4th of July at 9pm */
   var j4Date = nextJuly4(thisDay);
   j4Date.setHours(21);

   /* Figure out the days, hours, minutes, and seconds left */
   var days = (j4Date - thisDay) / (1000*60*60*24);
   var hrs = (days - Math.floor(days)) * 24;
   var mins = (hrs - Math.floor(hrs)) * 60;
   var secs = (mins - Math.floor(mins)) * 60;

   /* Write the time left into the page */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

/* Get the date of the next 4th of July */
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
   
}