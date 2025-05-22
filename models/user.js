const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    birthday: Date,
}, { timestamps: true });

module.exports = mongoose.model('user', userData);