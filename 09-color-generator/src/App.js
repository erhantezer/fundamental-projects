import { useState } from "react";
import Values from 'values.js'
import SingleColor from "./pages/SingleColor";
import { toastErrorNotify } from "./helper/toastify";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10)); //! array içinde objeler
  // console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color === "") {
      toastErrorNotify("Unable parse color from string")
    }
    try {
      let colors = new Values(color).all(10)
      setList(colors)
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
            className={`${error ? 'error' : null}`}
          />
          <button className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })}
      </section>
    </>

  );
}

export default App;
