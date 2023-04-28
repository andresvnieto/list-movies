export const fetchMovies = (term) => {
    return fetch(`${import.meta.env.VITE_APP_URL}=${term}&apikey=${import.meta.env.VITE_API_KEY}`)
}