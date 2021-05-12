import { React, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
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
      <Row className="justify-content-md-center pt-3">
        <Col md={5}>
          <Form onSubmit={addTodo} className="mb-3">
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
                class="bi bi-search ml-2 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
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
