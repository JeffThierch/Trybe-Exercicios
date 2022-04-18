const getInfo = (req, res, next) => {
  try {
  const { username, admin } = req.user;

  return res.status(200).json({ username, admin });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  getInfo,
};