import React from 'react';
import { Button, Checkbox, ControlLabel, FormGroup, FormControl, Grid, HelpBlock, Col, Radio, Row } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const Contact = () => (
  <Grid style={{ minHeight: '100%' }}>
    <Row style={{ margin: 5 }}>
      <h1>Contact</h1>
      <hr />
    </Row>
    <Row style={{ margin: 5 }}>
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Subject"
          placeholder="Enter subject"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />

        <FormGroup>
          <ControlLabel>Requirements that I have: </ControlLabel>
          <Checkbox style={{ margin: '5px' }} inline>
              Secure phone line
            </Checkbox>
          <Checkbox style={{ margin: '5px' }} inline>
              Drivers license
            </Checkbox>
          <Checkbox style={{ margin: '5px' }} inline>
              Personal ID card
            </Checkbox>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Question regarding: </ControlLabel>
          <Radio style={{ margin: '5px' }} name="radioGroup" inline>
              Private person
            </Radio>
          <Radio style={{ margin: '5px' }} name="radioGroup" inline>
              Company
            </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>What department of our company is your quesion about?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="economy">The economy department</option>
            <option value="support">The support department</option>
            <option value="it">The IT department</option>
            <option value="security">The security department</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Describe your question</ControlLabel>
          <FormControl componentClass="textarea" placeholder="" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Our e-mail address</ControlLabel>
          <FormControl.Static>
              email@example.com
            </FormControl.Static>
        </FormGroup>

        <Button type="submit">
            Submit
          </Button>
      </form>
    </Row>
  </Grid>
  );

export default Contact;
