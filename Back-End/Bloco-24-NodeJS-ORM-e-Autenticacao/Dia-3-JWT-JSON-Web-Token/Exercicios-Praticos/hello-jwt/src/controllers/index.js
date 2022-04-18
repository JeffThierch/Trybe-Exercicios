const ping = require('./ping');
const { realizeLogin } = require('./loginController');

module.exports = {
  ping,
  login: realizeLogin,
};
