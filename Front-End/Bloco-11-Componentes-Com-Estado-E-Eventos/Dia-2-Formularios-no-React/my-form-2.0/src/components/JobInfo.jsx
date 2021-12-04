import React, { Component } from 'react'

export default class JobInfo extends Component {
  render() {
    return (
      <fieldset>
         <legend>Job Info</legend>
         <div>
            <label htmlFor='user-resume'>
            Resumo do currículo:
              <textarea cols="50" rows="5" id='user-resume'></textarea>
            </label>
         </div>
        <div>
            <label htmlFor='user-job'>
              Cargo:
              <textarea cols="50" rows="5" id='user-job'></textarea>
            </label>
        </div>
        <div>
            <label htmlFor='user-job-description'>
              Descricao do cargo:
              <textarea cols="50" rows="5" id='user-job-description'></textarea>
            </label>
        </div>
      </fieldset>
    )
  }
}
