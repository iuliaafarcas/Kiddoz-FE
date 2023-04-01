import { Grid, Pagination } from "@mui/material";
import DomainFilter from "./filters/DomainFilter";
import SpecialistCard from "./SpecialistCard";

const Specialists = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "50px" }}>
      <Grid
        sx={{
          height: "200px",
          width: "250px",
          marginTop: "100px",
          marginLeft: "130px",
          position: "fixed",
        }}
      >
        <DomainFilter />
      </Grid>
      <Grid
        sx={{
          width: "1000px",
          height: "1200px",
          paddingLeft: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "300px",
        }}
      >
        <Grid
          sx={{
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {arr.map((element) => {
            return (
              <Grid key={"specialist" + element}>
                <SpecialistCard />
              </Grid>
            );
          })}
        </Grid>
        <Grid sx={{ alignContent: "center", marginBottom: "30px" }}>
          <Pagination count={5} variant="outlined" color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Specialists;
