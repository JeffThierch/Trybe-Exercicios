const express = require ('express');

const router = express.Router();

const posts = [{id: 1, post: 'ola'}]

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const postById = posts.findIndex((post) => post.id === parseInt(id))

  console.log(id, postById);

  if(!id || postById === -1) {
    return res.status(404).json({message: 'post not found'})
  }

  res.status(200).json(posts[postById])
})

module.exports = router