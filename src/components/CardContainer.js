import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TaskFormModal from "./TaskFormModal";
import TaskListModal from "./TaskListModal";

export default function CardContainer(props) {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const handleTaskFormClose = () => setShowTaskForm(false);
  const handleTaskFormShow = () => setShowTaskForm(true);

  const handleTaskListClose = () => setShowTaskList(false);
  const handleTaskListShow = () => setShowTaskList(true);

  const todoCard = props.todos.map((todo) => (
    <Card
      style={{ width: "20rem" }}
      key={todo.id}
      className="m-3"
      data-nav={todo.id}
    >
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.date}</Card.Text>
        <Button className="mr-2" variant="primary" onClick={handleTaskFormShow}>
          Add Task
        </Button>
        <Button className="mr-2" variant="primary" onClick={props.deleteTodo}>
          Delete
        </Button>
        <Button className="mt-2" variant="primary" onClick={handleTaskListShow}>
          Show tasks
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container>
      <Row className="justify-content-md-center pt-3">
        <Col md={6} className="d-flex justify-content-center">
          <div className="text-center">{todoCard}</div>
        </Col>
      </Row>
      <TaskFormModal show={showTaskForm} handleClose={handleTaskFormClose} />
      <TaskListModal show={showTaskList} handleClose={handleTaskListClose} />
    </Container>
  );
}
