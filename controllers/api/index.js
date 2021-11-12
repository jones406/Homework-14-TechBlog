const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogentryRoutes = require('./blogentryRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogentry', blogentryRoutes);
router.use('/comments'), commentRoutes);

module.exports = router;
