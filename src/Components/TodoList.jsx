import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [allTodos, setAllTodos] = useState([]);

  const getTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res.data);
        setAllTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>All Todos</h1>

      {allTodos.map((el, i) => {
        return <li key={i}>{el.title}</li>;
      })}
    </div>
  );
};

export default TodoList;
