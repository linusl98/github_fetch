import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';

const NonExistingPath = () => (
  <Grid>
    <Row style={{ margin: 5 }}>
      <h1>What you are looking for does not exist :(</h1>
      <button type="submit"> <Link to="/" > <h2>Take me back</h2> </Link> </button>
    </Row>
  </Grid>
  );

export default NonExistingPath;
