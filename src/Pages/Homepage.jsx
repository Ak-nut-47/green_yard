import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Flex bgColor={"#E8F8FA"}>
        <Flex
          minW={"50%"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"left"}
          pl={20}
        >
          <Box>
            <Text fontSize={"xxx-large"} fontFamily={"Domine"}>
              Season's Blissful Greens
            </Text>
          </Box>
          <br />
          <Box>
            <Text>
              Experience the delight of plants, nurturing tools, and other
              magical surprises delivered right to your door—happiness, unboxed.
            </Text>
          </Box>
          <br />
          <Flex gap={10} fontFamily={"Source Sans 3"}>
            <Button
              bgColor="#009A7B"
              color={"white"}
              fontSize={"smaller"}
              borderRadius={"none"}
              _hover={{
                backgroundColor: "#00614e",
              }}
            >
              Shop Online
            </Button>
            <Button
              color={"#009A7B"}
              bgColor={"white"}
              fontSize={"smaller"}
              borderRadius={"none"}
              _hover={{
                backgroundColor: "#d4d4d4",
                color: "#006d57",
              }}
            >
              Find A Store
            </Button>
          </Flex>
        </Flex>
        <Flex justifyContent={"right"}>
          <img
            src="https://onedrive.live.com/embed?resid=F8906809968D6B81%21201&authkey=%21ABEy06eS0NSKfQ4&width=1200&height=1200"
            width={"90%"}
          />
        </Flex>
      </Flex>
      {/* Dummy Data for testing Redux  */}
      <br />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <TodoInput />
      <br />
      <br />
      <TodoList />
      <br />
      <br />
    </div>
  );
};

export default Homepage;
