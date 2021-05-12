import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Label>Search To-do list</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search"
          value={props.keyword}
          onChange={(e) => props.setKeyword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.searchTodos}>
        Search
      </Button>
      <Button variant="primary" onClick={props.clearSearch}>
        Clear Search
      </Button>
    </Form>
  );
}
