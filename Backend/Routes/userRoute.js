const express = require("express");
const router = express.Router();
const userModel = require("../Model/UserModel");
const Joi = require("joi");
const Bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require('dotenv').config();

const secretKey = process.env.Jwtkey;

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
});

const generateToken = (data) => {
    const expiresIn = "7h";
    const plainData = data.toObject();
    const token = jwt.sign(plainData, secretKey, { expiresIn });
    return token;
};

router.get("/", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body);

        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ error: 'Validation error', details: error.details });
        }

        const hash = await Bcrypt.hash(value.password, saltRounds);
        value.password = hash;

        const newUser = await userModel.create(value);

        const token = generateToken(newUser);
        
        res.status(201).json({ newUser, token });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (user) {
            const isPasswordValid = await Bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = generateToken(user);
                res.json({ user, token });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
