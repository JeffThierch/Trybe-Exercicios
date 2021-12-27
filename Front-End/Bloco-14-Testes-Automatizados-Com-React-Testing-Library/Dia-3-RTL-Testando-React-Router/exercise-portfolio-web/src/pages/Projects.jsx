/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Projects.css'
import images from '../imgsImport.js'
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data'

class Projects extends React.Component {
  render() {
    return (
      <main data-testid='page-title'>
        <section className='Projects-title-container Home-animation'>
          <h1 className='Projects-title'>Meus Projetos</h1>
        </section>
        <section className='Projects-projects-card-container Home-animation'>
         {projects.map(({name, video}) => {
            return <ProjectCard name={name} video={images[video]} />
         }
         
         )}
        </section>
      </main>
    );
  };
}

export default Projects;
