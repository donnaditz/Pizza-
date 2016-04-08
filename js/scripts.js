function Pizza(size, topping){
  this.size = size
  this.topping = topping
};
Pizza.prototype.cost = function(){
  var total = 10

  if (this.size === "10-inch" && this.topping === "olives"){
    total +=2;
  }
  else if (this.size === "10-inch" && this.topping === "mushrooms"){
    total +=3;
  }
  else if (this.size === "12-inch" && this.topping === "olives"){
    total +=3;
  }
  else if (this.size === "12-inch" && this.topping === "mushrooms"){
    total +=4;
  };
  return total;
  };

$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    event.preventDefault();

  var size =$("#new-size").val();
  var topping =$("#new-topping").val();
console.log."#new-size"
  var Pizza = new Pizza(size,topping)


  $("ul#newprice").append("<l1>" + "$" + newPizza.cost + "</l1>")
  });
});
