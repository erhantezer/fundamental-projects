import { useState } from "react"


const SearchForm = () => {
    const [search, setSearch] = useState("");

    const searchCocktail = (e) => {
        setSearch(e.target.value)
    }

const handleSubmit = (e) => {
    e.preventDefault()
}


    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="search">
                    search your favorite cocktail
                </label>
                <input 
                type="text" 
                id="search"
                name="search"
                value={search}
                placeholder="Enter cocktail ..."
                onChange={searchCocktail}
                />
            </form>
        </section>
    )
}

export default SearchForm