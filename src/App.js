import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './css/style.css';
import './vendor/bootstrap-main/dist/css/bootstrap.css';
import './css/App.css';
import './vendor/fonts/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css';
import Signin from './components/pages/signin';
import Signup from './components/pages/signup';
import Home from './components/pages/home';
import Nav from './components/reusables/nav';

function App() {
  
    return(

      <Router>
        <Nav />
        <div className='app d-flex pt-5'>
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/login">
              <Signin />
            </Route>
            <Route path="/register">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    )

}

export default App;
