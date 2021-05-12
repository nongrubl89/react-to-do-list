import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Search"
          value={props.keyword}
          onChange={(e) => props.setKeyword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={props.searchTodos}
        className="mr-1"
      >
        Search
      </Button>
      <Button variant="primary" onClick={props.clearSearch}>
        Clear Search
      </Button>
    </Form>
  );
}
