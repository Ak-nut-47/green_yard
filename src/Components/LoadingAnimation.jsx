// LoadingAnimation.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h={150}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1], // Adds a pulsating effect
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* Add your custom loading animation here */}
        <Box
          width="50px"
          height="50px"
          borderRadius="full"
          bg="green.500"
          boxShadow="lg"
        />
      </motion.div>
      <Text mt={4} fontWeight="bold" fontSize="lg">
        Loading...
      </Text>
    </Box>
  );
};

export default LoadingAnimation;
