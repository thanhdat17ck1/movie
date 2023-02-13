import ListMovie from '../../components/ListMovie/ListMovie'
import request from '../../request';

export default function Home() {

  return (
    <>
      <ListMovie title="Xem gì hôm nay" fetch={request.fetchNowPlaying} image={request.w500Image}></ListMovie>
      <ListMovie title="Phim Hoạt Hình" fetch={request.fetchMovieWithGenre(16)} image={request.w500Image} /> 
      <ListMovie title="Phim Kinh Dị" fetch={request.fetchMovieWithGenre(27)} image={request.w500Image} />
    </>
  )
}
