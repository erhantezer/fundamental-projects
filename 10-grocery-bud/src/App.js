import { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStore = () => {
  let list = localStorage.getItem("list")
  return list ? JSON.parse(list) : []
}

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [list, setList] = useState(getLocalStore);
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value")
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item
      }))
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }

  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  };
  //! uyarıyı fonksiyon halene getirerek state yapısını burda efektif 
  //! hale getiriyoruz başka yerlerde de rahatça kullanmak için


  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  //! listeyi temizlemek için ve bütün array olan yapıyı boşaltmak için silmek için bir fonksiyon yazdık

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };
  //! tıklanıldığında sadece o id ye sahip değer hariç olanları tekrar listeye aktaran filtreleme yaptık


  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  //! edit butonuna basılınca gönderilen id ile find yapılan id eşleşen title ını 
  //! name olarak setliyoruz yani imputa geri gönderiyoruz

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  //! list state ti her değiştiğinde localstorage ye list adında yeni veri girer

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList} >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
