import { useState } from "react";
import useMovieFetch from "../hooks/useMovieFetch"


const SearchForm = () => {
    const [query, setQuery] = useState("batman");
    const { error } = useMovieFetch(`&s=${query}`)

    console.log(query)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
    }
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2>search movies</h2>
            <input
                type="text"
                className="form-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    )
}

export default SearchForm;