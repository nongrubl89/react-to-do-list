import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

export default function TaskFormModal(props) {
  console.log(props.tasks.length);
  const createTaskList = props.tasks
    .filter((task) => task.parentId === props.currentId)
    .sort((a, b) => (a.pNumber > b.pNumber ? 1 : -1))
    .map((t) => (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        {t.name}
        <span class="badge badge-primary badge-pill">{t.priority}</span>
      </ListGroup.Item>
    ));
  console.log(createTaskList);

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
