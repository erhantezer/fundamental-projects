import React from 'react'
import { useGlobalContext } from '../context';
import useCheckNum from './useCheckNum';

const usePrevPer = () => {
  const { index, setIndex, name, job, image, text } = useGlobalContext();
  const { checkNumber } = useCheckNum()

  const prevNum = () => {
    setIndex((index) => {
      let prev = index - 1;
      return checkNumber(prev)
    })
  }

  return { prevNum }
}

export default usePrevPer