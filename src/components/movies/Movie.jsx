import '../../App.css'

function Movie({ movie }) {
    return (
        <div key={movie.imdbID} className='movie'>
            <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <h6>{movie.Year}</h6>
        </div>
    )
}

export default Movie