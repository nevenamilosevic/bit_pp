"use strict";

(function () {
    console.log("Hi");

    function Product(name, price, expDate) {
        if (!name || !price || !expDate) {
            throw new Error("Invalid data input");
        };
        this.name = name;
        this.price = price;
        this.expDate = new Date(expDate);
        this.getPrice = function(price) {
            var decNumber = price.toFixed(2);
            return decNumber;
        };
        this.getProductID = function() {
            var number = Math.floor(Math.random() * 100000);
                if (number < 10000) {
                    number += 10000;
                }
            return number;
        };

        this.getInfo = function() {
            var product = (this.name[0] + this.name[this.name.length-1]).toUpperCase() + this.getProductID();
            return (product + ", " + this.name + ", " + this.getPrice());
        };
    };

    function ShoppingBag() {
        this.productList = [];
        this.addProduct = function(product) {
            if(!(product instanceof Product)) {
                throw new Error("Invalid product entry");
            };
            var currentDate = new Date();
            if (product.expDate > currentDate) {
                this.productList.push(product);
            };
        };
        this.getAvgPrice = function() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var totalPrice = 0;
            this.productList.forEach(function(product) {
              totalPrice += product.price;
            });
            var avgPrice = totalPrice / this.productList.length;
            return avgPrice.toFixed(3);
        };
        this.getMostExp = function() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var mostExpensive = this.productList[0];
            this.productList.forEach(function(product) {
                if (product.price > mostExpensive.price) {
                    mostExpensive = product;
                };
            });
            return getMostExp.getInfo();
        };
        this.getTotalPrice = function() {
            if (this.productList.length === 0) {
                throw new Error("Product list is empty");
            };
            var totalPrice = 0;
            this.productList.forEach(function(product) {
                totalPrice += product.price;
            });
            return totalPrice.toFixed(2);
        };
    };

    function PaymentCard(balance, status, validDate) {
        this.date = new Date(validDate);
        this.balance = balance;
        this.status = status;
        var currentDate = new Date();
        if (this.date < currentDate) {
            throw new Error("Payment card expired");
        };
        if (this.status === "inactive") {
            throw new Error("Payment card inactive");
        };
        if(this.balance === 0) {
            throw new Error("Insufficient funds")
        };
        this.getBalance = function(balance) {
            var decBalance = balance.toFixed(2);
            return decBalance;
        };
    };

    function checkoutAndBuy(shoppingBag, paymentCard) {
        var totalPrice = 0;
        shoppingBag.productList.forEach(function(product) {
            totalPrice += product.price;
        });
        if (paymentCard.balance >= totalPrice) {
             return "Purchase successful!";
        } else {
            return((totalPrice - paymentCard.balance).toFixed(2) + " EUR missing to complete the purchase.");
        };
    };

    try {
        var banana = new Product("Banana", 187.5273, "01/02/2023");
        var chocolate = new Product("Chocolate", 296.596, "05/04/2023");
        

        var bag1 = new ShoppingBag();
        bag1.addProduct(banana);
        bag1.addProduct(chocolate);
        
        

        var master = new PaymentCard(3432.21313, "active", "12/12/2028");

        console.log(checkoutAndBuy(bag1, master));

    } catch(error) {
        console.log(error.message);
    };
})();