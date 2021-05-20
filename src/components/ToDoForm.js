import { React, useState, useContext, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Jumbotron,
  Container,
  Card,
} from "react-bootstrap";
import nextId from "react-id-generator";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import { database } from "../services/config";
import { AuthContext } from "../services/context.js";

export default function ToDoForm() {
  const { user } = useContext(AuthContext);
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
  const [showSearch, setShowSearch] = useState(false);
  const handleTaskFormClose = () => setShowTaskForm(false);
  const clearSearch = () => {
    setActiveSearch(false);
    setShowSearch(false);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (!todoTitle || !todoDate) {
      alert("Please fill in both fields");
      return;
    }
    let id = nextId();
    if (!!user) {
      const todoDoc = database.collection(user.displayName).doc(todoTitle);
      todoDoc.set({ title: todoTitle, date: todoDate, id: id });
    }
    setTodo([
      ...todo,
      {
        id: id,
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

  useEffect(() => {
    async function fetchData() {
      if (!!user) {
        const collection = await database.collection(user.displayName).get();
        const todoArray = [];
        collection.forEach((doc) => todoArray.push(doc.data()));
        setTodo(todoArray);
      }
    }
    fetchData();
  });

  return (
    <>
      <Jumbotron fluid className="p-0 m-0">
        <Container fluid>
          <Row className="justify-content-md-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="position-absolute"
            >
                
              <path
                fill="#ef476f"
                fill-opacity="1"
                d="M0,288L48,256C96,224,192,160,288,149.3C384,139,480,181,576,208C672,235,768,245,864,213.3C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Col md={5} className="mt-4">
              <Card className="border-0 shadow-lg">
                <Card.Header>Add a To-Do</Card.Header>
                <Card.Body>
                  <Form onSubmit={addTodo} className="mb-3">
                    <Form.Group controlId="formToDoTitle">
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
                    <Button
                      variant="primary"
                      type="submit"
                      className="button-block mr-1"
                    >
                      Submit
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="button-block"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      Search List
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search ml-2 mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              {showSearch ? (
                <SearchBar
                  keyword={keyword}
                  setKeyword={setKeyword}
                  searchTodos={searchTodos}
                  clearSearch={clearSearch}
                />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
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
