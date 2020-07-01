import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("NO EMPTY TODO ALLOWED");
    }
    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write Your TODO Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputGroupAddon addonType="prepend">
          <Button onClick={handleSubmit} color="primary">
            Add TODO
          </Button>
        </InputGroupAddon>
      </FormGroup>
    </Form>
  );
};

//bring data from central state
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
