const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

exports.createOrder = async (req, res) => {
    const { items, total } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const productIds = items.map(item => item.productId);
    const products = await Product.find({ _id: { $in: productIds } });

    if (products.length !== items.length) {
        return res.status(404).json({ message: 'One or more products not found' });
    }

    const orderItems = items.map(item => ({
        product: item.productId,
        quantity: item.quantity
    }));

    const order = new Order({
        user: req.user._id,
        items: orderItems,
        total,
        status: 'Pending'
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('items.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email').populate('product', 'name');
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = status || order.status;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};

exports.deleteOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        await order.remove();
        res.json({ message: 'Order removed' });
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
};
