const express = require("express");
const router = express.Router();
const BlogModel = require("../Model/BlogModel");
const Joi = require("joi");

// Define Joi schema for comment validation
const CommentSchema = Joi.object({
    username: Joi.string().required(),
    comment: Joi.string().required()
});

// GET all blogs
router.get("/blog", async (req, res) => {
    try {
        const data = await BlogModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET a specific blog by ID
router.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const data = await BlogModel.findById(id);
        if (!data) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// POST a new comment to a specific blog
router.post("/blog/:id/comments", async (req, res) => {
    const id = req.params.id;
    try {
        // Validate the incoming comment data
        const { error, value } = CommentSchema.validate(req.body);

        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        // Find the blog post by ID
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        // Add the new comment to the blog's comments array
        blog.comments.push(value);

        // Save the updated blog document
        await blog.save();

        // Respond with the added comment
        res.status(201).json(value);

    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
