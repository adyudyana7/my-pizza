import { Box, Typography } from "@mui/material";

function Korzina() {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            margin: "0 14.8%",
            fontSize: "20px",
            fontWeight: "500",
            paddingTop: "60px",
          }}
        >
          Корзина :
        </Typography>
        <Typography>Будет доставлен через: 1 ч 02 мин</Typography>
      </Box>
    </Box>
  );
}
export default Korzina;
