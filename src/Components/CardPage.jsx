import { Grid } from "@chakra-ui/react";

import PlantsCard from "./Card";

import { useSelector } from "react-redux";

const CardPage = () => {
  const plants = useSelector((store) => store.plants);
  // ------------------------DOM CONSTRUCTION--------------------------------
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {plants.map((el) => (
        <PlantsCard
          title={el.title}
          price={el.price}
          description={el.description}
          careguide={el.careguide}
          image={el.image}
          category={el.category}
          key={el._id}
        />
      ))}
    </Grid>
  );
};

export default CardPage;
