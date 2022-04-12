const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const secret = process.env.SECRETPASSWORD;

module.exports = async (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(401).json({error: 'Token nao encontrado'})
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({ where: { username: decoded.data.username } });

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}