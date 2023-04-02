
import { useGlobalContext } from '../context';
import useCheckNum from './useCheckNum';

const usePrevPer = () => {
  const { setIndex } = useGlobalContext();
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