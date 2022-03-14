const express = require ('express');

const router = express.Router();

const posts = [{id: 1, post: 'ola'}]

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const postById = posts.findIndex((post) => post.id === parseInt(id))

  if(!id || postById === -1) {
    return res.status(404).json({message: 'post not found'})
  }

  res.status(200).json(posts[postById])
})

router.get('/', (_req, res) => {

  if (posts.length === 0) {
    return res.status(200).json({posts})
  }
  res.status(200).json(posts)
})

module.exports = router