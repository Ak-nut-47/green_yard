import { Flex, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import PlantsCard from "./Card";
import { useEffect, useState } from "react";

const CardPage = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/plants`)
      .then((res) => {
        console.log(res.data.plants);
        setPlants(res.data.plants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
