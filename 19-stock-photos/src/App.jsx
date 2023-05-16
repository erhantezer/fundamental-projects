import Photo from "./Photo";
import { useGlobalContext } from "./context";
import {FaSearch} from "react-icons/fa";


const App = () => {
  const { 
    loading, 
    page, 
    setPage, 
    photos, 
    query, 
    setQuery,
    
  } = useGlobalContext();


const handleSubmit = () => {
  e.preventDefault();
}

if (loading) {
  return <div style={{textAlign:"center"}}>
    <h1 className="loading">Loading...</h1>
    </div>
}

  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
          className="form-input"
          />
          <button style={{cursor:"pointer"}} type="submit" className="submit-btn">
            <FaSearch/>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos?.map((photo, index) => {
            return <Photo key={index} {...photo}/>
          })}
        </div>
      </section>
    </main>
  )
}

export default App