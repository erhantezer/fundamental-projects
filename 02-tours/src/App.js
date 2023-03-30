import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";

function App() {

  const { tours, fetchTours } = useGlobalContext()

  const Tours = lazy(() => import("./pages/Tours"))

  return (
    <>
    {tours.length === 0 ? (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours() }>
            refresh
          </button>
        </div>
      </main>
    ) : (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
        <Tours />
      </Suspense>
      <Footer />
    </>
    )}
    </>
  );
}

export default App;
