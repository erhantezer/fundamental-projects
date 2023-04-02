import React from 'react'
import { useGlobalContext } from '../context';

const useCheckNum = () => {
    const { index, setIndex, name, job, image, text } = useGlobalContext();
    
    return (
        <div>useCheckNum</div>
    )
}

export default useCheckNum