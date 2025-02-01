// routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create post route
router.post('/posts', async (req, res) => {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });
    await post.save();
    res.status(201).send('Post created');
});

// Get all posts route
router.get('/posts', async (req, res) => {
    const posts = await Post.find().populate('author');
    res.json(posts);
});

module.exports = router;
