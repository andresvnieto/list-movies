
function SearchForm() {
    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log('Envio del formulario');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Superman, Avengers..." name="search" />
                <button > Buscar </button>
            </form>
            <small> Acá va la cantidad de resulados para el término de búsqueda </small>
        </>
    )
}

export default SearchForm