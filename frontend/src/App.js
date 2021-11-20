import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './pages/Index';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Lists from './pages/Lists';
import Following from './pages/Following';
import Followers from './pages/Followers';
import ListInfo from './pages/ListInfo';
import CreateList from './pages/CreateList';
import CreateMovieOrSerie from './pages/CreateMovieOrSerie';
import CreateReview from './pages/CreateReview';
import CreateCategory from './pages/CreateCategory';
import CreatePlatform from './pages/CreatePlatform';
import LogNavbar from "../src/components/LogNavbar";
import Footer from "../src/components/Footer";
import '../src/css/Index.css';
import '../src/css/Movie.css';
import '../src/css/Search.css';
import '../src/css/Profile.css';
import '../src/css/ListInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/session/Login";
import Logout from "./components/session/Logout";
import History from "./utils/history";
import PrivateRoute from "./components/session/PrivateRoute"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router History={History}>
      <LogNavbar />
      <hr className="hr"></hr>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/Movie' component={Movie} />
        <Route exact path='/Search' component={Search} />
        <PrivateRoute exact path='/Profile' component={Profile} />
        <PrivateRoute exact path='/Lists' component={Lists} />
        <PrivateRoute exact path='/Following' component={Following} />
        <PrivateRoute exact path='/Followers' component={Followers} />
        <PrivateRoute exact path='/ListInfo' component={ListInfo} />
        <PrivateRoute exact path='/CreateList' component={CreateList} />
        <PrivateRoute exact path='/CreateMovieOrSerie' component={CreateMovieOrSerie} />
        <PrivateRoute exact path='/CreateReview' component={CreateReview} />
        <PrivateRoute exact path='/CreateCategory' component={CreateCategory} />
        <PrivateRoute exact path='/CreatePlatform' component={CreatePlatform} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Logout' component={Logout} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
