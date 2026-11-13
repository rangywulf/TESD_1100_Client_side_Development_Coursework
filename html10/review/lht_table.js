"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: Jess Stubbs
   Date:   11/13/2026

	
*/

// Create date
var thisDay = new Date("October 1, 2021");

// HTML code of the events table
var tableHTML = "<table id='eventTable'>" + "<caption>Upcoming Events</caption>" + "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// List events occuring within 14 days after the current date
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

// loop through the length of the eventDates array
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>" +
                     "<td>" + eventDay + " @ " + eventTime + "</td>" +
                     "<td>" + eventDescriptions[i] + "</td>" +
                     "<td>" + eventPrices[i] + "</td>" +
                  "</tr>";
   }
}

tableHTML += "</table>";

// Insert the value of tableHTML into the inner HTML of the page
document.getElementById("eventList").innerHTML = tableHTML;