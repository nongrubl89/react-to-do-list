import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ToDoCard(props) {
  return (
    <Card style={{ width: "18rem" }} data-nav={props.uniqueId}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.dueDate}</Card.Text>
        <Button variant="primary">Add Task</Button>
      </Card.Body>
    </Card>
  );
}
