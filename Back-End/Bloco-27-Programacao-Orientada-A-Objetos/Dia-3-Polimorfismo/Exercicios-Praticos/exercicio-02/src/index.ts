import { Order } from "./classes/Order";
import { OrderItem } from "./classes/OrderItem";
import { OrderRepository } from "./classes/OrderRepository";
import { Student } from "./classes/Student";
import { Subject } from "./classes/Subject";
import { Teacher } from "./classes/Teacher";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));

const math = new Subject('Matemática');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], 'Money', 0.10);

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('greater'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('lesser'));