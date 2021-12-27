import React, { Component } from 'react'
import HabCardInfos from './HabCardInfos';

export default class HabCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      haveClicked: false
    }
  }

  renderUses = () => {
    const {haveClicked} = this.state
    haveClicked ? (this.setState({
      haveClicked: false
    })) : (this.setState({
      haveClicked: true
    }))
    
    
  }
  render() {
    const {name, imgURL, utilization} = this.props
    const {haveClicked} = this.state
    return (
      <li onClick={this.renderUses} className='hab-card-container'>
        <h4>{name}</h4>
        <img src={imgURL} alt={`${name} logo`} />
        {haveClicked ? <HabCardInfos uses={utilization} /> : ''}
      </li>
    )
  }
}
