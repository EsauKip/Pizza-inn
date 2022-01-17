// Business logic
function totalOrders(size, crust, topping, orders) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
    this.orders = orders;
}

totalOrders.prototype.totalCharges = function() {
    return (this.size + this.crust + this.toppings) * this.orders;
}

let totalCost = 0;

// user interface