import React from 'react';
import '../styles/Home.css'
import backgroundVideo from '../assets/videos/snow-cat.mp4'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Video from '../components/Video';


class Home extends React.Component {
  render() {
    return (
      <>
      <Video src={backgroundVideo} className='Home-video' />
       {/*  <video playsInline autoPlay muted loop className='Home-video'>
            <source src={backgroundVideo} type='video/mp4'/>
            Your browser does not support the video tag. I suggest you upgrade your browser.
        </video> */}
        <main className='Home-main-container'>
          <section className='Home-section-title-container'>
            <h1 className='Home-animation'>Jeff Thierch</h1>
            <h2 className='Home-animation'>Full Stack Developer</h2>
          </section>
          <section className='Home-infos-container'>
              <h3 className='Home-animation'>
                Estudante de Desenvolvimento Web Full Stack | 
                <a className='Home-trybe-link' href='https://www.betrybe.com/' rel="noopener noreferrer" target={"_blank"}>Trybe</a>
              </h3>
              <div className='Home-social-media-contaner'>
              <a href="https://www.linkedin.com/in/jeffthierch/" rel="noopener noreferrer" target={"_blank"}>
                <FaLinkedinIn className='Home-social-media-icon Home-linkedin Home-animation'/>
              </a>
              <a href="https://github.com/JeffThierch" rel="noopener noreferrer" target={"_blank"}>
                <FaGithub className='Home-social-media-icon Home-github Home-animation'/>
              </a>
              </div>
          </section>
        </main>
      </>
    );
  };
}

export default Home;
