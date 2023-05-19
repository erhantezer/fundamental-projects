import { useState } from "react";
import data from "./data"
import Article from "./Article";


const getStorageTheme = () => {
  
}

function App() {
  const [theme, setTheme] = useState("light-theme");


  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item, index) => {
          return <Article key={index} {...item}/>
        })}
      </section>
    </main>
  )
}

export default App
