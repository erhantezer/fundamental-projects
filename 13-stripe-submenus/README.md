# STRIPE-SUBMENU

## App.jsx
```js
import Home from './pages/Home'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
```

## Home.jsx
```js
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Submenu from '../components/Submenu'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Hero/>
            <Submenu/>
        </>
    )
}

export default Home
```

## Navbar.jsx
```js
import logo from '../assets/images/logo.svg';
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from '../context';


const Navbar = () => {
    const { closeSubmenu, openSidebar, openSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        console.log(page)
        const tempBtn = e.target.getBoundingClientRect();
        console.log(tempBtn)
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt="logo" />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
```

## Hero.jsx
```js
import React from 'react';
import phoneImg from '../assets/images/phone.svg';
import { useGlobalContext } from '../context';

const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
    
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} className='phone-img' alt='phone' />
                </article>
            </div>
        </section>
    );
};

export default Hero;

```

## Sidebar.jsx
```js
import { useGlobalContext } from '../context';
import sublinks from '../helper/data';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const { sidebar, closeSidebar } = useGlobalContext();

    return (
        <div className={`${sidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <aside className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className='sidebar-sublinks'>
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a href={url} key={index}>
                                                {icon}
                                                {label}
                                            </a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
```

## Submenu.jsx
```js
import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
    const { submenu, page:{links, page}, location } = useGlobalContext();
    const container = useRef();
    const [colums, setColums] = useState('col-2');

    useEffect(() => {
        setColums("col-2");
        const sub = container.current;
        const { center, bottom } = location;
        sub.style.left = `${center}px`;
        sub.style.top = `${bottom}px`;
        console.log(links);
        if (links.length === 3) {
            setColums('col-3')
        }
        if (links.length > 3) {
            setColums('col-4')
        }
    }, [page, location, links])

    return (
        <aside className={`${submenu ? 'submenu show' : 'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${colums}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu
```

## context.jsx
```js
import { createContext, useContext, useState } from "react";
import sublinks from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [page, setPage] = useState({ page: "", links: [] });
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setSidebar(true)
    };

    const closeSidebar = () => {
        setSidebar(false);
    }

    const openSubmenu = (text, coordinates) => {
        setSubmenu(true)
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates)
        
    };

    const closeSubmenu = () => {
        setSubmenu(false)
    };


    return (
        <AppContext.Provider value={{
            sidebar,
            submenu,
            page,
            location,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
        }}>
            {children}
        </AppContext.Provider>
    )
}
```

## data.jsx
```js
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const sublinks = [
    {
        page: 'products',
        links: [
            { label: 'payment', icon: <FaCreditCard />, url: '/products' },
            { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
            { label: 'connect', icon: <FaCreditCard />, url: '/products' },
        ],
    },
    {
        page: 'developers',
        links: [
            { label: 'plugins', icon: <FaBook />, url: '/products' },
            { label: 'libraries', icon: <FaBook />, url: '/products' },
            { label: 'help', icon: <FaBook />, url: '/products' },
            { label: 'billing', icon: <FaBook />, url: '/products' },
        ],
    },
    {
        page: 'company',
        links: [
            { label: 'about', icon: <FaBriefcase />, url: '/products' },
            { label: 'customers', icon: <FaBriefcase />, url: '/products' },
        ],
    },
];

export default sublinks;

```

