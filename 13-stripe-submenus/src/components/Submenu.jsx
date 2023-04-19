import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
    const {submenu, page, location} = useGlobalContext();
    
    return (
        <div>Submenu</div>
    )
}

export default Submenu