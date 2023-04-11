import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  RecommendationContext,
  RecommendationContextModel,
  RecommendationContextProvider,
} from "../../context/RecommendationContext";
import RecommendationService from "../../../api/RecommendationService";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";

const Cards = () => {
  // const { RecommendationObject, setRecommendationObject } = useContext(
  //   RecommendationContext
  // ) as RecommendationContextModel;

  const [recommendations, setRecommendations] =
    useState<RecommendationInterface[]>();

  useEffect(() => {
    // Fetch data from backend API
    const fetchRecommendations = async () => {
      try {
        const response = await RecommendationService.getRecommendationsPaged(0); // Pass the desired page number as an argument
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchRecommendations();
  }, []);

  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "430px",
        marginTop: "150px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid>
        {recommendations?.map((element) => {
          return (
            <RecommendationContextProvider value={element}>
              <Card />
            </RecommendationContextProvider>
          );
        })}
      </Grid>
      <Grid sx={{ alignContent: "center", marginBottom: "30px" }}>
        <Pagination count={5} variant="outlined" color="primary" />
      </Grid>
    </Grid>
  );
};
export default Cards;
