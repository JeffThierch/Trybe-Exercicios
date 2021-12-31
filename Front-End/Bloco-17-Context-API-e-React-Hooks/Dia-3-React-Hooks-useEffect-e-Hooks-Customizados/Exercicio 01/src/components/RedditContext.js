import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();

const { Provider, Consumer } = Context;

function RedditProvider({ children }) {

  const [postsBySubreddit, addPosts] = useState(
    {
      frontend: {
      },
      reactjs: {
      },
    }
   );

  const [selectedSubreddit, changeSubreddit] = useState('reactjs');

  const [shouldRefreshSubreddit, changeRefreshState] = useState(false);

  const [isFetching, changeFetchState] = useState(false);

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ selectedSubreddit, shouldRefreshSubreddit])


  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

    changeRefreshState(false)
    changeFetchState(true)

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }

  const shouldFetchPosts = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  }

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    changeRefreshState(false)
    changeFetchState(false)

    addPosts((prevState) => ({
      ...prevState,
      [selectedSubreddit]: {
        items,
        lastUpdated
      }
    }));
  }

  const handleFetchError = (error) => {

    changeRefreshState(false);
    changeFetchState(false);

    addPosts((prevState) => ({
      ...prevState,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      }
    }));
  }

  const handleSubredditChange = (selectedSubreddit) => {
    changeSubreddit(selectedSubreddit)
  }

  const handleRefreshSubreddit = () => {
    changeRefreshState(true)
  }

  const context = {
    postsBySubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectedSubreddit,
    selectSubreddit: handleSubredditChange,
    fetchPosts: fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

    return (
      <Provider value={context}>
        {children}
      </Provider>
    );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };