import { useEffect, useState } from 'react';


const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [veri, setVeri] = useState([]);

    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            setVeri(data);
            setLoading(false);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getProducts()
    },[]);



    const paginate = (data) => {
        const itemsPerPage = 10
        const numberOfPages = Math.ceil(data.length / itemsPerPage)

        const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
            const start = index * itemsPerPage
            return data.slice(start, start + itemsPerPage)
        })

        return newFollowers
    }

    console.log(paginate)



    return { loading, veri }
}

export default useFetch;