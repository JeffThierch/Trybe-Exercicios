const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);

const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT} `);
});
