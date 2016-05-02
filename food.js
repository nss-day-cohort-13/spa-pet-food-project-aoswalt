var Food = (function(food) {
  //TODO(adam): show info on page
  var dogFood;
  var catFood;

  var dogXhr = new XMLHttpRequest();
  dogXhr.addEventListener("load", function() {
    dogFood = JSON.parse(this.responseText);
    console.log("dog", dogFood);
  });
  dogXhr.open("GET", "dog-food.json");
  dogXhr.send();

  var catXhr = new XMLHttpRequest();
  catXhr.addEventListener("load", function() {
    catFood = JSON.parse(this.responseText);
    console.log("cat", catFood);
  });
  catXhr.open("GET", "cat-food.json");
  catXhr.send();

  return food;
}(Food || {}));
