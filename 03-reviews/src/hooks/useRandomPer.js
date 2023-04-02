
import { useGlobalContext } from '../context';
import useCheckNum from './useCheckNum';

const useRandomPer = () => {
    const { index, setIndex, people } = useGlobalContext();
    const {checkNumber} = useCheckNum();

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber === index) {
            randomNumber = index + 1;
        };
        setIndex(checkNumber(randomNumber))
    }
    
    return { randomPerson }
}

export default useRandomPer