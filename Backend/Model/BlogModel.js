const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image_link: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        username :String,
        comment : String
    }]
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
