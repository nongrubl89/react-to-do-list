import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import nextId from "react-id-generator";
import CardContainer from "./CardContainer";

export default function ToDoForm(props) {
  const [todo, setTodo] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([
      ...todo,
      {
        id: nextId(),
        title: todoTitle,
        date: todoDate,
      },
    ]);
    setTodoTitle("");
    setTodoDate("");
  };

  const deleteTodo = (e) => {
    const todoId = e.target.parentNode.parentNode.dataset.nav;
    const newTodos = todo.filter((td) => td.id !== todoId);
    setTodo(newTodos);
  };

  useEffect(() => {
    console.log(todo);
  });

  return (
    <>
      <Container>
        <Row className="justify-content-md-center pt-3">
          <Col md={6}>
            <Form onSubmit={addTodo}>
              <Form.Group controlId="formToDoTitle">
                <Form.Label>To-Do</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter to-do"
                  value={todoTitle}
                  onChange={(e) => setTodoTitle(e.target.value)}
                />
                <Form.Text className="text-muted">
                  ex: clean the house, grocery shop
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  value={todoDate}
                  onChange={(e) => setTodoDate(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <CardContainer todos={todo} deleteTodo={deleteTodo} />
    </>
  );
}
