import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FaBookmark } from "react-icons/fa";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../../../context/RecommendationContext";
import { useContext } from "react";
const TopSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "65px",
          borderRadius: "20px",
        }}
        display="flex"
        flexDirection="row"
      >
        <Grid
          sx={{
            width: "50px",
            background: "#264653",
            borderRadius: "12px",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Typography sx={{ fontSize: "10px", color: "white" }}>
            <b>Age</b>
          </Typography>

          <Typography sx={{ fontSize: "20px", color: "white" }}>
            <b>{RecommendationObject.fromAge}+</b>
          </Typography>
        </Grid>

        <Grid
          sx={{
            width: "200px",
            height: "60px",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
              lineHeight: "1.2rem",
            }}
          >
            <b>{RecommendationObject.title}</b>
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "black", marginTop: "7px" }}
          >
            {RecommendationObject.type}
          </Typography>
        </Grid>
        <Grid sx={{ width: "100px", paddingRight: "20px" }}>
          <FaBookmark
            stroke="black"
            strokeWidth="40px"
            color="white"
            size="25px"
            cursor="pointer"
            style={{ float: "right" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default TopSection;
