import React, {useContext} from 'react';
import MyContext from '../context/MyContext'

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

const Selector = () => {
  const {
    state: {selectedSubreddit, availableSubreddits},
    selectSubreddit
  } = useContext(MyContext)
  
  return (
      <span>
        <h1>{`Selected: ${selectedSubreddit}`}</h1>
        <select
          onChange={(e) => selectSubreddit(e.target.value)}
          value={selectedSubreddit}
        >
          {renderOptions(availableSubreddits)}
        </select>
      </span>
  )
};


export default Selector;