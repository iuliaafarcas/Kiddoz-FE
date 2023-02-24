import { Grid } from "@mui/material";
import BottomSection from "./detailSection/BottomSection";
import MiddleSection from "./detailSection/MiddleSection";
import TopSection from "./detailSection/TopSection";

const DetailSection = () => {
  return (
    <>
      <Grid
        sx={{
          //   background: "red",
          //   borderColor: "black",
          width: "370px",
          height: "240px",
          borderRadius: "20px",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </Grid>
    </>
  );
};
export default DetailSection;
