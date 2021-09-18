import './node_modules/just-validate/dist/js/just-validate.js'

function populateStatesOptions() {
  const stateSelect = document.getElementById('state-select');
  const statesOfBrazil = [
  'AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins'
  ]
  const initials = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
  ]
  for (var i = 0; i < statesOfBrazil.length; i += 1) {
    const option = document.createElement('option')
    option.value = initials[i]
    option.innerText = statesOfBrazil[i]
    stateSelect.appendChild(option)
      
  }
}

const btnClear = document.getElementById('btn-clear')

function clearAll() {
  const inputs = document.getElementsByTagName('input')
  const textAreas = document.getElementsByTagName('textarea')

  for (let i = 0; i < inputs.length; i += 1 ) {
    inputs[i].value = ''
  }
  for (let i = 0; i < textAreas.length; i += 1) {
    textAreas[i].value = ''
  }
}

btnClear.addEventListener('click', clearAll)

const picker = new Pikaday({field: document.getElementById('datepicker'),
format: 'D MMM YYYY',
toString(date, format) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`; 
},
parse(dateString, format) {
  // dateString is the result of `toString` method
  const parts = dateString.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
  }
});


window.onload = function () {
  populateStatesOptions()
  
  new JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      address: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
      },
      radio: {
        required: true
      },
      resume: {
        required: true,
        maxLength: 1000
      },
      jobInput: {
        required: true,
        maxLength: 40
      },
      jobResume: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido.',
        maxLength: 'O limite é de 50 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      address: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      city: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      state: {
        required: 'O campo estado é obrigatório.',
      },
      radio: {
        required: 'A escolha de um item é obrigatória.',
      },
      resume: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      jobInput: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      jobResume: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 500 caracteres.'
      },
      date: {
        required: 'Este campo é obrigatório.',
      }
    },
    submitHandler: function(form, values) {
        console.log(form, values)
    }});
  
}