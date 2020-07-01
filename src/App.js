import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

import { Provider } from "react-redux";
import { Container } from "reactstrap";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
