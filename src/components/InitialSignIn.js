import { React, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ToDoForm from "./ToDoForm";

export default function InitialSignIn() {
  const [showForm, setShowForm] = useState(false);
  const [initialDivShow, setInitialDivShow] = useState(true);
  const handleGuest = () => {
    setShowForm(true);
    setInitialDivShow(false);
  };
  return (
    <Container>
      <Row
        className={initialDivShow ? "justify-content-md-center pt-3" : "d-none"}
      >
        <Col xs={{ span: 6, offset: 3 }}>
          <Button>Sign in with Google</Button>
        </Col>
      </Row>
      <Row
        className={initialDivShow ? "justify-content-md-center pt-3" : "d-none"}
      >
        <Col xs={{ span: 6, offset: 3 }} className="justify-content-center">
          <Button onClick={handleGuest}>Continue as guest</Button>
        </Col>
      </Row>
      {showForm ? <ToDoForm /> : ""}
    </Container>
  );
}
