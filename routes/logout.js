const router = require('express').Router();
const { find, deleteOne } = require('../database');

router.delete('/', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    const tokenFromDB = await find({ collection: 'tokens', condition: { token: token } });
    if(!tokenFromDB) {
        return res.status(401).json({ status: 401, error: 'Unauthorized' });   
    }

    const isDeleted = await deleteOne({ collection: 'tokens', condition: tokenFromDB });
    if(!isDeleted) {
        return res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }

    res.json({ status: 200, message: 'Token deleted successfully' })
})

module.exports = router;