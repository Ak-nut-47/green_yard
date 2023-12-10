import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import CardPage from "../Components/CardPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchSuccessAction, isError, isLoading } from "../Redux/action";
import LoadingAnimation from "../Components/LoadingAnimation";

const Plants = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoading());
    axios
      .get(`http://localhost:3000/plants`)
      .then((res) => {
        dispatch(fetchSuccessAction(res.data.plants));
      })
      .catch((error) => {
        dispatch(isError(error));
      });
  }, []);

  const loading = useSelector((store) => store.isLoading);
  return (
    <div>
      <Navbar />
      <hr />
      <br />
      <br />
      <br />
      <Flex>
        <Sidebar />
        {loading ? <LoadingAnimation /> : <CardPage />}
      </Flex>
    </div>
  );
};

export default Plants;
