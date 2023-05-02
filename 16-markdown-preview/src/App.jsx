import { useState } from "react"

function App() {
 const [makdown, setMarkdown] = useState()

  return (
    <main>
        <section className="section">
          <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10"
          ></textarea>
        </section>
    </main>
  )
}

export default App
