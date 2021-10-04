// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const checkId = (id) => {
  const employees = professionalBoard;
  for (const employee of employees) {
      if (Object.values(employee)[0] === id) {
      return true;
    }
  }
}

const checkDetails = (detail) => {
  const employees = professionalBoard;
  for (const employee of employees) {
    for (let index = 0; index <= Object.keys(employee).length; index += 1) {
      if (Object.keys(employee)[index] === detail) {
      return true;
    }
    }
  }
}

const searchEmployee = (id, detail) => {
  const employees = professionalBoard;
  const isIdValid = checkId(id);
  const isDetailValid = checkDetails(detail);

  if (isIdValid === undefined) {
    return 'ID não identificada';
  }
  if (isDetailValid === undefined) {
    return 'Informação indisponível';
  }
  
  for (const employee of employees) {
    if (Object.values(employee)[0] === id) {
      return employee[detail];
    }
  }
}

describe('Exercicio Bonus - Funcao searchEmployee', () => {
  it('Verifica se a searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  })
  it('Verifica se searchEmployee e uma funcao', () => {
    expect(typeof(searchEmployee)).toBe('function')
  })
  it('Verifica se retorna o informacao correta', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds')
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul')
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda')
    expect(searchEmployee('5569-4', 'specialities')).toMatchObject(['Frontend', 'Redux', 'React', 'CSS'])
  })
  it('Verifica ID incorreto', () => {
    expect(searchEmployee('4678', 'firstName')).toBe('ID não identificada')
  })
  it('Verifica Detail Invalido', () => {
    expect(searchEmployee('4678-2', 'first')).toBe('Informação indisponível')
  })
})