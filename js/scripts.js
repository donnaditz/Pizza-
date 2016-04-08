function Pizza(size, topping){
  this.size = size
  this.topping = topping
};
Pizza.prototype.cost = function() {
  var total = 0
   if (this.size < 20) {
      total = 18;
    }
    else {
    total = 20;
    };

  if (this.size === "20" && this.topping === "Olives") {
    total += 2;
  }
  else if (this.size === "20" && this.topping === "Mushrooms") {
    total += 3;
  }
  else if (this.size === "22" && this.topping === "Olives") {
    total += 4;
  }
  else if (this.size === "22" && this.topping === "Mushrooms") {
    total += 5;
  };
   return total;
  };

$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    event.preventDefault();

  var size =$("#new-size").val();
  var topping =$("#new-topping").val();

  var newPizza = new Pizza(size,topping);
  var cost = newPizza.cost();



  $("ul#new-price").append("<l1>" + "$" + newPizza.cost() + "</l1>");

  $("ul#new-pizza").append("<l1>" + " " + newPizza.topping + "</l1>");
  });

});
