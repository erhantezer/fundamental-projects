import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import { useGlobalContext } from "./context";
import usePrevPer from "./hooks/usePrevPer";
import useNextPer from "./hooks/useNextPer";
import useRandomPer from "./hooks/useRandomPer";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/router";



function App() {
  const { name, job, image, text } = useGlobalContext();
  const {prevNum} =usePrevPer();
  const {nextNum} = useNextPer();
  const {randomPerson} = useRandomPer();

  const Review = lazy(() => import("./pages/Review"));

  return (
    <div>
      {/* <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/> */}
      <Navbar/>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Suspense fallback={<div>Loading....</div>}>
              <Review/>
          </Suspense>
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
