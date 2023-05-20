import { useState } from "react";



export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const url ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const useMovieFetch = () => {
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [movies, setMovies] = useState([]);
const [query, setQuery] = useState("batman");


    return {}
}

export default useMovieFetch