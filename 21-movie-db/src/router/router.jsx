import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SingleMovies from "../pages/SingleMovies";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },

    {
        path: "movies/:id",
        element: <SingleMovies/>
    },
])