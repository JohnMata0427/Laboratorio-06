// C. Default Export in ECMAScript Modules

const getNikeProduct = (productName) => {
    console.log(`Nike ${productName} is a great product`);
}

export default getNikeProduct; // -> Export

// D. Named Export in ECMAScript Modules

function calculateTotalPrice(productPrice, quantity, taxRate){
    const subtotal = productPrice * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    console.log(`The total price of your purchase is $${total}`);
}

function getProductStock(productName){
    const stockData = {
        "Nike Air Max 270": 10,
        "Nike Air Force 1": 15,
        "Nike Cortez": 5,
    };

    const stock = stockData[productName] || 0;

    console.log(`The stock of ${productName} is ${stock}`);
}

export { calculateTotalPrice, getProductStock }; // -> Export