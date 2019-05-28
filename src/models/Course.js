const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    class: [{type: mongoose.Schema.Types.ObjectId, ref: "Class"}]
});

module.exports = mongoose.model('Course', Course);