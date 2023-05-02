import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState()

  return (
    <main>
      <section className="section">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </main>
  )
}

export default App
