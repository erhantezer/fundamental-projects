
import {useParams} from "react-router-dom";
import useMovieFetch from "../hooks/useMovieFetch";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=fcacb142`;

const SingleMovies = () => {
    const {id} = useParams()
    const {loading, error, movies:movie} = useMovieFetch(`s=${id}`)
    
    return (
        <div>SingleMovies</div>
    )
}

export default SingleMovies