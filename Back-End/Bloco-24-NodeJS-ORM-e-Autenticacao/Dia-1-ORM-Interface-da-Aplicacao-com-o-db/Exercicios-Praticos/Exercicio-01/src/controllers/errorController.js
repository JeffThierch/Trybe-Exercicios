const errorController = (err, _req, res, _next) => {
  console.log(err);
  return res.status(500).json({message: 'Algo deu errado'})
}

module.exports = errorController;