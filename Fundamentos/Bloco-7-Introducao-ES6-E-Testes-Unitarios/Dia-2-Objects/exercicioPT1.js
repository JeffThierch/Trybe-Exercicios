const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = Object.values(order.order.delivery)
  const personToDelivery = Object.values(order)
  const personDeliveryAdrees = Object.values(order.address)
  console.log(`Olá ${deliveryPerson[0]}, entrega para: ${personToDelivery[0]}, Telefone: ${personToDelivery[1]}, R. ${personDeliveryAdrees[0]},  Nº: ${personDeliveryAdrees[1]}, AP: ${personDeliveryAdrees[2]}`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order['name'] = 'Luiz Silva'
  const orderPizza = Object.keys(order.order.pizza)
  const orderDrink = Object.values(order.order.drinks.coke)
  const total = order.payment['total'] = 50
  console.log(`Olá ${newName}, o total do seu pedido de ${orderPizza[0]}, ${orderPizza[1]} e ${orderDrink[0]} é R$ ${total},00`)
}

orderModifier(order);