//// 1. API

    // A. Fetch API

    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => {
        if(!response.ok) throw new Error('Error');
        return response.json();
    })
    .then(productos => console.log(productos[0]))
    .catch(error => console.log(error))

    // B. Fetch API with async/await

    async function getData(){
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const productos = await response.json();
            console.log(productos[0]);
        }catch(error){
            console.log(error);
        }
    }
    getData()

////

//// 3. Modules

    // -> Execute the following command in the terminal: npm init -y
    // -> In package.json modify the property "type" to "commonjs" or "module" depending on the type of module you want to use.

    // A. Default Import in CommonJS

    // const repostsInTwitter = require('./lib/twitter'); // -> Import (We can change the name of the function)
    // console.log(repostInTwitter("Compartir")); // -> Execution

    // B. Named Import in CommonJS

    // const { likes, coments, repost } = require('./lib/twitter'); // -> Import (We can't change the name of the function)
    // console.log(likes, coments, repost("Compartir")); // -> Execution

    // C. Default Import in ECMAScript Modules

    import getProducts from './lib/nike.js'; // -> Import (We can change the name of the function)
    getProducts("Air Max 270"); // -> Execution

    // D. Named Import in ECMAScript Modules

    import { calculateTotalPrice, getProductStock } from './lib/nike.js'; // -> Import (We can't change the name of the function)
    getProductStock("Nike Cortez"); // -> Execution
    calculateTotalPrice(110.99, 2, 3); // -> Execution

////