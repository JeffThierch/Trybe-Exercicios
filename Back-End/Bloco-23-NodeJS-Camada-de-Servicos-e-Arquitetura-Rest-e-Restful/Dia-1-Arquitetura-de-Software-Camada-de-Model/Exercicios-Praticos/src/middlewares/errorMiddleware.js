const errorMiddleware = (err, _req, res, _next) => {
  return res.status(err.code).json(err.message);
}

module.exports = errorMiddleware;