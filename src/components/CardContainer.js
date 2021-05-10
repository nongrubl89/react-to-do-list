import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import ToDoCard from "./ToDoCard";

export default function CardContainer(props) {
  const deleteTodo = (e) => {
    const todoId = e.target.parentNode.parentNode.dataset.nav;
    const index = props.todos.findIndex((prop) => prop.id === todoId);
    console.log(index);
    let newProps = props.todos.slice(index, 1);
    console.log(newProps);
  };
  const todoCard = props.todos.map((todo) => (
    <Card
      style={{ width: "18rem" }}
      key={todo.id}
      className="m-3"
      data-nav={todo.id}
    >
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.date}</Card.Text>
        <Button className="mr-2" variant="primary">
          Add Task
        </Button>
        <Button className="mr-2" variant="primary" onClick={deleteTodo}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container>
      <Row>
        <Col>
          <div>{todoCard}</div>
        </Col>
      </Row>
    </Container>
  );
}
