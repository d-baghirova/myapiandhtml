const {Router} = require('express');
const router = Router();
const Article = require('../models/Article');

router.get('/articles', async(req, res) => {
    const articles = await Article.find({}).lean();
    res.send(articles);
})

router.post('/create', async(req, res) => {
    const newArticle = new Article({
        title: req.query.title,
        article: req.query.article,
        author: req.query.author
    });

    await newArticle.save();
    res.send(newArticle);
})

module.exports = router;