"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Jess Stubbs
   Date:   11/13/2026
   
   Filename: tc_cart.js
	
*/

var ordTotal = 0;

// HTML code for the contents of the shopping cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Loop through the entries in the item array
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>" + "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   ordTotal += itemCost; 
}