import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function MenuDetails() {
  const location = useLocation();
  const { item } = location.state;

  return (
    <Box>
      <Typography>{item.name}</Typography>
      <img width="250" height="260" src={item.image} alt="" />
    </Box>
  );
}

export default MenuDetails;
