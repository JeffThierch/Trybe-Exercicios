import React, { Component } from 'react'
import '../styles/ProjectCard.css'
import Video from './Video'

export default class ProjectCard extends Component {
  render() {
    const {name, video} = this.props
    return (
      <section className='project-card'>
          <div className='project-card-title-container'>
            <h2>{name}</h2>
          </div>
          <Video src={video} className={'video'} />
         {/*  <video playsInline autoPlay muted loop  alt=""> /
            <source src={video} type='video/mp4' />
          </video> */}
      </section>
    )
  }
}
