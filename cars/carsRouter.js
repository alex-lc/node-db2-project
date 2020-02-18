const express = require('express');

const router = express.Router();

// endpoints
router.get('/', (req, res) => {
    res.status(200).json({ you: 'have made it to our endpoints' });
});

module.exports = router;