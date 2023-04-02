
import { useGlobalContext } from '../context';
import useCheckNum from './useCheckNum';

const useNextPer = () => {
    const { setIndex } = useGlobalContext();
    const { checkNumber } = useCheckNum()

    const nextNum = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    
    return { nextNum }
        
    
}

export default useNextPer