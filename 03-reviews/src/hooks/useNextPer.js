import React from 'react'
import { useGlobalContext } from '../context';

const useNextPer = () => {
    const { index, setIndex, name, job, image, text } = useGlobalContext();
    
    return (
        <div>useNextPer</div>
    )
}

export default useNextPer