import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import SingleCocktail from "../pages/SingleCocktail";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cocktail/:id" element={<PrivateRouter/>}>
          <Route path="" element={<SingleCocktail/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter