# NAVBAR PROJECT

## App.js
```js
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
```

## Navbar.jsx
```js
import { useState, useRef, useEffect } from "react";
import logo from "../logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "../helper/data";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height; 
        console.log(linksHeight)
        //! Bir öğenin boyutunu ve görüntü alanına göre konumunu döndürür
        // const linksHeight = 168;
        show ? (linksContainerRef.current.style.height = `${linksHeight}px`) :
            (linksContainerRef.current.style.height = "0px");
    }, [show]);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className="logo" alt="logo" />
                    <button className="nav-toggle" onClick={() => setShow(!show)}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
```