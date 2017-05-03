/* global document , fetch */
/* eslint no-undef: "error" */
/* eslint max-len: ["error", 200] */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  ControlLabel,
  Col,
  Form,
  FormGroup,
  FormControl,
  Grid,
  Radio,
  Row,
  Table,
} from 'react-bootstrap';

const api = 'https://api.github.com';

const formControlStyle = {
  padding: 10,
};

function searchRepositories(params) {
  const p = Object.assign({}, {
    language: 'javascript',
    sort: 'stars',
    order: 'desc',
  }, params);

  return fetch(`${api}/search/repositories?${
    Object.keys(p).map(key => `${key}=${encodeURIComponent(p[key])}`).join('&')
  }`);
}

class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      queryParams: {
        q: 'react',
        language: 'javascript',
        sort: 'stars',
        order: 'desc',
      },
    };

    this.onChangeParametersInput = this.onChangeParametersInput.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  onChangeParametersInput(event) {
    const state = {
      queryParams: {
        ...this.state.queryParams,
        [event.target.id]: event.target.value,
      },
    };

    this.setState(state);
  }

  search() {
    searchRepositories(this.state.queryParams)
    .then(response => response.json())
    .then((res) => {
      this.setState({
        repositories: res.items,
      });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <Grid style={{ paddingBottom: 100 }}>
        <Row style={{ margin: 5 }}>
          <h1>Github Repositories</h1>
          <hr />
        </Row>
        <Row style={{ margin: 5 }}>
          <h4>Search parameters</h4>
          <div style={{ marginBottom: 16 }}>
            <Form inline>
              <FormGroup style={{ padding: 10 }}>
                <ControlLabel style={{ padding: 5 }}>Language</ControlLabel>
                <FormControl type="text" id="language" onChange={this.onChangeParametersInput} placeholder={this.state.queryParams.language} value={this.state.queryParams.language} />
              </FormGroup>
              <FormGroup style={{ padding: 10 }}>
                <ControlLabel style={{ padding: 5 }}>Query</ControlLabel>
                <FormControl type="text" id="q" onChange={this.onChangeParametersInput} placeholder={this.state.queryParams.q} value={this.state.queryParams.q} />
              </FormGroup>
              <FormGroup style={{ padding: 10 }}>
                <ControlLabel style={{ padding: 5 }}>Sort</ControlLabel>
                <FormControl type="text" id="sort" onChange={this.onChangeParametersInput} placeholder={this.state.queryParams.sort} value={this.state.queryParams.sort} />
              </FormGroup>
              <Radio name="radioGroup" id="order" onChange={this.onChangeParametersInput} value="asc" inline>
                Asc
              </Radio>
              <Radio name="radioGroup" id="order" onChange={this.onChangeParametersInput} value="desc" inline>
                Desc
              </Radio>
              <Button style={{ margin: 10 }} onClick={this.search}>Search github</Button>
            </Form>
          </div>
        </Row>
        <Row style={{ margin: 5 }}>
          <Col xs={12} sm={10}>
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }} colSpan="4">Repositories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Default Branch</th>
                  <th>Language</th>
                </tr>
                {this.state.repositories.map(item => (
                  <tr key={item.id}>
                    <td><Link to={`/repository/${item.owner.login}/${item.name}`}>{item.name}</Link></td>
                    <td><Link to={`/user/${item.owner.login}`}>{item.owner.login}</Link></td>
                    <td>{item.default_branch}</td>
                    <td>{item.language}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Repositories;
