import { useState } from 'react';
import { data } from '../helper/data';

const useFetchData = () => {
    const [mydata, setMyData] = useState(data)

    return { mydata, setMyData }
}
export default useFetchData