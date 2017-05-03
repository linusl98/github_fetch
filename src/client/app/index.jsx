/* global document , fetch */
/* eslint no-undef: "error" */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Repositories from './components/Repositories.jsx';
import About from './components/About.jsx';
import TopMenu from './components/TopMenu.jsx';
import Root from './components/Root.jsx';
import NonExistingPath from './components/NonExistingPath.jsx';
import Legal from './components/Legal.jsx';
import Contact from './components/Contact.jsx';
import User from './components/User.jsx';
import ViewRepository from './components/ViewRepository.jsx';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddingTop: 51,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TopMenu />
          <div style={{ paddingTop: '51px' }}>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route pathName="user" path="/user/:userName" component={User} />
              <Route pathName="repository" path="/repository/:userName/:repoName" component={ViewRepository} />
              <Route pathName="contact" path="/contact" component={Contact} />
              <Route pathName="about" path="/about" component={About} />
              <Route pathName="legal" path="/legal" component={Legal} />
              <Route pathName="repositories" path="/repositories" component={Repositories} />
              <Route path="*" component={NonExistingPath} />
            </Switch>
          </div>
          <div className="footer">
            <Navbar fixedBottom>
              <Nav>
                <NavItem eventKey={1} href="/legal">Legal</NavItem>
                <NavItem eventKey={2} href="/contact">Contact</NavItem>
              </Nav>
            </Navbar>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


render(<App />, document.getElementById('root'));
