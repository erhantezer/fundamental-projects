import { useEffect, useState } from 'react';


const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [veri, setVeri] = useState([]);

    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch();
            const data = await response.json();
            setVeri(data);
            setLoading(false);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getProducts()
    },[]);

    return {}
}

export default useFetch