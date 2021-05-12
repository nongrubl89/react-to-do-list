import { React, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ToDoForm from "./ToDoForm";
import { signInWithGoogle } from "../services/firebase";

export default function InitialSignIn() {
  const [showForm, setShowForm] = useState(false);
  const [initialDivShow, setInitialDivShow] = useState(true);
  const handleGuest = () => {
    setShowForm(true);
    setInitialDivShow(false);
  };
  return (
    <Container fluid className="min-vh-100 min-vw-100 bg-light">
      <Row
        className={initialDivShow ? "justify-content-md-center pt-3" : "d-none"}
      >
        <Col xs={6} className="d-flex justify-content-center">
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </Col>
      </Row>
      <Row
        className={initialDivShow ? "justify-content-md-center pt-3" : "d-none"}
      >
        <Col xs={6} className="d-flex justify-content-center">
          <Button onClick={handleGuest}>Continue as guest</Button>
        </Col>
      </Row>
      {showForm ? <ToDoForm /> : ""}
    </Container>
  );
}
