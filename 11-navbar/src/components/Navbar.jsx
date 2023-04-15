import { useState } from "react";
import logo from "../logo.svg";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className="logo" alt="logo" />
                    <button className="nav-toggle" onClick={() => setShow(!show)}>
                        <FaBars/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar