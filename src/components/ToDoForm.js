import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import nextId from "react-id-generator";
import CardContainer from "./CardContainer";

export default function ToDoForm() {
  const [todo, setTodo] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const handleTaskFormClose = () => setShowTaskForm(false);

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
    const newTasks = taskList.filter((task) => task.id !== todoId);
    setTaskList(newTasks);
    setTodo(newTodos);
  };

  const handleTaskFormSubmit = (event) => {
    event.preventDefault();
    const todoId = event.target.dataset.nav;
    let priorityNumber;
    if (todoPriority === "High") {
      priorityNumber = 1;
    }
    if (todoPriority === "Medium") {
      priorityNumber = 2;
    }
    if (todoPriority === "Low") {
      priorityNumber = 3;
    }
    setTaskList([
      ...taskList,
      {
        name: todoTask,
        priority: todoPriority,
        parentId: todoId,
        uniqueId: nextId(),
        pNumber: priorityNumber,
      },
    ]);
    handleTaskFormClose();
    setTodoTask("");
    setTodoPriority("");
  };

  const handleTaskFormChange = (e) => {
    if (e.target.id === "task") {
      setTodoTask(e.target.value);
    }
    if (e.target.id === "priority") {
      setTodoPriority(e.target.value);
    }
  };

  useEffect(() => {
    console.log("tL", taskList);
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
      <CardContainer
        todos={todo}
        deleteTodo={deleteTodo}
        handleTaskFormSubmit={handleTaskFormSubmit}
        handleTaskFormChange={handleTaskFormChange}
        todoTask={todoTask}
        todoPriority={todoPriority}
        tasks={taskList}
        handleTaskFormClose={handleTaskFormClose}
        showTaskForm={showTaskForm}
        setShowTaskForm={setShowTaskForm}
      />
    </>
  );
}
