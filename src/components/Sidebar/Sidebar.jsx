import React from 'react'
import request from '../../request'
import MovieTrending from '../MovieTrending/MovieTrending'
import MovieUpComing from '../MovieUpComing/MovieUpComing'

const Sidebar = () => {
  return (
    <div>
      <MovieUpComing 
        title={'Phim sắp chiếu'}
        fetch={request.fetchUpcoming}
        image={request.w500Image} 
      />
      <MovieTrending 
        title={'Trending'}
        fetch={request.fetchTrending('week')}
      />
    </div>
  )
}

export default Sidebar
