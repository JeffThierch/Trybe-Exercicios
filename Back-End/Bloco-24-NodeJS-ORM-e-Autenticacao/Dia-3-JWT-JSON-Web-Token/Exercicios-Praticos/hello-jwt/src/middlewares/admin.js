const validateAdmin = async (req, res, next) => {
  const { admin } = req.user;

  if (!admin) {
    return res.status(403).json({ error: {
      message: 'Restricted access',
    } });
  }

  return next();
};

module.exports = validateAdmin;