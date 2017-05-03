import React, { Component, PropTypes } from 'react';
import { Col, Grid, Row, Tabs, Tab } from 'react-bootstrap';
import Rocket from 'react-icons/lib/go/rocket';
import ReactMarkdown from 'react-markdown';

const propTypes = {};

const defaultProps = {};

const API = 'https://api.github.com';

class ViewRepository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usrName: props.match.params.userName,
      repositoryName: props.match.params.repoName,
      repo: {},
      releases: [],
      branches: [],
      readme: '',
    };
  }

  componentDidMount() {
    Promise.all([
      this.getRepository(),
      this.getReleases(),
      this.getBranches(),
      this.getReadme(),
    ]).then(([repo, releases, branches, readme]) => {
      this.setState({ repo, releases, branches, readme });
    });
  }

  getReleases() {
    return fetch(`${API}/repos/${this.state.usrName}/${this.state.repositoryName}/releases`)
    .then(res => res.json());
  }

  getBranches() {
    return fetch(`${API}/repos/${this.state.usrName}/${this.state.repositoryName}/branches`)
    .then(res => res.json());
  }

  getCommits() {}

  getRepository() {
    return fetch(`${API}/repos/${this.state.usrName}/${this.state.repositoryName}`)
    .then(res => res.json());
  }

  getReadme() {
    return fetch('https://api.github.com/repos/callemall/material-ui/readme/')
    .then(res => res.json())
    .then(({ download_url }) => fetch(download_url))
    .then(data => data.text());
  }

  render() {
    return (
      <Grid>
        <Row style={{ margin: 5 }}>
          <Col xs={3} md={1} mdOffset={1} xsOffset={1}>
            <a target="_blank" href={this.state.repo.html_url}> <Rocket style={{ width: 50, height: 50 }} /> </a>
          </Col>
          <Col xsOffset={2} mdOffset={2}>
            <h1>{this.state.repo.name}</h1>
          </Col>
          <hr />
        </Row>
        <Row>
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            {this.state.branches.map(branch =>
              <Tab key={branch.name} title={branch.name} />)}
          </Tabs>
        </Row>
        <ReactMarkdown source={this.state.readme} />

        <Row>
          <ul>
            {this.state.releases.map(release =>
              <li key={release.id}><a href={release.zipball_url}>{release.tag_name}</a></li>,
          )}
          </ul>
        </Row>
      </Grid>
    );
  }
}

ViewRepository.propTypes = propTypes;
ViewRepository.defaultProps = defaultProps;

export default ViewRepository;
