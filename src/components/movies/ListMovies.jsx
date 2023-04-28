import React from 'react'
import Movie from './Movie';
import '../../App.css'

function ListMovies({ movies }) {
    return (
        <article className='movies'>
            {movies.map(movie => (
                <Movie movie={movie} key={movie.imdbID}/>
            ))}
        </article>
    )
}

export default ListMovies