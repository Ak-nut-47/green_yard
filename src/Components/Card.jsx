import { Box, Image, Text, Badge, Card } from "@chakra-ui/react";

const PlantsCard = ({
  title,
  price,
  description,
  careguide,
  image,
  category,
}) => {
  return (
    <Card
      maxW="xs"
      border="2px solid #008067"
      boxShadow="0 6px 10px rgba(0, 0, 0, 0.2)" // Add a subtle shadow
      backdropFilter="blur(8px)" // Add a frosted glass effect
      borderRadius="md" // Add rounded corners
    >
      <Image src={image} alt={title} loading="lazy" />

      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {title}
        </Text>
        <Text color="gray.500" mb="2">
          {description}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          {price}
        </Text>
        <Text color="gray.600" mb="2">
          {careguide}
        </Text>
        <Badge colorScheme="green">{category}</Badge>
      </Box>
    </Card>
  );
};

export default PlantsCard;
