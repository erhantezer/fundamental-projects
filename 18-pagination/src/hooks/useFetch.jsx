import { useEffect, useState } from 'react';
import paginate from '../helpers/utils';


const url = 'https://api.github.com/users/erhantezer/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [veri, setVeri] = useState([]);


    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setVeri(paginate(data))
            setLoading(false); 
            console.log(veri)    
        } catch (error) {
            console.log(error)
        }
    };

    
    useEffect(() => {
        getProducts()
    },[]);


    return { loading, veri }
}

export default useFetch;