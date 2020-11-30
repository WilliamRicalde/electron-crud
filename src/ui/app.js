const productForm = document.getElementById("product-form");
const {ipcRenderer} = require("electron");

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");

productForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    const Product = {
        name: productName.value, 
        price: productPrice.value,
        description: productDescription.value
    }

    ipcRenderer.send("newproduct", Product)
    productForm.reset()
    productName.focus()
    console.log("submit")
})