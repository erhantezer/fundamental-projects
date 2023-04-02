import { Outlet, createBrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Review from "../pages/Review";
import NotFound from "../components/NotFound";


//! ******* NEW ROUTER ********//

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        ),
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Review/>
            },
        ],
    },
]);
