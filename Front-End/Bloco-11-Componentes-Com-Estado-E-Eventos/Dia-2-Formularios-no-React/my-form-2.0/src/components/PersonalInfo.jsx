import React, { Component } from 'react'

const brazilianStates = [
  { uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' }
]

export default class PersonalInfo extends Component {
 

  verifyCity = () => {
    const {userCity} = this.props
    console.log('-');
  }
  
  render() {
    const {
      userName,
      userEmail,
      userCpf,
      userAdress,
      userCity,
      userState,
      onChange
      } = this.props
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <label htmlFor='input-name'>
          Nome:
          <input 
            type='text' 
            id='input-name'
            value={userName}
            name='userName'
            onChange={onChange}/>
        </label>
        <label htmlFor='input-email'>
          Email:
          <input 
            type='email' 
            id='input-email'
            value={userEmail}
            name='userEmail'
            onChange={onChange}/>
        </label>  
        <label htmlFor='input-cpf'>
          CPF:
          <input 
            type='text' 
            id='input-cpf'
            value={userCpf}
            name='userCpf'
            onChange={onChange}/>
        </label>
        <label htmlFor='input-adress'>
        Endereço:
          <input 
            type='text' 
            id='input-adress'
            value={userAdress}
            name='userAdress'
            onChange={onChange}/>
        </label>
        <label htmlFor='input-adress'>
        Cidade:
          <input 
            type='text' 
            id='input-city'
            value={userCity}
            name='userCity'
            onChange={onChange}
            onBlur={this.verifyCity}/>
        </label>
        <label htmlFor='input-state'>
        Estado:
          <select 
            id='input-state'  
            value={userState}
            name='userState'
            onChange={onChange}>

            <option disabled hidden value="">Selecione um Estado</option>

            {brazilianStates.map(({uf, nome }) => (
              <option value={uf}>{nome}</option>
            ))}
          </select>
        </label>
        <div onChange={onChange}>
        Tipo de Residencia:
        <input type="radio" value="Casa" name="houseType" /> Casa
        <input type="radio" value="Apartamento" name="houseType" /> Apartamento
        </div>
        
      </fieldset>
    )
  }
}
