import { useGlobalContext } from "./context"



const App = () => {
  const { 
    loading, 
    page, 
    setPage, 
    photos, 
    query, 
    setQury,
    
  } = useGlobalContext();


  return (
    <main>
      <section className="section-center">

      </section>
    </main>
  )
}

export default App