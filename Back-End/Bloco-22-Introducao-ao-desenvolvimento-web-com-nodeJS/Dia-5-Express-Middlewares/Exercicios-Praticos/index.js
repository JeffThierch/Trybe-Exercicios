const express = require ('express');
const bodyParser = require('body-parser');
const { invalidRoute } = require('./middlewaresValidator')

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

const userRouter = require('./routes/userRouter');

app.use('/user', userRouter);

const btcRouter = require('./routes/btcRouter');

app.use('/btc', btcRouter);

const postsRouter = require('./routes/postsRouter');

app.use('/posts', postsRouter);

const teamsRouter = require('./routes/teamsRouter')

app.use('/teams', teamsRouter)


app.all('*', invalidRoute);

app.use((err, _req, res, _next) => {
  res.status(500).json({error: `Erro: ${err.message}`});
});

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});