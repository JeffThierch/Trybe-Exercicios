import React from 'react';
import myFoto from '../assets/images/my-photo-compress.webp'
import '../styles/About.css'
import {data} from '../data'
import HabCards from '../components/HabCards';
import hab01 from '../assets/images/21.webp'
import hab02 from '../assets/images/118.webp'
import hab03 from '../assets/images/2.webp'

class About extends React.Component {
  render() {
    return (
      <main className='About-main-container Home-animation'>

        <section className="About-about-me-container">
             <img className='About-my-img-container' src={myFoto} alt="Jefferson Thierch" />
             <div>
                <p className='About-about-me-text'>
                  Ola! Me chamo <strong>Jefferson</strong>, nascido e criado no interior de São Paulo, mais precisamente em <strong>São Simão - SP </strong>, uma cidadezinha com muita natureza e belas paisagens, próxima de <strong>Ribeirão Preto - SP</strong>. 
                </p>
                <p className='About-about-me-text'>
                Sou um jovem apaixonado por tecnologia e busco estar sempre em constante evolução na área de 
                <strong> Desenvolvimento Web / Mobile</strong>.
                </p>
                <p className='About-about-me-text'>
                Tenho experiencia com <strong>HTML5, CSS3, JavaScript e ReactJS</strong>, e estou estudando <strong>React Native</strong> para me desenvolver na área de <strong>Mobile</strong>. 
                </p>
                <p className='About-about-me-text'>
                Sou apaixonado pelo <strong>Front-End</strong>, mas também estou buscando me desenvolver no <strong>Back-End</strong> para me tornar um <strong>Desenvolver Full-Stack</strong> e ter o conhecimento geral de uma aplicação.
                </p>
             </div>
          </section>
          <section className='About-hab-section-container'>
            <div>
              <h2 className='About-section-title'>Minhas Habilidades</h2>
            </div>
            <section className='About-hab-container'>
              <div className='About-hab-title-container'>
                <h3>Hard Skills</h3>
              </div>
              <ul className='About-hab-list'>
                {data.map(({name, img, utilization}) => (
                  <HabCards key={name} name={name} imgURL={img} utilization={utilization} />
                ))}
              </ul>
            </section>
            <section>
              <div className='About-hab-title-container'>
                <h3>Soft Skills</h3>
              </div>
              <section>
                <ul className='About-hab-list'>
                  <li className='soft-card-container'>
                    <h4>Comunicação</h4>
                    <img className='soft-skill-image' src={hab02} alt="" />
                  </li>
                  <li className='soft-card-container'>
                    <h4>Pensamento Critico</h4>
                    <img className='soft-skill-image' src={hab03} alt="" />
                  </li>
                  <li className='soft-card-container'>
                    <h4>Trabalho em Equipe</h4>
                    <img className='soft-skill-image' src={hab01} alt="" />
                  </li>
                </ul>
              </section>
            </section>
            <section className='About-study-section-container'>
              <div>
                <h2 className='About-section-title'>Estudando</h2>
              </div>
              <p>
              Atualmente estou estudando <strong>Redux</strong>, pois, durante a realização dos projetos da Trybe, percebi o quanto aprender essa ferramenta ira me ajudar a gerenciar estados em projetos futuros.
              </p>
              <p>Tambem estou estudando o <strong>React Native</strong>, pois, quero aprender mais sobre o mundo do Desenvolvimento Mobile, e por sua familiaridade com ReactJS a curva de aprendizagem é menor.</p>
            </section>
          </section>
      </main>
    );
  };
}

export default About;
