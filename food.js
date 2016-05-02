'use strict';

var Food = (function(food) {
  var targetElement = document.getElementById("food-table-body");

  var dogXhr = new XMLHttpRequest();
  dogXhr.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    insertFood(targetElement, data);
  });
  dogXhr.open("GET", "dog-food.json");
  dogXhr.send();
  var catXhr = new XMLHttpRequest();
  catXhr.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    insertFood(targetElement, data);
  });
  catXhr.open("GET", "cat-food.json");
  catXhr.send();

  function insertFood(target, foodData) {
    var brandList = foodData[Object.keys(foodData)[0]];
    var html = "";

    brandList.forEach(function(brand) {
      html += `<tr><td>${brand.name}</td>`;

      html += `<td>${brand.hasOwnProperty("breeds") ? brand.breeds.join("<br>") : ""}</td>`;

      let priceArray = [];
      brand.types.forEach(function(type) {
        type.volumes.forEach(function(vol) {
          priceArray.push(`<td>${type.type}</td><td>${vol.name}</td><td>$${vol.price}</td>`);
        });
      });
      html += `
        <td>
          <table class="price-table">
            <tr>${priceArray.join("</tr></tr>")}</tr>
          </table>
        </td>`;

      html += "</tr>";
    });

    target.innerHTML += html;
  }

  return food;
}(Food || {}));
