/* Before OCP 
export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
    default:
      console.log(message);
      break;   
  }
}
*/

/* my implementation
export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  console.log(`${notificationType}: ${message}`);
}
*/

type NotificationType = { type: string; send: (message: string) => void }

const consoleNotification: NotificationType = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: NotificationType = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: NotificationType = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: NotificationType[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: NotificationType[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}