import { Grid } from "@mui/material";
import Stars from "../../specialist/display/displaySpecialists/filters/Stars";
import { useContext } from "react";
import { MyContext } from "../../context/FilterContext";

const RatingFilter = () => {
  const { ratingFilter, setRatingFilter } = useContext(MyContext);
  const noStars = [1, 2, 3, 4, 5];
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        width: "200px",
        height: "250px",
      }}
    >
      <Grid
        sx={{
          height: "30px",
          width: "100%",
          borderColor: "black",
          border: 1,
          marginBottom: "10px",
          paddingLeft: "10px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          color: "white",
          backgroundColor: "#264653",
        }}
      >
        <b>Starting rating</b>
      </Grid>

      <Grid
        sx={{
          width: "250px",
          height: "500px",
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        {noStars.map((element) => {
          return (
            <Grid
              key={element}
              sx={{
                height: "30px",
                width: "170px",
                borderColor: "black",
                border: 1,
                marginBottom: "10px",
                marginLeft: "5px",
                paddingLeft: "10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Grid sx={{ width: "20px", height: "20px" }}>{element}</Grid>
              <Grid>{Stars(element)}</Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default RatingFilter;
