import './listitem.scss'
import { PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined } from '@material-ui/icons'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
function ListItem({ index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
      try {
        const getMovie = async() => {
          const res = await api.get(`/movie/${item}`, {
            headers: {
              authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
            }
          })
          setMovie(res.data);
        }
        getMovie();
      } catch (error) {
        console.log(error);
      }
  }, [item]);

  const data = {
    pathname: "/watch",
    movie: movie
  }
  return (
    <Link to={{ pathname:'/watch', movie: movie }}>
      <div className="listitem" 
        style={{left: isHovered && index * 250 - 50 + index * 5}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} >
        <img src={movie.img} alt="" />
        
        {isHovered && (
          <>
          <video src={movie.trailer} autoPlay loop/>
            <div className="iteminfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon"/>
                <ThumbUpOutlined className="icon"/>
                <ThumbDownOutlined className="icon"/>
              </div>
              <div className="iteminfotop">
                <span>1 hour 20 mins</span>
                <span className="limit">{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
              {movie.desc}
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem