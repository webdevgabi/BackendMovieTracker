const router = require('express').Router();
const { hash } = require('bcrypt');
const insertOne = require('../database/insertOne');

router.post('/', async (req, res) => {
    const { displayName, username, email, password  } = req.body;

    if(!displayName || !username || !email || !password) {
        res.status(400).json({ status: 400, error: 'Missing fields' })
        return
    }

    const user = {
        displayName: displayName,
        username: username,
        email: email,
        password: await hash(password, 10),
    }

    const isInserted = await insertOne({ collection: 'users', data: user, db: req.db})

    if (!isInserted) {
        res.status(500).json({ status: 500, error: 'Server error' })
        return
    }

    res.json({ status: 200, data: user })
})

module.exports = router;