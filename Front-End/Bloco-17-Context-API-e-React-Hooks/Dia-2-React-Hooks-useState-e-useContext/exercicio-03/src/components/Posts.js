import React, {useContext} from 'react';
import MyContext from '../context/MyContext'

const Posts = () => {
  const {state: {posts}} = useContext(MyContext)
  return (
        <ul>
          {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      )
};


export default Posts;