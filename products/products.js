require('dotenv').config();

const axios = require('axios');

// getting the base credentials from .env file
const BASE_URL = process.env.BASE_URL;
const APP_ID = process.env.APP_ID;

async function getAllProducts() {
    try {
        const { data } = await axios.get(`${BASE_URL}?limit=5`, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to get all the products');
    }
}

async function getAllProductCategories() {
    try {
        const { data } = await axios.get(`${BASE_URL}/categories`, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to get all the product categories');
    }
}

async function getProductById(productID) {
    try {
        const { data } = await axios.get(`${BASE_URL}/${productID}`, { headers: { 'app-id': APP_ID } })
        return data;

    } catch (error) {
        console.log(error);
        throw new Error(`Failed to get the product with id ${productID}`);
    }
}

async function createProduct(product) {
    try {
        const { data } = await axios.post(`${BASE_URL}/add`, product, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create product');
    }
}


async function searchProduct(searchedValue) {
    try {
        const { data } = await axios.get(`${BASE_URL}/search?q=${searchedValue}`, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create product');
    }
}


async function updateProduct(id, product) {
    try {
        const { data } = await axios.put(`${BASE_URL}/${id}`, product, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to update product with id ${id}`);
    }
}


async function deleteProduct(id) {
    try {
        const { data } = await axios.delete(`${BASE_URL}/${id}`, { headers: { 'app-id': APP_ID } });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to delete product with id ${id}`);
    }
}


module.exports = {
    getAllProducts,
    getAllProductCategories,
    getProductById,
    createProduct,
    updateProduct,
    searchProduct,
    deleteProduct
};
