"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: Jess Stubbs
   Date:   11/12/2026

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
runClock();
setInterval(runClock, 1000);

function runClock() {
   var thisDay = new Date();
   var thisDate = thisDay.toLocaleDateString();
   var thisDayNum = thisDay.getDay();
   var thisWeekday = getWeekday(thisDayNum);
   var thisTime = thisDay.toLocaleTimeString();

   /* Write the date, weekday, and time into the element */
   document.getElementById("date").textContent = thisDate;
   document.getElementById("wday").textContent = thisWeekday;
   document.getElementById("time").textContent = thisTime;
   
}

function getWeekday(dayNum) {
      var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return wDays[dayNum];
}