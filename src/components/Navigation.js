import { React, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ToDoForm from "./ToDoForm";
import { AuthContext } from "../services/context.js";
import { ModalContext } from "../services/modalcontext";
import { app } from "../services/config";

export default function Navigation() {
  const { user } = useContext(AuthContext);
  const [modalState, setModalState] = useContext(ModalContext);
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand bg="dark">To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navb" />
        <Navbar.Collapse className="justify-content-end" id="navb">
          {!!user ? (
            <>
              <Nav.Link className="text-dark">{user.displayName}</Nav.Link>
              <Nav.Link
                className="text-dark"
                onClick={() => app.auth().signOut()}
              >
                Sign Out
              </Nav.Link>
            </>
          ) : (
            <Nav.Link
              className="text-dark"
              href="/signin"
              onClick={() => setModalState({ ...modalState, modal: true })}
            >
              Sign In
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <ToDoForm />
    </>
  );
}
