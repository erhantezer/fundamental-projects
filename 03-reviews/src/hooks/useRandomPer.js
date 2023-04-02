import React from 'react'
import { useGlobalContext } from '../context';

const useRandomPer = () => {
    const { index, setIndex, name, job, image, text } = useGlobalContext();
    
    return (
        <div>useRandomPer</div>
    )
}

export default useRandomPer