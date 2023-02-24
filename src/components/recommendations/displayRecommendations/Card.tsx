import { Grid } from "@mui/material";
import DetailSection from "./card/DetailSection";
import PicSection from "./card/PicSection";

const Card = () => {
  return (
    <>
      <Grid
        sx={{
          width: "650px",
          height: "260px",
          background: "white",
          borderRadius: "20px",
          borderColor: "black",
          marginBottom: "30px",
        }}
        display="flex"
        flexDirection="row"
      >
        <PicSection />
        <DetailSection />
      </Grid>
    </>
  );
};
export default Card;
