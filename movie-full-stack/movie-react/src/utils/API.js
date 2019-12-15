import axios from "axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movie");
  },
  // Gets the movie with the given id
  getMovie: function(id) {
    return axios.get("/api/movie/" + id);
  },
  // Deletes the movie with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/movie/" + id);
  },
  // Saves a movie to the database
  saveMovie: function(movieData) {
    return axios.post("/api/movie", movieData);
  },
  // Gets a random cocktail
  getRandomCocktail: function() {
    console.log("calling cocktail");
    return axios.get("/api/cocktail");
  }
};
