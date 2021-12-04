import React, { Component } from 'react'
import JobInfo from './JobInfo'
import PersonalInfo from './PersonalInfo'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userCpf: '',
      userAdress: '',
      userCity: '',
      userState: '',
      houseType: '',
      isButtonDisable: true,
      isReportGenerated: false
    }
  }

  onChange = ({target: {value, name}}) => {
    if(name === 'userName') {
      this.setState({
        [name] : value.toUpperCase()
      }, () => {this.checkErrors()})
    } else {
      this.setState({
        [name] : value
      },  () => {this.checkErrors()})
    }
  }

  checkLenght = (value, maxLength, isMandatory) => {
    if(value.length > maxLength) {
      console.log('passou');
      return false
    }
    if (value === '' && isMandatory) {
      return false
    }
    return true
  }

  checkIfMandatory = (value) => {
    if(value === '') {
      return false
    }
    return true
  }

  checkErrors = () => {
    const {
      userName,
      userEmail,
      userCpf,
      userAdress,
      userCity,
      userState,
      houseType
      } = this.state

    const errorCases = [
      !this.checkLenght(userName, 40, true),
      !this.checkLenght(userEmail, 50, true),
      !this.checkLenght(userCpf, 11, true),
      !this.checkLenght(userAdress, 200, true),
      !this.checkLenght(userCity, 28, true),
      !this.checkIfMandatory(userState),
      !this.checkIfMandatory(houseType),
    ]

    const haveError = errorCases.every((error) => error === false)
    this.setState({
      isButtonDisable: !haveError
    })
  }

  enableReport = (event) => {
    event.preventDefault()
    this.setState({isReportGenerated : true })
  }

  generateReport = () => {
    const userData = [this.state]

    const data = userData.map((
      {userName, 
      userEmail,
      userCpf,
      userAdress,
      userCity,
      userState,
      houseType}) => (
      <div>
        <div>
          <h1>{userName}</h1>
          <p>Email: {userEmail}</p>
          <p>CPF: {userCpf}</p>
          <p>{`Endereco: ${userAdress} - ${userCity} - ${userState} / ${houseType}`}</p>
        </div>
        <div>
        </div>
      </div>
    ))

    return data

  }

  render() {
    const {
      userName,
      userEmail,
      userCpf,
      userAdress,
      userCity,
      userState,
      isButtonDisable,
      isReportGenerated
      } = this.state
    return (
      <>
      <form>
        <PersonalInfo 
          userName={userName}
          userEmail={userEmail}
          userCpf={userCpf}
          userAdress={userAdress}
          userCity={userCity}
          userState={userState}
          onChange={this.onChange}
        />
        <JobInfo />
        <button type='submit' disabled={isButtonDisable} onClick={this.enableReport}>Criar</button>
        <button type='button'>Limpar</button>
      </form>
      {isReportGenerated ? this.generateReport() : '' }
      </>
    )
  }
}
