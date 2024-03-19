import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card/Card";

function AllRecipe() {
  const [recipe, setRecipe] = useState([]);

  async function getRecipes() {
    const response = await axios.get("https://dummyjson.com/recipes");
    setRecipe(response.data.recipes);
  }
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingX: "60px",
        flexWrap: "wrap",
        columnGap: "40px",
        rowGap: "30px",
      }}
    >
      {recipe.map((item) => (
        <Box key={item.id}>
          <Card item={item} />
        </Box>
      ))}
    </Box>
  );
}
export default AllRecipe;
