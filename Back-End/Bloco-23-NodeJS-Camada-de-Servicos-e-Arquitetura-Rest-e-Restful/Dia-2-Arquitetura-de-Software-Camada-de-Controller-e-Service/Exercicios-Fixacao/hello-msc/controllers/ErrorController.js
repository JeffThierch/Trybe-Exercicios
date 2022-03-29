const errorControler = (err, req, res, _next) => {
  
  res.status(err.code).json({error: error.message})
}

module.exports = errorControler
