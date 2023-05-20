import { useState } from "react";

const useMovieFetch = () => {
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [movies, setMovies] = useState([]);
const [query, setQuery] = useState("batman");


    return {}
}

export default useMovieFetch