const rootRouter = require('express').Router();
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const topSecretRoutes = require('./topSecretRoutes');

rootRouter.use('/login', loginRoutes);
rootRouter.use('/users', userRoutes);
rootRouter.use('/top-secret', topSecretRoutes);

module.exports = rootRouter;