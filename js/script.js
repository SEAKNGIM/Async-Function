"use strict";

// Importing functions from modules
import { cardProduct } from "../components/cardComponent.js";
import { cardUser } from "../components/userComponent.js";
import { getData } from "../store/fetchApi.js";

// Selecting HTML elements
const renderCard = document.querySelector('#product');
const userCard = document.querySelector('#user');

// Fetching data for products and users
const product = await getData("products");
const user = await getData("users");

// Rendering cards for products
product.map((cardProducts) => {
    renderCard.innerHTML += cardProduct(cardProducts);
});

// Rendering cards for users
user.map((userProduct) => {
    userCard.innerHTML += cardUser(userProduct);
});