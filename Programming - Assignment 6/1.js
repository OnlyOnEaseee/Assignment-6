// Modify example 4-5
// so that you add expiry date to the product object
// also define a method  that has checks that compare
// the expiry date of the product with the current date
// then informs whether the product has expired or not.

// HINT: Example 4-6 shows how to define Javascript Date objects

const product = {
    name: "Milk",
    price: 1.20,
    amount: 240,
    
    expiryDate: new Date(2022, 10, 7, 23, 59, 60),

    expiryCheck: function() {
        const currentDate = new Date();

        const difference = parseInt(this.expiryDate.getTime() - currentDate.getTime());

        if(difference <= 0) {
            return 'Expired';
        } else {
            return 'Fresh';
        };
    },
};

alert(`${product.name} is ${product.expiryCheck()}`);