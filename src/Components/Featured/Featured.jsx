import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

function Featured({ type, handleGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    try {
      const getRandomMovie = async () => {
        const res = await api.get(`/getRandom?type=${type}`, {
          headers: {
            authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        console.log(res.data[0]);
        setContent(res.data[0]);
      };

      getRandomMovie();
    } catch (e) {
      console.log(e);
    }
  }, [type]);

  const handleChange = (e) => {
    let genre = e.target.value;
    handleGenre(genre);
  };

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select
            className="gnere"
            id="genre"
            onChange={(e) => handleChange(e)}
          >
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <h1>{content.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <Link
              className="play-link"
              to={{ pathname: "/watch", movie: content }}
            >
              <PlayArrow />
              <span>Play</span>
            </Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
