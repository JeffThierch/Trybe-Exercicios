const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const productRoutes = require('./routes/productRoutes')
app.use('/products', productRoutes);

const errorController = require('./controllers/errorController');
app.use(errorController);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});