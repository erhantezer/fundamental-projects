import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=fcacb142`;

const useMovieFetch = (urlParams) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' });
    const [movies, setMovies] = useState([]);
    
    console.log(urlParams)

    const fetchMovie = async (url) => {
        setLoading(true)

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setMovies(data.Search || data)
                setError({ show: false, msg: '' })
            } else {
                setError({ show: true, msg: data.Error })
            }
            setLoading(false)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams]);

    return {
        loading,
        error,
        movies,
        setMovies
    }
}

export default useMovieFetch