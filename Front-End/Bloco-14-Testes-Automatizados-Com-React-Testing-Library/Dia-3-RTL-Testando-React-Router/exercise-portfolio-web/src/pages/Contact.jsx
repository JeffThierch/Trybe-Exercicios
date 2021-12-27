import React from 'react';
import '../styles/Contact.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com'; 

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      disabled: true 
    }
  }

  sendEmail = (event) => {
    event.preventDefault();
    const {target} = event

    emailjs.sendForm('service_l6c1vtg', 'template_4f2fjnd', target, 'user_PDFD7oj8b6wuTt3aXVGoy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      target.reset()
  };

  emailChange = ({target: {value}}) => {
    this.setState({
      userEmail: value
    }, () => this.validadeEmail())
   
  }

  validadeEmail = () => {
    const {userEmail} = this.state
    const regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    const isValid = regex.test(userEmail);
    this.setState({
      disabled: !isValid,
    })
  }

  render() {
    const {userEmail, disabled} = this.state
    return (
      <main className='Contact-main-container'data-testid='page-title'>
        <section className='Contact-title-container Home-animation'>
          <h1>Fale Comigo</h1>
        </section>
        <form className='email-form Home-animation' onSubmit={this.sendEmail}>
          <div className='email-input-container'>
            <input 
            className='form-input' 
            type="email" 
            placeholder='Email' 
            value={userEmail}
            onChange={this.emailChange}
            name="email"/>
          </div>
          <div>
            <input className='form-input'type="text" placeholder='Nome' name="name"/>
          </div>
          <div>
            <input className='form-input'type="text" placeholder='Assunto' name="subject"/>
          </div>
          <div>
            <textarea className='form-message-input' cols="30" rows="10" placeholder='Menssagem' name="message" />
          </div>
          <div className='Contact-send-email-btn-container'>
            <button type='submit' disabled={disabled} className='Contact-send-email-btn'>Enviar</button>
          </div>
        </form>
        <div className='Contact-social-media-contaniner'>
          <a href="https://www.linkedin.com/in/jeffthierch/" rel="noopener noreferrer" target={"_blank"}>
            <FaLinkedinIn className='Home-social-media-icon Home-linkedin Home-animation About-media-icon'/>
          </a>
          <a href="https://github.com/JeffThierch" rel="noopener noreferrer" target={"_blank"}>
            <FaGithub className='Home-social-media-icon Home-github Home-animation'/>
          </a>
        </div>
      </main>
    );
  };
}

export default Contact;
