import React from 'react'
import { useGlobalContext } from '../context';

const usePrevPer = () => {
    const { index, setIndex, name, job, image, text } = useGlobalContext();
    
  return (
    <div>usePrevPer</div>
  )
}

export default usePrevPer