const createObject = (objeto, key, value) => objeto[key] = value;

const newObject = {}
console.log(createObject(newObject, 'nome', 'Jefferson Thierch'))
console.log(newObject)
