import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Review from "./pages/Review";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
