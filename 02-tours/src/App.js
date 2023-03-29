import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";

function App() {

  const { tours } = useGlobalContext()

  const Tours = lazy(() => import("./pages/Tours"))

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
        <Tours />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
