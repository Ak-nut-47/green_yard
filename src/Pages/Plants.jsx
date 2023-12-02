import React from "react";
import Navbar from "../Components/Navbar";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import CardPage from "../Components/CardPage";

const Plants = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <br />
      <br />
      <br />
      <Flex>
        <Sidebar />
        <CardPage />
      </Flex>
    </div>
  );
};

export default Plants;
