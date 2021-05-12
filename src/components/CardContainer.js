import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TaskFormModal from "./TaskFormModal";
import TaskListModal from "./TaskListModal";

export default function CardContainer(props) {
  const [showTaskList, setShowTaskList] = useState(false);
  const [taskFormTitle, setTaskFormTitle] = useState("");
  const [taskFormID, setTaskFormID] = useState("");
  const [taskListID, setTaskListID] = useState("");

  const handleTaskFormShow = (e) => {
    const currentTodoId = e.target.parentNode.parentNode.dataset.nav;
    setTaskFormID(currentTodoId);
    const currentTodo = props.todos.filter((td) => {
      return td.id === currentTodoId;
    });
    props.setShowTaskForm(true);
    setTaskFormTitle(currentTodo[0].title);
  };

  const handleTaskListClose = () => setShowTaskList(false);
  const handleTaskListShow = (e) => {
    const currentTodoId = e.target.parentNode.parentNode.dataset.nav;
    setTaskListID(currentTodoId);
    setShowTaskList(true);
  };

  const todoCard = props.todos.map((todo) => (
    <Card
      style={{ width: "21rem" }}
      key={todo.id}
      className="m-3 bg-white shadow-sm rounded"
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
        <Button variant="primary" onClick={handleTaskListShow}>
          Show tasks
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Row className="justify-content-md-center pt-3">
        <Col md={6} className="d-flex justify-content-center">
          <div className="text-center">{todoCard}</div>
        </Col>
      </Row>
      <TaskFormModal
        show={props.showTaskForm}
        handleClose={props.handleTaskFormClose}
        title={taskFormTitle}
        handleSubmit={props.handleTaskFormSubmit}
        buttonNav={taskFormID}
        handleChange={props.handleTaskFormChange}
        task={props.todoTask}
        priority={props.priority}
      />
      <TaskListModal
        show={showTaskList}
        handleClose={handleTaskListClose}
        currentId={taskListID}
        tasks={props.tasks}
        deleteTask={props.deleteTask}
        markTaskComplete={props.markTaskComplete}
      />
    </>
  );
}
