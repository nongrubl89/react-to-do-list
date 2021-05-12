import React from "react";
import { Modal, Button, ListGroup, Dropdown } from "react-bootstrap";

export default function TaskFormModal(props) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      className="btn-primary-outline"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="black"
        className="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
      {children}
    </Button>
  ));

  const createTaskList = props.tasks
    .filter((task) => task.parentId === props.currentId)
    .sort((a, b) => (a.pNumber > b.pNumber ? 1 : -1))
    .map((t) => (
      <ListGroup.Item
        key={t.uniqueId}
        className="d-flex justify-content-between align-items-center"
        variant={t.complete === true ? "success" : ""}
      >
        {t.name}
        <span className="badge badge-primary badge-pill ml-auto pr-2">
          {t.priority}
        </span>
        <Dropdown>
          <Dropdown.Toggle
            className="align-items-center"
            as={CustomToggle}
            id="dropdown-custom-components"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item data-nav={t.uniqueId} onClick={props.deleteTask}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item
              data-nav={t.uniqueId}
              onClick={props.markTaskComplete}
            >
              Mark as complete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
    ));
  //   console.log(createTaskList);

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Task List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {createTaskList.length ? (
          <ListGroup>{createTaskList}</ListGroup>
        ) : (
          <h6>No Tasks In Project</h6>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
