import { useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>
          Movies Search
        </h1>
      </header>
      <main>
        <section>
          <SearchForm />
        </section>
      </main>
    </div>
  )
}

export default App
