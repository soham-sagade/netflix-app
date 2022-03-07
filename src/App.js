import { useContext } from "react";
import Home from "./Pages/HomePage/Home";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";
import Login from "./Pages/Login/Login";
import {AuthContext} from './AuthContext/authContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  let user = useContext(AuthContext).user === null ? false : true;  
  console.log(useContext(AuthContext));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movie" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
