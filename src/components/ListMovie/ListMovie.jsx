import axios from "axios";
import React, { useEffect, useState } from "react"
import "./ListMovie.scss";
import Movie from "../Movie/Movie";

function ListMovie({title,fetch, image}) {
  const [movies, setMovies] = useState([])
  
  const fetchListMovies = async () => {
      try {
          const {data} = await axios.get(fetch)
          setMovies(data.results.splice(1,16))
         
      } catch (error) {
          console.error(error)
      }
  }
  useEffect(() => {
      fetchListMovies()
  }, [])
  return (
      <>
      <h1 className="movie-trending title">{title}</h1>
      <div className="movie-box">
          {
          movies && movies.map(movie => (<Movie movie={movie} image={image} key={movie.id}/>))
          }
      </div>
      
      </>
      
  )
}
export default ListMovie