import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './featured.scss'

function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
      try{
          const getRandomMovie = async() => {
            const res = await axios.get(`/getRandom?type=${type}`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
                }
            })
            console.log(res.data[0]);
            setContent(res.data[0]);
          }
          
          getRandomMovie()
      
        } catch(e) {
        console.log(e)
      }
  },[type])
  
  
  
  
    return (
        <div className="featured">
            {
            type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "TV Series"}</span>
                    <select className="gnere" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
            }
            <img src={content.img} alt="" />
            <div className="info">
                <h1>{content.title}</h1>
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Featured