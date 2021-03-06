"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("./classes/Order");
const OrderItem_1 = require("./classes/OrderItem");
const OrderRepository_1 = require("./classes/OrderRepository");
const Student_1 = require("./classes/Student");
const Subject_1 = require("./classes/Subject");
const Teacher_1 = require("./classes/Teacher");
const carolina = new Student_1.Student('Carolina da Silva', new Date('2005/03/17'));
const math = new Subject_1.Subject('Matemática');
const marta = new Teacher_1.Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const sandwiche = new OrderItem_1.OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem_1.OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem_1.OrderItem('Gelatina de Uva', 2.50);
const carolinaOrder = new Order_1.Order(carolina, [sandwiche, juice, dessert], 'Money', 0.10);
const orderRepository = new OrderRepository_1.OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(carolinaOrder);
console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('greater'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('lesser'));
