import React from 'react';
import { render } from 'react-dom';
import Movie from '../components/Movie';
import propTypes from 'prop-types';
import axios from 'axios';
import './Home.css';

class Home extends React.Component {

  state = {
    isLoading : true,
    movies : []
  };
  
  getMovies = async () => {
    const url = "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    const {data : {data : {movies}}} = await axios.get(url);
    this.setState({movies : movies, isLoading : false})
    console.log(this.state.movies);
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, isLoading } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      )
        : (
          <div className="movies">
            {movies.map(movie => {
              return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
          })}
          </div>
        )}
    </section>
  }
}

export default Home;
