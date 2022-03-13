import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import MovieLists from "../../Components/MovieLists/MovieLists";
import "./home.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { AuthContext } from "../../AuthContext/authContext";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const handleGenre = (genre_val) => {
    setGenre(genre_val);
  };

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await api.get(
          `/getLists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setLists(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} handleGenre={handleGenre} />
      {lists.map((list, index) => (
        <MovieLists key={index} list={list} />
      ))}
    </div>
  );
}

export default Home;
