const stateSelect = document.getElementById('state-select');

const statesOfBrazil = [
'AC - Acre',
'AL - Alagoas',
'AP - Amapá',
'AM - Amazonas',
'BA - Bahia',
'CE - Ceará',
'DF - Distrito Federal',
'ES - Espírito Santo',
'GO - Goías',
'MA - Maranhão',
'MT - Mato Grosso',
'MS - Mato Grosso do Sul',
'MG - Minas Gerais',
'PA - Pará',
'PB - Paraíba',
'PR - Paraná',
'PE - Pernambuco',
'PI - Piauí',
'RJ - Rio de Janeiro',
'RN - Rio Grande do Norte',
'RS - Rio Grande do Sul',
'RO - Rondônia',
'RR - Roraíma',
'SC - Santa Catarina',
'SP - São Paulo',
'SE - Sergipe',
'TO - Tocantins'
]

const initials = [
'AC',
'AL',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MS',
'MT',
'MG',
'PA',
'PB',
'PR',
'PE',
'PI',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO',
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
const days = document.getElementById('days')
const months = document.getElementById('months')
const years = document.getElementById('years')

function isNameInputValid() {
  let control = true;
  if (nameInput.value.trim() === "") {
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

function isAdressInputValid() {
  let control = true
  if (addressInput.value.trim() === "") {
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
    control = false
    return control
  } else {
    control = true
    return control;
  }
}

function generateDayAndMonth() {
  /* generate days */
  for (let i = 1; i <= 31; i += 1) {
    let dayOption = document.createElement('option')
    dayOption.value = i
    dayOption.innerText = i
    days.appendChild(dayOption)
  }
  /* generate months */
  for (let i = 1; i <= 12; i += 1) {
    let monthOption = document.createElement('option')
    monthOption.value = i
    monthOption.innerText = i
    month.appendChild(monthOption)
  }
}

generateDayAndMonth()

function verifyIfYearIsValid() {
  let yearValue = years.value
  let yearToNumber = parseInt(yearValue, 10)
  if (yearToNumber < 0) {
    yearValue = "0"
  }
}

years.addEventListener('change', verifyIfYearIsValid)

const checkedValue = document.querySelector('input[name="residence"]:checked') 

function createForm() {
  const divContainer = document.createElement('div')
  const createParagraph = document.createElement('p')
  document.body.appendChild(divContainer)
  const values = [nameInput.value, emailInput.value, cpfInput.value, addressInput.value, cityInput.value, selectInput.value, checkedValue.value,resumeInput.value, jobInput.value, jobResume.value]
  const idValues = ['Nome: ', 'Email: ', 'Cpf: ', 'Address: ', 'City: ', 'State: ', 'Type of Residence: ','Resume: ', 'Job: ', 'Job Description: ']
  for (let i = 0; i < values.length; i += 1) {
    const createParagraph = document.createElement('p')
    createParagraph.innerText = `${idValues[i]}${values[i]}`
    divContainer.appendChild(createParagraph)
  }
  createParagraph.innerText = `Date of start: ${days.value}/${month.value}/${years.value}`
  divContainer.appendChild(createParagraph)
}



function btnPreventDefault(event) {
  event.preventDefault()
  let nameValid = isNameInputValid()
  let emailValid = isEmailInputValid()
  let adressValid = isAdressInputValid()
  let resumeValid = isResumeInputValid()
  let jobValid = isJobInputValid()
  let jobResumeValid = isJobResumeInputValid()
  if (nameValid === true && emailValid === true && adressValid === true && resumeValid === true
    && jobValid === true && jobResumeValid === true) {
      createForm()
    }
}

submitBtn.addEventListener('click', btnPreventDefault);