import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";

function App() {

  const {tours} = useGlobalContext()


  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
