import { React, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ToDoForm from "./ToDoForm";
import { AuthContext } from "../services/context.js";
import { app } from "../services/config";
import Jtron from "./Jtron";

export default function Navigation() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand bg="dark">To-Do List</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
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
            <Nav.Link className="text-dark" href="/signin">
              Sign In
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <ToDoForm />
    </>
  );
}
