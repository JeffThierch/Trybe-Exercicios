const stateSelect = document.getElementById('state-select');

const statesOfBrazil = [
'AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins'
]

const initials = [
'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

function populateStatesOptions(fatherElement ,arrayStates, initialsArray ) {
  for (var i = 0; i < arrayStates.length; i += 1) {
    const option = document.createElement('option')
    option.value = initialsArray[i]
    option.innerText = arrayStates[i]
    fatherElement.appendChild(option)
      
  }
}

populateStatesOptions(stateSelect, statesOfBrazil, initials);

const submitBtn = document.getElementById('btn-submit')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const cpfInput = document.getElementById('cpf-input')
const addressInput = document.getElementById('address-input')
const cityInput = document.getElementById('city-input')
const selectInput = document.getElementById('state-select')
const radioSelect1 = document.getElementById('type-residence-input1')
const radioSelect2 = document.getElementById('type-residence-input2')
const resumeInput = document.getElementById('resumeInput')
const jobInput = document.getElementById('job-input')
const jobResume = document.getElementById('job-resume')
const startDate = document.getElementById('startDate')
const sendDataDiv = document.getElementById('dados-enviados')
const errorDiv = document.getElementById('mensagemErro')
const error = document.getElementById('error')
let errorMsg = ''

function addErrorToDiv(message) {
  const errorParagraph = document.createElement('p');
  errorParagraph.className = 'error'
  errorParagraph.innerText = message;
  errorDiv.appendChild(errorParagraph);
  
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

function isNameInputValid() {
  let control = true;
  if (nameInput.value.trim() === "") {
    addErrorToDiv('Nome Invalido')
    control = false
    return control;
  } else {
    return control;
  }
}

function isEmailInputValid() {
  let control = true
  if (emailInput.value.split('').includes('@')) {
    control = true
    return control
  } else {
    addErrorToDiv('Email Invalido')
    control = false
    return control
  }
}

function limitCpfLength() {
  if (cpfInput.value.length <= 11) {
    cpfInput.value = cpfInput.value.slice(0, 10)
  }
}
cpfInput.addEventListener('keydown', limitCpfLength)

function isCpfValid() {
  if (cpfInput.value.trim() === '') {
    addErrorToDiv('CPF invalido')
    control = false
    return control
  } else {
    control = true
    return control
  }
}

function isAdressInputValid() {
  let control = true
  if (addressInput.value.trim() === "") {
    addErrorToDiv('Endereco Invalido')
    control = false
    return control
  } else {
    control = true
    return control;
  }
}

function isResumeInputValid() {
  let control = true
  if (resumeInput.value.trim() === "") {
    addErrorToDiv('Resumo Invalido')
    control = false
    return control
  } else {
    control = true
    return control;
  }
}

function isJobInputValid() {
  let control = true
  if (jobInput.value.trim() === "") {
    addErrorToDiv('Insira um Trabalho')
    control = false
    return control
  } else {
    control = true
    return control;
  }
}

function isJobResumeInputValid() {
  let control = true
  if (jobResume.value.trim() === "") {
    addErrorToDiv('Resumo do trabalho Invalido')
    control = false
    return control
  } else {
    control = true
    return control;
  }
}

const checkedValue = document.querySelector('[name=residence]:checked') 

function dateValidation(){
  let control = true
  if(startDate.value.length === 0){
    control = false
    addErrorToDiv('A data não foi preenchida!')
    return control
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if(!regex.test(startDate.value)){
    control = false
    addErrorToDiv('Data: Formato inválido')
    return control
  }

  let splitted = startDate.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    control = false
    addErrorToDiv('Dia inválido')
    return control
  }

  if(month < 0 || month > 12){
    control = false
    addErrorToDiv('Mês inválido')
    return control
  }

  if(year < 0) {
    control = false
    addErrorToDiv('Ano inválido')
    return control
    
  }
  control = true
  return control;
}

function createForm() {
  const createParagraph = document.createElement('p')
  document.body.appendChild(sendDataDiv)
  const values = [nameInput.value, emailInput.value, cpfInput.value, addressInput.value, cityInput.value, selectInput.value, checkedValue.value,resumeInput.value, jobInput.value, jobResume.value]
  const idValues = ['Nome: ', 'Email: ', 'Cpf: ', 'Address: ', 'City: ', 'State: ', 'Type of Residence: ','Resume: ', 'Job: ', 'Job Description: ']
  for (let i = 0; i < values.length; i += 1) {
    const createParagraph = document.createElement('p')
    createParagraph.innerText = `${idValues[i]}${values[i]}`
    sendDataDiv.appendChild(createParagraph)
  }
  createParagraph.innerText = `Data de inicio: ${startDate.value}`
  sendDataDiv.appendChild(createParagraph)
}

function deleteErrorDiv() {
  while (errorDiv.firstChild) {
    errorDiv.removeChild(errorDiv.lastChild)
  }
}

function clearDataDiv() {
  while (sendDataDiv.firstChild) {
    sendDataDiv.removeChild(sendDataDiv.lastChild)
  }
}

function btnPreventDefault(event) {
  event.preventDefault()
  deleteErrorDiv()
  let nameValid = isNameInputValid()
  let emailValid = isEmailInputValid()
  let adressValid = isAdressInputValid()
  let resumeValid = isResumeInputValid()
  let jobValid = isJobInputValid()
  let jobResumeValid = isJobResumeInputValid()
  let cpfValid = isCpfValid()
  let startDateValid = dateValidation()
  if(nameValid === true && emailValid === true && adressValid === true && resumeValid === true
    && jobValid === true && jobResumeValid === true && cpfValid === true && startDateValid === true && errorDiv.children.length > 0) {
      deleteErrorDiv()
      createForm()
    }
  else if (nameValid === true && emailValid === true && adressValid === true && resumeValid === true
    && jobValid === true && jobResumeValid === true && cpfValid === true && startDateValid === true && sendDataDiv.children.length > 0) {
    clearDataDiv()
    createForm()
  }
  else if (nameValid === true && emailValid === true && adressValid === true && resumeValid === true
    && jobValid === true && jobResumeValid === true && cpfValid === true && startDateValid === true) {
      createForm()
    } else {
      clearDataDiv()
    }
}

submitBtn.addEventListener('click', btnPreventDefault);