import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
        <Flex justifyContent={"space-evenly"}>
          {/* <Text
            color={"#009a7b"}
            fontSize={"x-large"}
            fontWeight={"bold"}
            pl={10}
            pt={5}
            pb={5}
          >
            <Link to={"/"}>Green Yard</Link>
          </Text> */}
          {/* ------------------- */}

          <Link to={"/"}>
            <Image
              src="https://onedrive.live.com/embed?resid=F8906809968D6B81%21204&authkey=%21AKXLZqqwyspKF-s"
              width="35%"
            />
          </Link>
          <Link to={"/"}>
            <Image
              src="https://onedrive.live.com/embed?resid=F8906809968D6B81%21204&authkey=%21AKXLZqqwyspKF-s"
              width="35%"
            />
          </Link>
        </Flex>
        <hr />
      </Flex>
      {/* -------------------------------------------------------------- */}
      <Flex justifyContent={"space-evenly"} pt={4} pb={4}>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link to={"/plants"}>Shop</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>About us</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Blog</Link>
        </Box>
        <Box
          _hover={{
            color: "#008067",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <Link>Contact</Link>
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
      </Flex>
    </div>
  );
};

export default Navbar;
