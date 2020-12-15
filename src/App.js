import React from 'react';
import "./App.css";
import NavBar from './Components/NavBar';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Tracker from './Pages/tracker';
import charts from './Pages/charts';
import Home from './Pages/Home';
import contactme from './Pages/contactme';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tracker" component={Tracker} />
        <Route path="/charts" component={charts} />
        <Route path='/contact-me' component={contactme} />
      </Switch>
    </Router>
  );
};

export default App;
