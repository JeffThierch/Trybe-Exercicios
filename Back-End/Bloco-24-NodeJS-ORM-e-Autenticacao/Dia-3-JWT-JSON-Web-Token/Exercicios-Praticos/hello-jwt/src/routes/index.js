const rootRouter = require('express').Router();
const loginRoutes = require('./loginRoutes');

rootRouter.use('/login', loginRoutes);

module.exports = rootRouter;