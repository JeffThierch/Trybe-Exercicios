const fetchAPI = async (subreddit) => {
  const dataObj = {
    data: [],
    error: '',
  };
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    const { data: { children } } = data;

    const postsData = children.map(({ data: { title, url, id } }) => ({ title, url, id }));

    dataObj.data = postsData;

    return dataObj;
  } catch (err) {
    dataObj.error = err;
    return dataObj;
  }
};

export default fetchAPI;
