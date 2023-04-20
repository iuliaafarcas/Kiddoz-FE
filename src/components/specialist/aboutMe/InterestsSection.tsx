import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import specialistAndChild from "../../../assets/specialistChild.jpg";
import { useContext, useEffect, useState } from "react";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import Cards from "./Cards";
const InterestsSection = () => {
  const { specialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  const [interests, setInterests] = useState<Array<string>>([]);
  function trimStringByComma(str: string): string[] {
    let trimmedStrList: string[] = str.split(",").map((s) => s.trim());
    return trimmedStrList;
  }

  useEffect(() => {
    setInterests(trimStringByComma(specialistObject.domainOfActivities));
  }, [specialistObject]);

  return (
    <Grid sx={{ width: "1100px", height: "300px" }}>
      <Typography sx={{ fontSize: "20px" }}>
        <b>About me</b>
      </Typography>
      <Typography
        sx={{ fontSize: "16px", marginTop: "10px", textAlign: "justify" }}
      >
        {specialistObject.description}
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "25px" }}>
        <Grid sx={{ display: "flex" }}>
          <Box
            component="img"
            sx={{
              width: "250px",
              height: "250px",
            }}
            src={specialistAndChild}
          />
        </Grid>
        <Grid sx={{ marginLeft: "40px" }}>
          <Typography
            sx={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
          >
            <b>Domains of activity</b>
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "250px",
              weigth: "600px",
            }}
          >
            {interests.map((element) => {
              return (
                <Typography
                  key={element}
                  sx={{
                    marginRight: "50px",
                    width: "350px",
                    textAlign: "justify",
                    marginBottom: "10px",
                  }}
                >{`\u2022 ${element}`}</Typography>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Typography sx={{ fontSize: "20px", marginTop: "30px" }}>
        <b>My recommendations</b>
      </Typography>{" "}
      <Cards />
      <Grid sx={{ height: "50px" }}></Grid>
    </Grid>
  );
};
export default InterestsSection;
