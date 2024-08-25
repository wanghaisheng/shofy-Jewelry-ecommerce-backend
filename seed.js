require('dotenv').config();

const connectDB = require('./config/db');

const Brand = require('./model/Brand');
const brandData = require('./utils/brands');

const Category = require('./model/Category');
const categoryData = require('./utils/categories');

const Products = require('./model/Products');
const productsData = require('./utils/products');

const Coupon = require('./model/Coupon');
const couponData = require('./utils/coupons');

const Order = require('./model/Order');
const orderData = require('./utils/orders');

const User = require('./model/User');
const userData = require('./utils/users');

const Reviews = require('./model/Review');
const reviewsData = require('./utils/reviews');

const Admin = require('./model/Admin');
const adminData = require('./utils/admin');

const mongoose = require('mongoose');

const importData = async () => {
  try {
    console.log('Starting data import...');

    await Brand.deleteMany();
    await Brand.insertMany(brandData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Products.deleteMany();
    await Products.insertMany(productsData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);
    
    await Order.deleteMany();
    await Order.insertMany(orderData);
    
    await User.deleteMany();
    await User.insertMany(userData);
    
    await Reviews.deleteMany();
    await Reviews.insertMany(reviewsData);
    
    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    console.log('Data import completed.');
  } catch (error) {
    console.error('Error during data import:', error);
  }
};

module.exports = { importData };