// server/routes/recycle.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`https://api.earth911.com/earth911.getMaterials?api_key=YOUR_API_KEY&query=${query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;
