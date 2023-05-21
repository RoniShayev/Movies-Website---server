const Movie = require('./movieModel');

const getMovies = () =>
{
  return Movie.find({})
  
}


const getMovie = (id) =>
{
  return Movie.findById(id)
}

const addMovie = async (mov) =>
{
    let newmov = new Movie(mov);
    await newmov.save();
    return newmov._id
}

const updateMovie = async (mov, id) =>
{
    await Movie.findByIdAndUpdate(id,mov)
}

const deleteMovie = async (id) =>
{
    await Movie.findByIdAndDelete(id)
}

module.exports = {getMovies,getMovie,addMovie,updateMovie,deleteMovie};