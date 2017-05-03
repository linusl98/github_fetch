import React, { Component } from 'react';
import { Col, Grid, Row, Image, Panel, PanelGroup } from 'react-bootstrap';
import Rocket from 'react-icons/lib/go/rocket';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.match.params.userName,
      userObj: [],
    };
  }

  componentDidMount() {
    this.getUser().then((data) => {
      this.setState({
        userObj: data,
      },
    );
    });
  }

  getUser() {
    return fetch(`https://api.github.com/users/${this.state.userName}`)
    .then(res => res.json());
  }

  render() {
    return (
      <Grid style={{ paddingBottom: 100 }}>
        <Row style={{ margin: 5 }}>
          <Col xs={3} md="1" mdOffset="1" xsOffset="1">
            <a target="_blank" href={this.state.userObj.html_url}> <Rocket style={{ width: 50, height: 50 }} /> </a>
          </Col>
          <Col xsOffset={2} mdOffset="2">
            <h1>{this.state.userObj.login}</h1>
          </Col>
          <hr />
        </Row>
        <Row style={{ margin: 5 }}>
          <Panel header={this.state.userObj.login}>
            <Col md="2">
              <Image src={this.state.userObj.avatar_url} width={150} height={150} rounded />
            </Col>
            <Col md="3">
              <p style={{ fontSize: 20 }}>
                User: {this.state.userObj.login} <br />
                Register date: {`${this.state.userObj.created_at}`.substr(0, 10)} <br />
                Repositories posted: {this.state.userObj.public_repos} <br />
                User type: {this.state.userObj.type} <br />
                Hireable: {this.state.userObj.hireable ? 'Yes' : 'No'}
              </p>
            </Col>
            <Col md="3">
              <p style={{ fontSize: 20 }}>
                Followers: {this.state.userObj.followers} <br />
                Following: {this.state.userObj.following}
              </p>
            </Col>
          </Panel>
          <PanelGroup defaultActiveKey="2" accordion>
            <Panel header="User Bio" eventKey="1">
              {this.state.userObj.bio == null ? "User hasn't specified any bio." : this.state.userObj.bio }
            </Panel>
          </PanelGroup>
        </Row>
      </Grid>
    );
  }
}

export default User;
