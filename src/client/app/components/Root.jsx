import React from 'react';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

import Popup from './Popup.jsx';
// import Navbar from './Navbar.jsx';

const Root = props => (
  <Grid style={{ paddingBottom: 100 }}>
    <Row style={{ margin: 5 }}>
      <Col>
        <Jumbotron>
          <h1>Welcome to Github Fetch</h1>
          <p>We provide the best github browser in the world!</p>
          <Popup />
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
  );

export default Root;
