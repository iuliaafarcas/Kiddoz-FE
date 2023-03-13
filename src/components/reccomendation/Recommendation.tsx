import { Grid } from "@mui/material";
import DescriptionSection from "./DescriptionSection";
import DetailSection from "./DetailSection";
import OtherRecommendations from "./OtherRecommendations";
import PicSection from "./PicSection";

const Recommendation = () => {
  return (
    <>
      <Grid
        sx={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
      >
        <Grid
          sx={{
            width: "970px",
            height: "300px",
            marginTop: "160px",
            marginLeft: "120px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <PicSection />
          <DetailSection />
        </Grid>
        <Grid
          sx={{
            width: "970px",
            height: "100px",
            marginLeft: "120px",
            marginTop: "50px",
          }}
        >
          <DescriptionSection />
        </Grid>
        {/* <Grid
          sx={{
            width: "970px",
            height: "100px",
            marginLeft: "120px",
            marginTop: "50px",
          }}
        >
        </Grid> */}
      </Grid>
    </>
  );
};
export default Recommendation;
