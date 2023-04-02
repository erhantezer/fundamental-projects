
import { useGlobalContext } from '../context';
import useCheckNum from './useCheckNum';

const useNextPer = () => {
    const { index, setIndex, name, job, image, text } = useGlobalContext();
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