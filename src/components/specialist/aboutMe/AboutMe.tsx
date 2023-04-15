import { Grid } from "@mui/material";
import DetailSection from "./DetailSection";
import PicSection from "./PicSection";

const AboutMe = () => {
  return (
    <Grid
      sx={{
        marginTop: "150px",
        width: "1100px",
        height: "240px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <PicSection />
      <DetailSection />
    </Grid>
  );
};
export default AboutMe;
