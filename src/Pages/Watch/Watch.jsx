import "./watch.scss";
import { useEffect } from "react";
import { ArrowBack } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Watch({ disableFooter }) {
  const location = useLocation();
  const movie = location.movie;

  useEffect(() => {
    disableFooter(true);
  });
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBack className="icon" />
          <span>Back</span>
        </div>
      </Link>
      <div className="video">
        <video src={movie.video} controls autoPlay></video>
      </div>
    </div>
  );
}

export default Watch;
