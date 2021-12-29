import React, { Component } from 'react';
import MyContext from './context/MyContext';
import Posts from './components/Posts';
import Selector from './components/Selector';


export default class App extends Component {
  componentDidMount() {
    const {state, fetchPosts} = this.context
    const {selectedSubreddit} = state
    fetchPosts(selectedSubreddit)
  }

  renderLastUpdatedAt() {
    const { lastUpdated } = this.context.state;

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { isFetching } = this.context.state;
    const { handleRefreshClick } = this.context;

    return (
      <button
        type="button"
        onClick={(event) => handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const state = this.context
    console.log(state);
    const {
      posts,
      isFetching,
      lastUpdated,
    } = this.context.state;

    const isEmpty = posts.length === 0;
    return (
      <div>
        <Selector/>
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </div>
    )
  }
}

App.contextType = MyContext;
