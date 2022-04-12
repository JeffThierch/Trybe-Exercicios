const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const patientRoutes = require('./routes/patientRoutes');
app.use('/patients', patientRoutes)

const plansRoutes = require('./routes/plansRoutes');
app.use('/plans', plansRoutes)

const surgeriesRoutes = require('./routes/surgeriesRoutes');
app.use('/surgeries', surgeriesRoutes)


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});