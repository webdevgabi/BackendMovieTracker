const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const db = 'MovieTracker'

module.exports = async (req, res, next) => {
    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        global.db = client.db(db);
        console.log(req.db);
        next();
    } catch (e) {
        res.status(500).json({ status: 500 ,error: e.message });
    }
}