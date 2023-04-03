
import { useGlobalContext } from "./context";
import Home from "./pages/Home";
import items from "./helper/data"



function App() {
const {setMenuItems } = useGlobalContext()

  const filterItems = (category) => {
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    console.log(newItems)
    setMenuItems(newItems)
  }

  return (
    <>
      <Home filterItems={filterItems}/>
    </>
  );
}

export default App;
