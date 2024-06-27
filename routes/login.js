const router = require('express').Router();
const tokenGenerator = require('../utilities/tokenGenerator');
const { find, insertOne } = require("../database/")
const { compare } = require('bcrypt');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if(!email ||!password) {
        return res.status(400).json({ message: 'Missing email or password' })
    }

    const user = await find({ collection: 'users', condition: { email: email }})

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Wrong password' })
    }

    const token = await tokenGenerator();
    const isInserted = await insertOne({ collection: 'tokens', data: { token: token, userId: user._id } })

    if(!isInserted) {
        return res.status(500).json({ message: 'Internal server error' })
    }

    res.json({ status: 200, token: token })
})

module.exports = router;