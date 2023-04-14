import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useContext } from "react";

const TopSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  return (
    <>
      <Grid
        sx={{
          width: "540px",
          height: "65px",
          borderRadius: "20px",
          marginLeft: "10px",
          marginTop: "15px",
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid sx={{ width: "540px", marginLeft: "20px" }}>
          <Typography
            sx={{ fontSize: "26px", color: "black", font: "bold georgia" }}
          >
            <b>{RecommendationObject.title}</b>
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "black" }}>
            {RecommendationObject.type}
          </Typography>
        </Grid>

        <Grid
          sx={{
            width: "50px",
            background: "#E76F51",
            borderRadius: "8px",
            textAlign: "center",
            paddingTop: "10px",
            marginRight: "-10px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "white" }}>
            <b>Age</b>
          </Typography>

          <Typography sx={{ fontSize: "20px", color: "white" }}>
            <b>{RecommendationObject.fromAge}+</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default TopSection;
