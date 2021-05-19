import { React, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ToDoForm from "./ToDoForm";
import { AuthContext } from "../services/context.js";
import app from "../services/config";

export default function Navigation() {
  const { user } = useContext(AuthContext);
  const u = !!user;
  console.log(u);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand bg="dark">To-Do List</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {!!user ? (
            <>
              <Nav.Link>{user.displayName}</Nav.Link>
              <Nav.Link onClick={() => app.auth().signOut()}>Sign Out</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/signin">Sign In</Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <ToDoForm />
    </>
  );
}
