import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Follower from "./components/Follower";


function App() {
  const {loading, veri} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  

  useEffect(() => {
    setFollowers(veri[page])
  }, [loading,page]);
  
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }



  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers?.map((follower) => {
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
        {!loading && (
          <div className="btn-container">
              <button className="prev-btn" onClick={prevPage}>
                prev
              </button>
              {veri.map((item, index) => {
              return (
                <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
              })}
              <button className="next-btn" onClick={nextPage}>
                next
              </button>
          </div>
          
          )}
      </section>
    </main>
  )
}

export default App;
