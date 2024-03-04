import { Box, Typography } from "@mui/material";

function Action() {
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
        АКЦИИ{" "}
      </Typography>
    </Box>
  );
}

export default Action;
