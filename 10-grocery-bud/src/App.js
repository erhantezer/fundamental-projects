import { useState } from "react";

const getLocalStore = () => {
  let list = localStorage.getItem("list")
  return list ? JSON.parse(list) : []
}

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, mdg: "", type: "" });
  const [list, setList] = useState(getLocalStore);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      setAlert(true, "danger", "please enter value")
    } else if (name) {
      
    }

  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">

          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
