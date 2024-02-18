import { Box } from "@mui/material";
import AllRecipe from "../AllRecipe";
import Footer from "../Footer/Footer";
import Header from "../Header";

function Home() {
  return (
    <Box sx={{ columnGap: "100px", paddingTop: "40px" }}>
      <Header />
      <AllRecipe />
      <Footer />
    </Box>
  );
}
export default Home;
