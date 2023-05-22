import useMovieFetch from "../hooks/useMovieFetch"


const SearchForm = () => {
    const {query, setQuery, error} = useMovieFetch()
    return (
        <form className="search-form">
            <h2>search movies</h2>
            <input 
            type="text" 
            placeholder="Enter movie"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            
        </form>
    )
}

export default SearchForm