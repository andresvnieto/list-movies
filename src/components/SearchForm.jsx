import { useState } from "react";
import { fetchMovies } from "../services/fetchAPI";

function SearchForm({ searchTerm, setSearchTerm }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetchMovies(searchTerm);
            console.log(res);
        } catch (error) {
            throw new Error(error, 'Error al realizar el fetch');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Superman, Avengers..." name="search" onChange={setSearchTerm()} />
                <button> Buscar </button>
            </form>
        </>
    )
}

export default SearchForm