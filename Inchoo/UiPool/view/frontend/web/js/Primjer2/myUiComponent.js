define(['uiComponent'], function (Component) {
    'use strict';
    return Component.extend({
        defaults: {
            label: "Skladište Pucko",
            items: [
                { name: "Spužva Bob", qty: 5, price: 2 },
                { name: "Jagodica Bobica", qty: 2, price: 5 },
            ],
            fee: 0.25,
            tracks: {
                fee: true,
                items: true
            }
        },
        rowPrice: function (item) {
            return item.qty * item.price;
        },
        totalPrice: function () {
            var self = this;
            var sum = this.items.map(this.rowPrice).reduce(function (acc, total) {
                return total + (acc + (acc * self.fee));
            });
            return sum;
        }
    });
});