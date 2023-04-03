
## App.js

 ```js
 

import { useGlobalContext } from "./context";
import Home from "./pages/Home";
import items from "./helper/data"

function App() {
const {setMenuItems } = useGlobalContext()

  const filterItems = (category) => {
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    console.log(newItems)
    setMenuItems(newItems)
  }

  return (
    <>
      <Home filterItems={filterItems}/>
    </>
  );
}

export default App;

 ```


## Home.js

 ```js
 
import React from 'react'
import Categories from '../components/Categories'
import Menu from '../components/Menu'

const Home = ({ filterItems }) => {
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} />
                <Menu/>
            </section>
        </main>
    )
}

export default Home

 ```


## Categories.jsx

 ```js
 
import useCategories from '../hooks/useCategories';

const Categories = ({ filterItems }) => {
    const {categories} = useCategories();

    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;

 ```


## Menu.jsx

 ```js

import React from 'react';
import { useGlobalContext } from '../context';

const Menu = () => {
    const { menuItems } = useGlobalContext()

    return (
        <div className='section-center'>
            {menuItems.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;


 ```


## useCategories.js

 ```js

import { useState } from "react";
import items from "../helper/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]
console.log(allCategories)

const useCategories = () => {
    const [categories, setCategories] = useState(allCategories);


    return { categories, setCategories }
}

export default useCategories
 
 ```


## context.js

 ```js

import { createContext, useContext, useState } from "react";
import items from './helper/data';

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {
    const [menuItems, setMenuItems] = useState(items);

    return (
        <AppContext.Provider value={{ menuItems, setMenuItems }}>
                {children}
            </AppContext.Provider>
        );
}

 ```