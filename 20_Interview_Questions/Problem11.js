// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(productName, category) {
    const products = [
        { name: "iPhone", category: "electronics", price: "50000" },
        { name: "T-Shirt", category: "clothing", price: "700" },
        { name: "Laptop", category: "electronics", price: "90000" },
        { name: "Shoes", category: "clothing", price: "4999" },
        { name: "Green Tea", category: "grocery", price: "225" }
    ];

    for (const product of products) {
        if (product.name === productName && product.category === category) {
            return `Found...Product name : ${product.name} \n Product Price : ${product.price} `
        }
    }
    return `Product Not Available`
}

console.log(filterProducts("Green Tea", "grocery"))