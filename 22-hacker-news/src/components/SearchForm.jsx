


const SearchForm = () => {
    

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2>search hacker news</h2>
            <input
                type="text"
                className="form-input"
                value={null}
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchForm