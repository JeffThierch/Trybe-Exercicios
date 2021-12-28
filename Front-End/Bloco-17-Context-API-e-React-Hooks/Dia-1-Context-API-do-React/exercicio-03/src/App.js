import React, { Component } from 'react';
import MyContext from './MyContext';
import Posts from './components/Posts';
import Selector from './components/Selector';
import {getPostsBySubreddit} from './services/redditAPI'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      availableSubreddits: ['reactjs', 'frontend'],
      selectedSubreddit: 'reactjs',
      isFetching: false,
      lastUpdated: Date.now(),
    }
  }

  componentDidMount() {
    const {selectedSubreddit} = this.state
    this.fetchPosts(selectedSubreddit)
  }

  componentDidUpdate(_prevProps, prevState) {
    const { state } = this;

    if (prevState.selectedSubreddit !== state.selectedSubreddit) {
      this.fetchPosts(state.selectedSubreddit)
    }
  }

  fetchPosts = (subreddit) => {
    this.setState({
      isFetching: true
    }, async () => {
      const response = await getPostsBySubreddit(subreddit)
      const posts = response.data.children.map((child) => child.data)
      this.setState({
        posts,
        lastUpdated: Date.now(),
        isFetching: false
      })
    })
  }

  selectSubreddit = (nextSubreddit) =>{
    this.setState({
      selectedSubreddit: nextSubreddit
    })
  }

  refreshSubreddit = (selectedSubreddit) => {
    this.fetchPosts(selectedSubreddit)
  }

  handleRefreshClick(event) {
    event.preventDefault();
    const {selectedSubreddit} = this.state
    this.refreshSubreddit(selectedSubreddit)
  }

  renderLastUpdatedAt() {
    const { lastUpdated } = this.state;

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { isFetching } = this.state;

    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {

    const {
      posts = [],
      isFetching,
      lastUpdated,
    } = this.state;

    const isEmpty = posts.length === 0;

    const MY_CONTEXT_INFOS = {
      ...this.state,
      selectSubreddit: this.selectSubreddit
    }

    return (
      <MyContext.Provider value={MY_CONTEXT_INFOS}>
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
      </MyContext.Provider>
    )
  }
}
