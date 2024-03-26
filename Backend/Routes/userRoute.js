const express = require("express");
const router = express.Router();
const userModel = require("../Model/UserModel");
const Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
});

router.get("/users", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/users", async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        const newUser = await userModel.create(value);
        res.status(201).json(newUser);

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
