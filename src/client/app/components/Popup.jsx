import React, { Component } from 'react';
import { render } from 'react-dom';
import { Popover, Tooltip, Modal, Button, OverlayTrigger } from 'react-bootstrap';

import Repositories from './Repositories.jsx';
import Introduction from './Introduction.jsx';


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p>Click here to learn more!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Details
        </Button>

        <Modal dialogClassName="make-me-big" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Introduction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Introduction />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default Popup;
