import { Flex } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Flex mt={10}>
        <Flex minW={"50%"}></Flex>
        <Flex>
          <img src="https://onedrive.live.com/embed?resid=F8906809968D6B81%21165&authkey=%21APd-i6uU6KngfgY&width=2250&height=2250" />
        </Flex>
      </Flex>
    </div>
  );
};

export default Homepage;
