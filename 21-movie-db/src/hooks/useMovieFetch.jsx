import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=fcacb142`;

const useMovieFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' });
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("batman");

    const fetchMovie = async () => {
        setLoading(true)
        let url;
        if (query) {
            url = `${API_ENDPOINT}&s=${query}`
        } else {
            url = `${API_ENDPOINT}`
        }

        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.Response === "True") {
                setMovies(data.Search || data)
                setError({ show: false, msg: '' })
            } else {
                setError({ show: true, msg: data.Error })
            }

            console.log(data)
            setLoading(false)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchMovie()
    }, [query]);

    return {
        loading,
        error,
        query,
        setQuery,
        movies,
        setMovies
    }
}

export default useMovieFetch