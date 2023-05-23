import { useEffect } from "react";
import {useParams} from "react-router-dom";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=fcacb142`;

const SingleMovies = () => {
    const {id} = useParams()

    const fetchData = () => {
        

        try {
            
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>SingleMovies</div>
    )
}

export default SingleMovies