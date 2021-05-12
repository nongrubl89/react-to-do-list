import { React } from "react";
import { Navbar } from "react-bootstrap";
import InitialSignIn from "./InitialSignIn";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>To-Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
      <InitialSignIn />
    </>
  );
}
