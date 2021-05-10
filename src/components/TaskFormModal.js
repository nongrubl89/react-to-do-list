import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function TaskFormModal(props) {
  console.log(props);
  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add a task to {props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSubmit} data-nav={props.buttonNav}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              id="task"
              type="text"
              placeholder="Enter task name"
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Priority</Form.Label>
            <Form.Control
              as="select"
              id="priority"
              onChange={props.handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
