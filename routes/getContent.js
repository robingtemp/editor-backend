const express = require('express');
const Content = require('../models/Content.js')
const router = express.Router();

// get all content
router.get('/', async function(req, res) {
    try {
        const content = await Content.find();
        res.json(content)
    } catch (err) {
        res.json(err)
    }
});

// get ID content
router.get('/:id', async function(req, res) {
    try {
        const content = await Content.findById(req.params.id);
        res.json(content)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;