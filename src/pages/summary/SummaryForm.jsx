import { useState } from 'react';
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

export default function SummaryForm({ setOrderPhase }) {
  const [tcChecked, setTcChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // pass along to the next phase.
    // THe next page will handle submitting order from context.
    setOrderPhase('completed');
  };

  const popover = (
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='terms-and-conditions'>
          <Form.Check
            type='checkbox'
            checked={tcChecked}
            onChange={(e) => setTcChecked(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form>
    </div>
  );
}
