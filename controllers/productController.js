const Product = require('../models/productModel');
const User = require('../models/userModel');

exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const user = await User.findById(req.user._id);

    if (user) {
        const product = new Product({
            name,
            description,
            price,
            image: req.file.path,
            user: req.user._id,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find({}).populate('user', 'name email');
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('user', 'name email');
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

exports.updateProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
