import { useState } from "react";
import useFetch from "./hooks/useFetch";


function App() {
  const {loading, veri} = useFetch()
  console.log(veri)

  return (
    <>
      
    </>
  )
}

export default App
