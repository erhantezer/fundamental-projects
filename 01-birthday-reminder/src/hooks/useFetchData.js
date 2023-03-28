import { useState } from 'react';
import { data } from '../helper/data';

const useFetchData = () => {
    const [myData, setMyData] = useState(data)

    return { myData, setMyData }
}
export default useFetchData