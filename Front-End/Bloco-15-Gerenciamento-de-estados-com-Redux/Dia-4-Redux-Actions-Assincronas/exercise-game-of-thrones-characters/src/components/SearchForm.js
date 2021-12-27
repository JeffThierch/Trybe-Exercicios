import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCharacter} from '../actions'
import './SearchForm.css';


/* finaliza */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const {fetchCharacter} = this.props

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  fetchCharacter(inputText);

}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange}
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchCharacter: (charName) => dispatch(fetchCharacter(charName))
})

SearchForm.propTypes = {
  fetchCharacter: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SearchForm)

