//import { CardComponent } from "../components/CardComponent.js";
//import { products } from "../data/products.js";

import { NewCardComponent } from "../components/NewCardComponent.js";
let renderArea = document.querySelector("#renderArea");

//RENDER PRODUCTS
// products.map((product) => (renderArea.innerHTML += CardComponent(product)));


const url = "http://127.0.0.1:5500/data/API_Product.json";
fetch(url).then((res) => (res.json())).then((data) => {
    let products = data;
    products.map((product) => renderArea.innerHTML += NewCardComponent(product))
});