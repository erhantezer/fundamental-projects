import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Review from "./pages/Review";


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
    </div>
  );
}

export default App;
