module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      error: { message: err.details[0].message },
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: { message: err.message } });
  }

  console.error(err);

  return res.status(500).json({
    error: { message: `Internal server error: ${err.message}` },
  });
};
