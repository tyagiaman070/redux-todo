import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { FaCheckDouble } from "react-icons/fa";

import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { removeTodo } from "../actions/todo";
import todo from "../reducer/todo";

const Todo = ({ todos, markComplete }) => {
  const [title, setTitle] = useState("");

  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span
            onClick={() => {
              markComplete(todo);
            }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

//bring data from central state
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (todo) => {
    dispatch(removeTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
