const mongoose = require('mongoose');

const Class = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }, 
    teacher: {
        type: String,
        required: true,
    },   
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Class', Class);