import { Grid, Typography } from "@mui/material";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../../../context/RecommendationContext";
import { useContext, useEffect, useState } from "react";
import Benefit from "../../../../../interfaces/Benefits";

const MiddleSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  const [description, setDescription] = useState("");
  const [benefits, setBenefits] = useState<Benefit[]>([]);

  function trimStringTo20Characters(inputString: string): string {
    const maxLength = 118; // Maximum length of 20 characters
    let trimmedString = inputString.trim(); // Trim leading and trailing whitespace

    if (trimmedString.length > maxLength) {
      // If the trimmed string is longer than 20 characters, truncate it and add ellipsis at the end
      trimmedString = trimmedString.substring(0, maxLength - 3) + "...";
    }

    return trimmedString;
  }
  function chooseBenefits(benefits: Benefit[]) {
    benefits.sort((a, b) => {
      return a.name.length - b.name.length;
    });
    return benefits;
  }
  function chooseStrings(strings: Benefit[], maxLength: number) {
    let chosenStrings = [];
    let combinedLength = 0;

    for (let i = 0; i < strings.length; i++) {
      let string = strings[i];

      if (combinedLength + string.name.length <= maxLength) {
        chosenStrings.push(string);
        combinedLength += string.name.length;
      }
    }

    return chosenStrings;
  }

  useEffect(() => {
    setDescription(trimStringTo20Characters(RecommendationObject.description));
    setBenefits(
      chooseStrings(
        chooseBenefits(RecommendationObject.benefits).slice(0, 5),
        100
      )
    );
  }, [RecommendationObject]);

  return (
    <>
      <Grid
        sx={{
          width: "370px",
          height: "40px",
          borderRadius: "20px",
          marginTop: "5px",
          paddingRight: "15px",
          marginBottom: "7px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "black",
            fontFamily: "Arial",
          }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid
        sx={{ height: "50px", width: "370px" }}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {benefits.map((element) => {
          return (
            <Grid
              item
              key={element.id}
              sx={{
                fontSize: "11px",
                color: "white ",
                height: "22px",
                marginRight: "10px",
                minWidth: "70px",
                background: "#2A9D8F",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "20px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {element.name}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default MiddleSection;
