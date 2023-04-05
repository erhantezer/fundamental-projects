## context.js

```js
import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


export const AppContextProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = 'https://course-api.com/react-tabs-project';

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const newJobs = await response.json()
            // const {data} = await axios(url)
            console.log(newJobs)
            setJobs(newJobs)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(jobs)

    return (
        <AppContext.Provider value={{ jobs, loading }}>
            {children}
        </AppContext.Provider>
    )
}

```


## App.js

```js
import { useState } from "react";
import { useGlobalContext } from "./context";
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
  const { jobs, loading } = useGlobalContext();
  const [value, setValue] = useState(0);
  console.log(jobs)

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value] || []; //! jobs başta boş geldiği için boşsa boş array döndür dedim hatayı kaldırmak için
  //! short cut yöntemleri önemli
  //! ve veya yöntemlerinden meydana gelmektedir && , ||, birde react optional chaining ? işareti boş veya undifined değilse yap demek

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs?.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
          <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties?.map((duty, index) => {
            return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"/>
                  <p>{duty}</p>
                </div>
              )
          })}
          </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;

```