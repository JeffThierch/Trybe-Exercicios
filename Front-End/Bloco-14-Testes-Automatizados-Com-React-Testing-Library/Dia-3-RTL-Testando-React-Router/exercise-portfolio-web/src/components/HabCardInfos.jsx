import React, { Component } from 'react'

export default class HabCardInfos extends Component {
  render() {
    const {uses} = this.props
    return (
      <>
        {uses.map((use, index) => (
          <p key={index}>{use}</p>
        ))}
      </>
    )
  }
}
