import React from 'react';
import MyContext from '../MyContext'

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

const Selector = () => (
  <MyContext.Consumer>
    {
    ({selectedSubreddit, availableSubreddits, selectSubreddit}) => (
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
    }
  </MyContext.Consumer>
);


export default Selector;