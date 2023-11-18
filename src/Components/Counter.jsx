import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/action";

const Counter = () => {
  const data = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addAction(1));
  };
  const handleReduce = () => {
    dispatch(reduceAction(1));
  };

  return (
    <div>
      <h1>Counter : {data}</h1>
      <Button onClick={handleAdd}>Add</Button>
      <br />
      <Button onClick={handleReduce}>Reduce</Button>
    </div>
  );
};

export default Counter;
