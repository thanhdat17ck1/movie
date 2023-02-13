import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import request from '../../request';
import Sidebar from '../Sidebar/Sidebar';
import noUpdateImage from '../../assets/images/noUpdateImage.png'
import "swiper/css";
import "swiper/css/navigation";
import './MovieDetail.scss'
import Movie from '../Movie/Movie';

export default function MovieDetail() {
  let params = useParams();
  const [movie, setMovie] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(request.fetchMovieDetails(params.id));
        setMovie(data);

      } catch (error) {
        console.error(error);
      }
    }

    const getVideo = async () => {
      try {
        const { data } = await axios.get(request.fetchVideoMovie(params.id))
        const results = data.results && data.results.length > 0 && data.results.filter(video => (video.name.includes('Trailer')))
        console.log(results)
      } catch (error) {
        console.error(error);
      }
    }
    const getMovieSimilar = async() => {
      try{
          const {data} = await axios.get(request.fetchMovieSimilar(params.id))
          setSimilarMovie(data.results.splice(1,8))
      }catch(error) {
          console.error(error)
      }
  }
    if (params.id) {
      getVideo();
      getData();
      getMovieSimilar();
    }

  }, [params.id])
  return (
    <div className='content'>
      <div className="movie-detail l-container">
        <div className="movie-detail__left">
          <div style={{ display: "flex" }}>
            <div className="image">
              <img src={request.originalImage(movie.poster_path)} alt={movie.title} />
            </div>
            <div className="info">
              <h3 className='title'>{movie.title}</h3>
              <div>
                <StarRating star={movie.vote_average} voteCount={movie.vote_count} />
              </div>
              <div className="short-desc">
                {movie.overview}
              </div>
              <div className='meta'>
                <dl>
                  <dt>Trạng Thái</dt>
                  <dd>Full HD</dd>
                </dl>
                <dl>
                  <dt>Tình trạng</dt>
                  <dd>{movie.status === 'Released' ? "Đang khởi chiếu" : "Sắp phát hành"}</dd>
                </dl>
                <dl>
                  <dt>Thời lượng</dt>
                  <dd>{movie.runtime} phút</dd>
                </dl>
                <dl>
                  <dt>Quốc gia</dt>
                  <dd>{movie.production_countries && movie.production_countries.map(country => (country.name)).join(', ')}</dd>
                </dl>
                <dl>
                  <dt>Thể loại</dt>
                  <dd>{movie.genres && movie.genres.map(genre => (genre.name)).join(', ')}</dd>
                </dl>
                <dl>
                  <dt>Ngày phát hành</dt>
                  <dd>{movie.release_date}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className='info-film-studio'>
            <h2 className='title'>Hãng sản xuất</h2>
            <div className='film-studio-box'>
              <Swiper
                breakpoints={{ 768: { slidesPerView: 4 } }}
                slidesPerView={3}
                spaceBetween={10}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="movie-slide-similar"
              >
                {movie.production_companies && (
                  movie.production_companies.map(company => {
                    return <SwiperSlide key={company.id}>
                      <div className="film-studio-item">
                        <img
                          src={(company.logo_path == null)
                            ? noUpdateImage
                            : request.originalImage(company.logo_path)}
                          alt={company.name} className="logo">
                        </img>
                        <h4 className="name">{company.name}</h4>
                      </div>
                    </SwiperSlide>
                  })
                )}
              </Swiper>
            </div>
          </div>
          <div>
          <h2 className="title" style={{textTransform: 'uppercase', width: '100%', margin: '10px 0'}}>Các phim liên quan</h2>
            <Swiper
                breakpoints={{768: {slidesPerView:3}, 1024: {slidesPerView:4}}}
                slidesPerView={2}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="movie-slide-similar"
            >
                {
                similarMovie &&  similarMovie.length > 0 && similarMovie.map(movie => {
                    return <SwiperSlide key={movie.id}><Movie movie={movie} image={request.w500Image}/></SwiperSlide>
                    
                }) 
                }
            </Swiper>
          </div>
        </div>
        <div className="movie-detail__right">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  )
}

function StarRating({ star, voteCount }) {
  const rate = Math.ceil(star)
  const starOn = Array.from({ length: rate }, () => '🟊')
  const starOff = Array.from({ length: 10 - rate }, () => '🟊')
  return (
    <>
      <div style={{ fontSize: '23px', float: 'left' }}>
        <span style={{ color: 'rgb(240, 167, 0)' }}>{starOn}</span>
        <span>{starOff}</span>
      </div>
      <span style={{ marginLeft: '5px', fontSize: '12px', lineHeight: '37px' }}>({voteCount} lượt bình chọn)</span>
    </>
  )
}