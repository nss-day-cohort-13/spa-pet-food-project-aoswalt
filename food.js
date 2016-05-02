/* jshint devel:true */

'use strict';

var Food = (function(food) {
  var targetElement = document.getElementById("food-table-body");
  var dogFood;
  var catFood;

  var dogXhr = new XMLHttpRequest();
  dogXhr.addEventListener("load", function() {
    dogFood = JSON.parse(this.responseText);
    insertFood(targetElement, dogFood);
  });
  dogXhr.open("GET", "dog-food.json");
  dogXhr.send();

  var catXhr = new XMLHttpRequest();
  catXhr.addEventListener("load", function() {
    catFood = JSON.parse(this.responseText);
    insertFood(targetElement, catFood);
  });
  catXhr.open("GET", "cat-food.json");
  catXhr.send();

  return food;
}(Food || {}));

function insertFood(target, foodData) {
  console.log("foodData", foodData);
  var brandList = foodData[Object.keys(foodData)[0]];
  var html = "";

  brandList.forEach(function(brand) {
    html += `<tr><td>${brand.name}</td>`;

    let priceArray = [];
    brand.types.forEach(function(type) {
      type.volumes.forEach(function(vol) {
        priceArray.push(`${type.type}, ${vol.name}, ${vol.price}`);
      });
    });
    html += `<td>${priceArray.join(" : ")}</td>`;

    html += "</tr>";
  });

  target.innerHTML += html;
}
