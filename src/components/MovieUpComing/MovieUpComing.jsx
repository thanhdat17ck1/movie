import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movieUpComing.scss'

const MovieUpComing = ({ image, fetch, title }) => {
    const [movies, setMovies] = useState([])
    const fetchMovieUpComing = async () => {
        try {
            const {data} = await axios.get(fetch)
            setMovies(data.results.splice(1,8))
        }catch {

        }
    }
    useEffect(() => { 
        fetchMovieUpComing()
    }, [])

    

    return (
        <div className='sidebar-box upcoming'>
            <div className='caption'>
                <h1 className='movie-title'>{title}</h1>
            </div>
            {
                movies && movies.length > 0 && movies.map(movie => {
                    return <div className="movie-upcoming-item" key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={image(movie.poster_path ? movie.poster_path : movie.backdrop_path)} alt={movie.title} className="poster"></img>
                            <div className="content">
                                <h4 className="title">{movie.title}</h4>
                                <p className="release">{movie.release_date && new Date(movie.release_date).getFullYear()}</p>
                                <StarRating star={movie.vote_average} />
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}


export default MovieUpComing

function StarRating({star}) {
    const newStar = Math.ceil(star/2);
    const reviewStarOn = Array.from({length: newStar}, () => '🟊')
    const reviewStarOff = Array.from({length: 5-newStar}, () => '🟊')
    return (
        <p className="start" >
            <span style={{color: '#f0a700'}}>{reviewStarOn}</span>
            <span>{reviewStarOff}</span>
        </p>
    )
}


