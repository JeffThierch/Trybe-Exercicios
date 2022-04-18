const rootRouter = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');

rootRouter.use('/login', loginRoutes);
rootRouter.use('/users', userRoutes);

module.exports = rootRouter;