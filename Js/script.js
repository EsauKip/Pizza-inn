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
$(document).ready(function() {
            // shows information to complete order
            $('.btn').click(function() {
                $('.order').show();
            }); // hides the information
            $('#cancel').click(function() {
                $("form")[0].reset();
                $('.order').hide();
            });


            $('form#order').last().submit(function(event) {

                        event.preventDefault();

                        // collects values of the order
                        let size = parseInt($('input:radio[name=size]:checked').val());
                        let crust = parseInt($('input:radio[name=crust]:checked').val());
                        let topping = [];
                        $.each($('input:checkbox[name=topping]:checked'), function() {
                            topping.push(parseInt($(this).val()))
                        });
                        let totalToppings = 0;
                        for (let i = 0; i < topping.length; i++) {
                            totalToppings += topping[i];
                        }