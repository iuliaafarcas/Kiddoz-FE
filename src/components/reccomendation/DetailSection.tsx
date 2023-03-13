import { Grid } from "@mui/material";
import BottomSection from "./detailSection/BottomSection";
import MiddleSection from "./detailSection/MiddleSection";
import RateCard from "./detailSection/RateCard";
import TopSection from "./detailSection/TopSection";

const DetailSection = () => {
  return (
    <>
      <Grid
        sx={{
          width: "540px",
          height: "300px",
          background: "white",
        }}
      >
        <TopSection />
        <MiddleSection />
        <BottomSection />

        <RateCard />
      </Grid>
    </>
  );
};
export default DetailSection;
