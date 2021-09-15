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