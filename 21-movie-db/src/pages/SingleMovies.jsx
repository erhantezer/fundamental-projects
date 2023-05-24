
import {Link, useParams} from "react-router-dom";
import useMovieFetch from "../hooks/useMovieFetch";


const SingleMovies = () => {
    const {id} = useParams()
    const {loading, error, movies:movie} = useMovieFetch(`&i=${id}`)
    
    if (loading) {
        return <div className='loading'></div>
    }

    if (error.show) {
        return (
            <div className='page-error'>
                <h1>{error.msg}</h1>
                <Link to='/' className='btn'>
                    back to movies
                </Link>
            </div>
        )
    }

    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    
    return (
        <div>SingleMovies</div>
    )
}

export default SingleMovies