/* global document , fetch */
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Repositories from './components/Repositories.jsx';
import About from './components/About.jsx';
import Root from './components/Root.jsx';
import NonExistingPath from './components/NonExistingPath.jsx';
import styles from './styles/style.css';
import Style from './css/bootstrap-theme.min.css';
import sStyle from './css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/repositories">Repositories</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/about" component={About} />
            <Route path="/repositories" component={Repositories} />
            <Route path="*" component={NonExistingPath} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


render(<App />, document.getElementById('root'));
