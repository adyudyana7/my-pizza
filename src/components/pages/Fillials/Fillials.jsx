import { Box, Typography } from "@mui/material";
import Location from "../../../assets/Location.png";

function Fillials() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "130px",
          paddingTop: "30px",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "500", paddingTop: "0px" }}
        >
          Контакты и Филиалы
        </Typography>
      </Box>
      <Typography
        sx={{
          display: "flex",
          paddingLeft: "100px",
          paddingTop: "50px",
        }}
      >
        Регион: <Typography sx={{ fontWeight: "600" }}>Бишкек</Typography>
      </Typography>
      <Typography sx={{ paddingLeft: "100px" }}>Аламедин</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: "20px",
        }}
      >
        <img src={Location} alt="" />
      </Box>
    </Box>
  );
}
export default Fillials;
