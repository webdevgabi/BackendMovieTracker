const router = require('express').Router();

router.post('/', (req, res) => {
    res.json({ method: 'post', path: '/signup', status: 200 })
})

module.exports = router;