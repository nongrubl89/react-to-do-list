import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import nextId from "react-id-generator";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";

export default function ToDoForm() {
  const [todo, setTodo] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const handleTaskFormClose = () => setShowTaskForm(false);
  const clearSearch = (e) => setActiveSearch(false);

  const addTodo = (event) => {
    event.preventDefault();
    if (!todoTitle || !todoDate) {
      alert("Please fill in both fields");
      return;
    }
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
    const newTasks = taskList.filter((task) => task.parentId !== todoId);
    setTaskList(newTasks);
    setTodo(newTodos);
  };

  const searchTodos = (e) => {
    e.preventDefault();
    setActiveSearch(true);
    const searchedArray = todo.filter((td) => td.title === keyword);
    setFilteredTodos(searchedArray);
    console.log(keyword);
  };

  const handleTaskFormSubmit = (event) => {
    event.preventDefault();
    if (!todoTask || !todoPriority) {
      alert("Please fill in both fields");
      return;
    }
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
        complete: false,
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

  const deleteTask = (e) => {
    const taskId = e.target.dataset.nav;
    const newTasks = taskList.filter((task) => task.uniqueId !== taskId);
    setTaskList(newTasks);
  };

  const markTaskComplete = (e) => {
    const taskId = e.target.dataset.nav;
    const newTasks = taskList.map((task) =>
      task.uniqueId === taskId ? { ...task, complete: true } : task
    );
    setTaskList(newTasks);
  };

  //   useEffect(() => {
  //     console.log(keyword);
  //   });

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
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              searchTodos={searchTodos}
              clearSearch={clearSearch}
            />
          </Col>
        </Row>
      </Container>
      <CardContainer
        todos={activeSearch ? filteredTodos : todo}
        deleteTodo={deleteTodo}
        handleTaskFormSubmit={handleTaskFormSubmit}
        handleTaskFormChange={handleTaskFormChange}
        todoTask={todoTask}
        todoPriority={todoPriority}
        tasks={taskList}
        handleTaskFormClose={handleTaskFormClose}
        showTaskForm={showTaskForm}
        setShowTaskForm={setShowTaskForm}
        markTaskComplete={markTaskComplete}
        deleteTask={deleteTask}
      />
    </>
  );
}
