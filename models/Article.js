const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = model('article', schema);