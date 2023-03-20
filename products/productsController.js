const express = require('express');
const router = express.Router();
const products = require('./products.js');

router.get('/', async (_req, res) => {
    try {
        const allProducts = await products.getAllProducts();
        res.json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/search', async (req, res) => {
    try {
        const searchValue = req.query.q;
        const searchedProduct = await products.searchProduct(searchValue);
        res.json(searchedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/categories', async (_req, res) => {
    try {
        const allProductCategories = await products.getAllProductCategories();
        res.json(allProductCategories);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await products.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/add', async (req, res) => {
    try {
        const createdProduct = await products.createProduct(req.body);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await products.updateProduct(req.params.id, req.body);
        res.status(201).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await products.deleteProduct(req.params.id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;