import { Grid } from "@mui/material";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Stars = (noStars: number) => {
  return (
    <Grid
      sx={{
        height: "40px",
        width: "100px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {[...Array(noStars)].map((e, i) => {
        console.log("ajuns");

        return (
          <FontAwesomeIcon
            key={"star" + i.toString}
            icon={faStar}
            style={{
              color: "#F4A261",
              width: "25px",
              height: "25px",
            }}
          />
        );
      })}
    </Grid>
  );
};
export default Stars;
