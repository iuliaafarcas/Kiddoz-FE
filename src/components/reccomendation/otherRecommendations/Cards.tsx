import { Grid } from "@mui/material";
import Card from "./Card";
import { useCallback, useContext, useEffect, useState } from "react";
import RecommendationService from "../../../api/RecommendationService";
import { useParams } from "react-router-dom";
import { RecommendationContextProvider } from "../../context/RecommendationContext";

const Cards = () => {
  const { id } = useParams();
  const [otherRecommendations, setOtherRecommendations] = useState([]);
  const fetchOtherRecommendations = useCallback(async () => {
    try {
      const response = await RecommendationService.getOtherRecommendations(
        parseInt(id!)
      );
      setOtherRecommendations(response.data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchOtherRecommendations();
  }, [
    setOtherRecommendations,
    fetchOtherRecommendations,
    otherRecommendations,
  ]);
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Grid
      sx={{
        height: "200px",
        width: "970px",
        marginBottom: "100px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {otherRecommendations?.map((recommendation) => {
        return (
          <RecommendationContextProvider value={recommendation}>
            <Card />
          </RecommendationContextProvider>
        );
      })}
    </Grid>
  );
};
export default Cards;
