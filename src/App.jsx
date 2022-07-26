import * as React from "react";
import MainMenu from './logger/MainMenu';
import Loger from './logger/Loger';
//import './styles/lighten.css';
import './styles/loger.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path="/" ><MainMenu /></Route>
        <Route path="/logger"><Loger /></Route>
      </Switch>
      </Router>
      </div>
     
    );
  }
}

export default App;