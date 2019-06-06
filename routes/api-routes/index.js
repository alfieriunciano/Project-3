const router = require('express').Router();
const postRoutes = require('./posts');

// Book routes
router.use('/user', postRoutes);

module.exports = router;
