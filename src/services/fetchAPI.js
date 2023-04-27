export const fetchMovies = (term) => {
    return fetch(`${process.env.REACT_APP_URL}=${term}&apikey=${process.env.REACT_APP_API_KEY}`)
}