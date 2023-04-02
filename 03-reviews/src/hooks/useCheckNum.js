import React from 'react'
import { useGlobalContext } from '../context';

const useCheckNum = () => {
    const { index, setIndex, name, job, image, text, people } = useGlobalContext();
    console.log(people)

    const checkNumber = (num) => {
        if (num > people.length - 1) {
            return 0;
        } else if (num < 0) {
            return people.length - 1
        } else {
            return num
        }
    };

    return { checkNumber }


}

export default useCheckNum