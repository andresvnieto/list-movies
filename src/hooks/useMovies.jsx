import { useState } from "react";
import { fetchMovies } from "../services/fetchAPI";

async function useMovies(searchTerm) {
    const [movies, setMovies] = useState([]);
    try {
        const res = await fetchMovies(searchTerm);
        const data = await res.json();
        if (!data.hasOwnProperty('Error')) {
            const moviesResults = data.Search;
            setMovies(moviesResults);
        } else {
            setMovies([]);
        }
    } catch (error) {
        throw new Error(error, 'Error al realizar el fetch');
    }
}


