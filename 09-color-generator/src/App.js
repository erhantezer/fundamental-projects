import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
  <>
      <section className="container">
        <h3>color genrator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className=""
          />
          <button className="btn">
            submit
          </button>
        </form>
      </section>
      <section>

      </section>
  </>

  );
}

export default App;
