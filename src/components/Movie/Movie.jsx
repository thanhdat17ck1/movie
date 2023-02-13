import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import noUpdateImage from '../../assets/images/noUpdateImage.png'

import style from './Movie.module.scss'
function Movie({movie, image}) {
    return (
        
            <div className={style["movie-item"]} style={{width: "100%"}} data-index={movie.id} > 
                <Link to={`/movie/${movie.id}`}>
                    <img 
                        src={movie.poster_path == null ? noUpdateImage :image(movie.poster_path ? movie.poster_path : movie.backdrop_path)} 
                        alt={movie.title || movie.name} 
                        className={style["poster"]}
                    ></img>
                    <div className={style["content"]}>
                        <h4 className={style["title"]}>{movie.title || movie.name}</h4>
                    </div>
                    <p className={style["badge-movie"]}>Full HD</p>
                    <div className={style["icon"]}> 
                        <FontAwesomeIcon icon={faCirclePlay} size="4x"/>
                    </div>
                    <div className={style["overlay"]}></div>
                </Link>
            </div>
    )
}
export default Movie