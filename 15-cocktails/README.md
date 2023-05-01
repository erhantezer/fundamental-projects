# COCKTAILS

## App.jsx
```js
import AppRouter from "./router/AppRouter";

function App() {
  
  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App

```

## AppRouter.jsx
```js
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
```

## Navbar.jsx
```js
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="logo" />
                </NavLink>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">about</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
```


## context.jsx
```js
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data);
            const { drinks } = data
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <AppContext.Provider
            value={{ loading, cocktails, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }

```

## Home.jsx
```js
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const Home = () => {
    return (
        <>
            <SearchForm/>
            <CocktailList/>
        </>
    )
}

export default Home
```

## SearchForm.jsx
```js
import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    )
}

```

## CocktailList.jsx
```js
import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function CocktailList() {
    const { cocktails, loading } = useGlobalContext()

    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }

    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

```

## Cocktail.jsx
```js
import React from 'react'
import { Link } from 'react-router-dom';

export default function Cocktail({ image, name, id, info, glass }) {

    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={name} />
            </div>
            <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                    details
                </Link>
            </div>
        </article>
    )
}

```

## SingleCocktail.jsx
```js
import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
    const { id } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data = await response.json()
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getCocktail()
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail

        return (
            <section className='section cocktail-section'>
                <Link to='/' className='btn btn-primary'>
                    back home
                </Link>
                <h2 className='section-title'>{name}</h2>
                <div className='drink'>
                    <img src={image} alt={name}></img>
                    <div className='drink-info'>
                        <p>
                            <span className='drink-data'>name :</span> {name}
                        </p>
                        <p>
                            <span className='drink-data'>category :</span> {category}
                        </p>
                        <p>
                            <span className='drink-data'>info :</span> {info}
                        </p>
                        <p>
                            <span className='drink-data'>glass :</span> {glass}
                        </p>
                        <p>
                            <span className='drink-data'>instructons :</span> {instructions}
                        </p>
                        <p>
                            <span className='drink-data'>ingredients :</span>
                            {ingredients.map((item, index) => {
                                return item ? <span key={index}> {item}</span> : null
                            })}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

```

## Error.jsx
```js
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <section className="error-page section">
            <div className="error-container">
                <h1>oops! it's a dead end</h1>
                <Link to="/" className="btn btn-primary">
                    back home
                </Link>
            </div>
        </section>
    );
}

```