import React from 'react'
import Movie from './Movie';
import '../../App.css'

function ListMovies({ movies }) {
    console.log(movies);
    return (
        <article className='movies'>
            {movies.map(movie => (
                <Movie movie={movie}/>
            ))}
        </article>
    )
}

export default ListMovies