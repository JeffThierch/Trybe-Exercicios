// index.js
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const { Address, Employee } = require('./models');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? config.test : config.development);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

<<<<<<< HEAD
app.post('/employees', async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create({ firstName, lastName, age },  { transaction: t },);

    await Address.create({ city, street, number, employeeId: employee.id },  { transaction: t },);

    await t.commit();

    return res.status(201).json({ 
      id: employee.id,
      message: 'Cadastrado com sucesso' });
  } catch (e) {
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {includeAddresses} = req.query;
    const employee = await Employee.findOne({ where: { id } });
    
    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    if (includeAddresses) {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
  
    return res.status(200).json(employee);
   } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
=======
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses', attributes: {exclude: ['number', 'street']}}],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
>>>>>>> 31a45a3 (Feat: Eager Loading example)
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;