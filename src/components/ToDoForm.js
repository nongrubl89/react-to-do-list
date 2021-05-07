import { React, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function ToDoForm() {
  return (
    <Container>
      <Row className="justify-content-md-center pt-3">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formToDoTitle">
              <Form.Label>To-Do</Form.Label>
              <Form.Control type="email" placeholder="Enter to-do" />
              <Form.Text className="text-muted">
                ex: clean the house, grocery shop
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" name="dueDate" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
