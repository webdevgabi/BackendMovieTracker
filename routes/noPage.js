const router = require('express').Router();

router.all('/', (req, res) => {
    res.status(404).json({ method: req.method, path: req.originalUrl, status: 404 })
})

module.exports = router;