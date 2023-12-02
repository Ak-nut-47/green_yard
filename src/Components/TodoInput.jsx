import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const dispatch = useDispatch();

  const postTodo = () => {
    const newTodo = {
      title: title,
      status: false,
    };

    axios
      .post("http://localhost:3000/todos", newTodo)
      .then((res) => {
        console.log(res.data);
        setTitle("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <Button onClick={postTodo}>ADD TODO</Button>
    </div>
  );
};

export default TodoInput;
