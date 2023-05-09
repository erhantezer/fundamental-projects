# PAGINATION

## App.jsx
```js
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

```

## Follower.jsx
```js
const Follower = ({ avatar_url, login, html_url }) => {
    return (
        <article className='card'>
            <img src={avatar_url} alt={login} />
            <h4>${login}</h4>
            <a href={html_url} className='btn'>
                view profile
            </a>
        </article>
    )
}

export default Follower
```

## utils.jsx
```js

//! 10 arlı array oluşturmak için kullanılmıştır
//(10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]


const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)
    })

    return newFollowers
}

export default paginate;


//! Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
    //? const range = (start, stop, step) =>
    //?     Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    //! Generate numbers range 0..4
    //? range(0, 4, 1);
    // [0, 1, 2, 3, 4]

    //! Generate numbers range 1..10 with step of 2
    //? range(1, 10, 2);
    // [1, 3, 5, 7, 9]
```

## useFetch.jsx
```js
import { useEffect, useState } from 'react';
import paginate from '../helpers/utils';


const url = 'https://api.github.com/users/erhantezer/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [veri, setVeri] = useState([]);


    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setVeri(paginate(data))
            setLoading(false); 
            console.log(veri)    
        } catch (error) {
            console.log(error)
        }
    };

    
    useEffect(() => {
        getProducts()
    },[]);


    return { loading, veri }
}

export default useFetch;
```