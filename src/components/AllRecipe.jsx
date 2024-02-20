import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function AllRecipe() {
  const [recipe, setRecipe] = useState([]);

  async function getRecipes() {
    const response = await axios.get("https://dummyjson.com/recipes");
    setRecipe(response.data.recipes);
  }
  useEffect(() => {
    getRecipes();
  }, []);

  function getRandomPrice() {
    return Math.floor(Math.random() * (200 - 49 + 1) + 50);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingX: "60px",
        // padding: "30px",
        flexWrap: "wrap",
        columnGap: "40px",
        rowGap: "30px",
      }}
    >
      {recipe.map((item) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            border: "3px solid ",
            color: "grey",
            borderRadius: "30px",
            width: "260px",
            paddingRight: "10px",
            // ":hover"
            // p: 5,

            transition: "all 0.2s",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transform: "scale(1.05)",
              cursor: "pointer",
            },
          }}
        >
          <Box
            sx={{
              width: "300",
              height: "400",
              boxSizing: "border-box",
              objectFit: "contain",
            }}
          >
            <img width="250" height="260" src={item.image} alt="" />
          </Box>

          <Typography
            sx={{ fontSize: "20px", fontWeight: "700", color: "black" }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "gray", fontWeight: "600" }}
          >
            {item.ingredients}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingRight: "18px",
            }}
          >
            <Typography sx={{ color: "black", fontWeight: "600" }}>
              {getRandomPrice()}$
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default AllRecipe;
