import { useState } from 'react'
import './App.css'
import responseMovies from './utils/responseResults.json'
import responseNotFound from './utils/responseNotFound.json'
import SearchForm from './components/SearchForm'
import ListMovies from './components/movies/ListMovies';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
  const notFoundMovies = responseNotFound;

  const [searchTerm, setSearchTerm] = useState('');

  const handleTerm = (e) => {
    setSearchTerm(e.target.value);
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
            setSearchTerm={e => handleTerm}
          />
          {searchTerm !== '' && <small> Acá va la cantidad de resultados para el término de búsqueda:  {searchTerm}</small>}
          {hasMovies ? <ListMovies movies={movies}/> : <small> No hay peliculas</small>}
        </section>
      </main>
    </div>
  )
}

export default App
