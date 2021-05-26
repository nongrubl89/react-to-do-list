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
                fillOpacity="1"
                d="M0,128L21.8,122.7C43.6,117,87,107,131,96C174.5,85,218,75,262,90.7C305.5,107,349,149,393,170.7C436.4,192,480,192,524,181.3C567.3,171,611,149,655,144C698.2,139,742,149,785,154.7C829.1,160,873,160,916,144C960,128,1004,96,1047,117.3C1090.9,139,1135,213,1178,245.3C1221.8,277,1265,267,1309,234.7C1352.7,203,1396,149,1418,122.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
              ></path>
            </svg>
            <Col md={6} s={8} className="mt-4">
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
                      // variant="primary"
                      type="submit"
                      className="button-block mr-1"
                    >
                      Submit
                    </Button>
                    <Button
                      // variant="outline-primary"
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
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
        </Container>
      </Jumbotron>
    </>
  );
}
