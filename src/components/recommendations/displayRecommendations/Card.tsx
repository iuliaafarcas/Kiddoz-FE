import { Grid } from "@mui/material";
import DetailSection from "./card/DetailSection";
import PicSection from "./card/PicSection";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <Link to="/recommendation" style={{ textDecoration: "none" }}>
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
      </Link>
    </>
  );
};
export default Card;
