const express = require("express");
const router = express.Router();
const BlogModel = require("../Model/BlogModel");
const Joi = require("joi");

const BlogSchema = Joi.object({
    title: Joi.string().required(),
    image_link: Joi.string().required(), 
    description: Joi.string().required(),
    comments: Joi.array().items(Joi.string())
});

router.get("/blog", async (req, res) => {
    try {
        const data = await BlogModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    try {
        console.log(req)
        const data = await BlogModel.findById(id);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/blog", async (req, res) => {
    try {
        const { error, value } = BlogSchema.validate(req.body);

        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        const newBlog = await BlogModel.create(value);
        res.status(201).json(newBlog);

    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;