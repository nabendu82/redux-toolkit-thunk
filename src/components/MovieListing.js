import React from 'react'
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from '../features/movies/movieSlice';
import MovieCard from './MovieCard';
import './MovieListing.css';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    console.log(movies);
    
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {movies && movies.length && 
                        movies.map(movie => <MovieCard key={movie.id} data={movie} />)
                    }
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {movies && movies.length && 
                        shows.map(show => <MovieCard key={show.id} data={show} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieListing
