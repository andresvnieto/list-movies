import { useState } from 'react'
import './App.css'
import responseMovies from './utils/responseResults.json'
import responseNotFound from './utils/responseNotFound.json'
import SearchForm from './components/SearchForm'
import ListMovies from './components/movies/ListMovies';
import { fetchMovies } from "./services/fetchAPI";

function App() {

  const moviesResponse = responseMovies.Search;
  const hasMovies = moviesResponse?.length > 0;
  const notFoundMoviesResponse = responseNotFound;

  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchByTerm = async (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(e.target);
    console.log('====================================');
    try {
      const res = await fetchMovies(searchTerm);
      const data = await res.json();
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      if (!data.hasOwnProperty('Error')) {
        const movies = data.Search;
        setMovies(movies);
        setIsSearching(true);
      } else {
        setMovies([]);
      }
    } catch (error) {
      throw new Error(error, 'Error al realizar el fetch');
    }
  }

  const clearSearch = (e) => {
    console.log(e.target);
    setMovies([]);
  }

  return (
    <div className='container'>
      <header>
        <h1>
          Movies Search
        </h1>
      </header>
      <main>
        <section>
          <SearchForm
            searchTerm={searchTerm}
            searchByTerm={searchByTerm}
            setSearchTerm={e => handleTerm}
            clearSearch={clearSearch}
          />

          {
            movies.length > 0 &&
            <small> {movies.length} resultados para el término de búsqueda: {searchTerm}</small>
          }

          {movies.length > 0 && <ListMovies movies={movies} />}
        </section>
      </main>
    </div>
  )
}

export default App
