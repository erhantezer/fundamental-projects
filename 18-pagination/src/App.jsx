import { useState } from "react";
import useFetch from "./hooks/useFetch";
import Follower from "./components/Follower";


function App() {
  const {loading, veri} = useFetch()
  console.log(veri)

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {null.map((follower) => {
            return <Follower/>
          })}
        </div>
      </section>
    </main>
  )
}

export default App
