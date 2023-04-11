const express = require('express');
const mongoose = require('mongoose');
const articlesRouter = require('./routes/article');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(articlesRouter);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        mongoose.connect('mongodb+srv://diana:diana18@cluster0.fd4meb0.mongodb.net/?retryWrites=true&w=majority', 
        {useNewUrlParser: true});

        app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)})
    } catch(err) {
        console.log(err);
    } 
}

start();