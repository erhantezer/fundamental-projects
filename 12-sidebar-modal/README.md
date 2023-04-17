# SIDEBAR-MODAL

## App.js
```js
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Home/>
      <Modal/>
      <Sidebar/>
    </>
  );
}

export default App;

```

## context.js
```js
import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const openSidebar = () => {
        setIsSidebar(true);
        console.log("open sidebar")
    };

    const closeSidebar = () => {
        setIsSidebar(false)
        console.log("close sidebar")
    };

    const openModal = () => {
        setIsModal(true)
        console.log("open modal")
    };

    const closeModal = () => {
        setIsModal(false)
        console.log("close modal")
    };

    return (
        <AppContext.Provider
            value={{
                isSidebar,
                isModal,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
```

## Home.jsx
```js
import {FaBars} from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();
    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars/>
            </button>
            <button onClick={openModal} className="btn">
                show modal
            </button>
        </main>
    )
}

export default Home
```

## Modal.jsx
```js
import React from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
    const {isModal, closeModal} = useGlobalContext();

    return (
        <div className={isModal ? "modal-overlay show-modal" : "modal-overlay"}>
            <div className='modal-container'>
                <h3>modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <FaTimes/>
                </button>
            </div>
        </div>
    )
}

export default Modal
```

## Sidebar.jsx
```js
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links, social } from "../helper/data";
import logo from "../logo.svg";

const Sidebar = () => {
    const { isSidebar, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="coding addict" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}{text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
```