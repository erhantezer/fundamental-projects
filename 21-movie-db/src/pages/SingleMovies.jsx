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
        <section className='single-movie'>
            <img src={poster} alt={title} />
            <div className='single-movie-info'>
                <h2>{title}</h2>
                <p>{plot}</p>
                <h4>{year}</h4>
                <Link to='/' className='btn'>
                    back to movies
                </Link>
            </div>
        </section>
    )
}

export default SingleMovies