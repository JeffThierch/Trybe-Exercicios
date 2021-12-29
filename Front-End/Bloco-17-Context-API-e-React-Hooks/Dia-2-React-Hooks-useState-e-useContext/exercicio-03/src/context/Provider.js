import React, {useState} from 'react'
import MyContext from './MyContext'
import {getPostsBySubreddit} from '../services/redditAPI'

export default function Provider({children}) {
  const [state, changeStateInfos] = useState(
    {
      posts: [],
      availableSubreddits: ['reactjs', 'frontend'],
      selectedSubreddit: 'reactjs',
      isFetching: false,
      lastUpdated: Date.now(),
    }
  )

  const fetchPosts = async (subreddit) => {
    changeStateInfos((prevState) => ({
      ...prevState,
      isFetching: true
    }))

    const response = await getPostsBySubreddit(subreddit)

    const posts = response.data.children.map((child) => child.data)

    changeStateInfos((prevState) => ({
      ...prevState,
      posts,
      lastUpdated: Date.now(),
      isFetching: false,
    }))
  }

  const selectSubreddit = (nextSubreddit) => {
    changeStateInfos((prevState) => ({
      ...prevState,
      selectedSubreddit: nextSubreddit
    }))
    fetchPosts(nextSubreddit)
  }

  const refreshSubreddit = (selectedSubreddit) => {
    changeStateInfos((prevState) => ({
      ...prevState,
      selectedSubreddit
    }))
    fetchPosts(selectedSubreddit)
  }

  const handleRefreshClick = (event) => {
    event.preventDefault();
    const {selectedSubreddit} = state
    refreshSubreddit(selectedSubreddit)
  }

  const CONTEXT_VALUE = {
    state,
    fetchPosts,
    selectSubreddit,
    refreshSubreddit,
    handleRefreshClick
  }
  return (
    <MyContext.Provider value={CONTEXT_VALUE}>
      {children}
    </MyContext.Provider>
  )
}