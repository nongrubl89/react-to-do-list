import { React } from "react";
import { Navbar } from "react-bootstrap";
import InitialSignIn from "./InitialSignIn";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand bg="dark">To-Do List</Navbar.Brand>
      </Navbar>
      <InitialSignIn />
    </>
  );
}
