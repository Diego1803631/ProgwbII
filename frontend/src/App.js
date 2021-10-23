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
import MainNavbar from "../src/components/MainNavbar";
import LogNavbar from "../src/components/LogNavbar";
import Footer from "../src/components/Footer";
import '../src/css/Index.css';
import '../src/css/Movie.css';
import '../src/css/Search.css';
import '../src/css/Profile.css';
import '../src/css/ListInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router>
      <LogNavbar />
      <hr className="hr"></hr>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/Movie' component={Movie} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Lists' component={Lists} />
        <Route exact path='/Following' component={Following} />
        <Route exact path='/Followers' component={Followers} />
        <Route exact path='/ListInfo' component={ListInfo} />
        <Route exact path='/CreateList' component={CreateList} />
        <Route exact path='/CreateMovieOrSerie' component={CreateMovieOrSerie} />
        <Route exact path='/CreateReview' component={CreateReview} />
        <Route exact path='/CreateCategory' component={CreateCategory} />
        <Route exact path='/CreatePlatform' component={CreatePlatform} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
