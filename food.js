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
  console.log("target", target);
  console.log("data", foodData);
}
