import { Box, Typography } from "@mui/material";

function Contacts() {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        КОНТАКТЫ{" "}
      </Typography>
    </Box>
  );
}
export default Contacts;
