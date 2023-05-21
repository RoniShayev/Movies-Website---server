const movieBL = require('../models/movieBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let movies = await movieBL.getMovies();
  return resp.json(movies);
  
})

router.get('/:movieid', async function(req, resp)
{
  let movieid = req.params.movieid;
  let movie = await movieBL.getMovie(movieid);
  return resp.json(movie);
})

router.post('/', async function(req,resp)
{
  let mov = req.body;
  let movieid = await movieBL.addMovie(mov)
  return resp.json(movieid);
})

router.put('/:movieid', async function(req,resp)
{
  let mov = req.body;
  let movieid = req.params.movieid;
  await movieBL.updateMovie(mov,movieid)
  return resp.json("Updated !");
})

router.delete('/:movieid', async function(req,resp)
{
  let movieid = req.params.movieid;
  await movieBL.deleteMovie(movieid)
  return resp.json("Deleted !");
})


module.exports = router