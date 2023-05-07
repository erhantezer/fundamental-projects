import { useEffect, useState } from 'react';


const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [veri, setVeri] = useState([]);


    //! Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
    //? const range = (start, stop, step) =>
    //?     Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    //! Generate numbers range 0..4
    //? range(0, 4, 1);
    // [0, 1, 2, 3, 4]

    //! Generate numbers range 1..10 with step of 2
    //? range(1, 10, 2);
    // [1, 3, 5, 7, 9]





    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            

            const paginate = (data) => {
                const itemsPerPage = 10
                const numberOfPages = Math.ceil(data.length / itemsPerPage)

                const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
                    const start = index * itemsPerPage
                    return data.slice(start, start + itemsPerPage)
                })

                return newFollowers
            }
            
            setVeri(paginate(data));
            console.log(veri)
            setLoading(false);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getProducts()
    },[]);





    return { loading, veri }
}

export default useFetch;