import { Box, Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex direction={"column"}>
        <Text
          size={"md"}
          bgColor="#009A7B"
          pt={2}
          pb={2}
          color={"white"}
          textAlign={"center"}
          fontWeight={"bold"}
          w={"100%"}
        >
          Free Shipping Across Duliajan
        </Text>
        <Text
          color={"#009a7b"}
          fontSize={"x-large"}
          fontWeight={"bold"}
          pl={10}
          pt={5}
          pb={5}
        >
          <Link to={"/"}>Green Yard</Link>
        </Text>
        <hr />
      </Flex>
      {/* -------------------------------------------------------------- */}
      <Flex justifyContent={"space-evenly"}>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Deals</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link to="/plants">Plants</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Planters</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Plant Care</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Gift Ideas</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Home & Decor</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Faux</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Orchids & Flowers</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Stores</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Corporate Gifting</Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
