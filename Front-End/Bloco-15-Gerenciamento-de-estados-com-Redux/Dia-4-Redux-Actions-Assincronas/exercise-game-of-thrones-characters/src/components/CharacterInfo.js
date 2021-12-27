import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const {character, loading, error} = this.props

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  character: state.ApiCharInfos.character[0],
  loading: state.ApiCharInfos.isLoading,
  error: state.ApiCharInfos.error
})

export default connect(mapStateToProps, null)(CharacterInfo)


CharacterInfo.propTypes = {
  character: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

