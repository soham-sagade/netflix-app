import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { AuthContext } from "../../AuthContext/authContext";
import { useContext } from "react";
import "./navbar.scss";
import { useState } from "react";
import { logOut } from "../../AuthContext/apiCall";
import { Link } from "react-router-dom";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // return () => window.onscroll = null;
  };

  const handleLogout = () => {
    logOut(dispatch);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/netflix-e414f.appspot.com/o/items%2Fdownload%20(1).svg?alt=media&token=9ed3c7b6-a1cb-404a-8abe-943764eabeef"
            alt=""
          />
          <span>
            <Link to="/" className="link">
              Homepage
            </Link>
          </span>
          <span>
            <Link to="/movies" className="link">
              Movies
            </Link>
          </span>
          <span>
            <Link to="/series" className="link">
              Series
            </Link>
          </span>
          <span>
            <Link to="/" className="link">
              New and Popular
            </Link>
          </span>
          <span>
            <Link to="/" className="link">
              my List
            </Link>
          </span>
        </div>
        <div className="right">
          {/* <div id="sb-search" className="sb-search">
                    <form>
                        <input className="sb-search-input" type="search" placeholder="Enter your movie..."  value="" name="search" id="search" />
                        <input className="sb-search-submit" type="submit"  value=""/>
                        <Search className="sb-icon-search" />
                    </form>
                </div> */}
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}> Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
