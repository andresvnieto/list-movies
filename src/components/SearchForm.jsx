import { useState } from "react";

function SearchForm({ setSearchTerm, searchByTerm, clearSearch }) {
    return (
        <>
            <form>
                <input type="text" placeholder="Superman, Avengers..." name="search" onChange={setSearchTerm()} />
                <button onClick={clearSearch} type="button"> Borrar </button>
                <button onClick={searchByTerm} type="button"> Buscar </button >
            </form>
        </>
    )
}

export default SearchForm