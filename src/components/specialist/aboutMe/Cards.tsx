import { Grid } from "@mui/material";
import Card from "./Card";
import { useCallback, useContext, useEffect, useState } from "react";
import RecommendationService from "../../../api/RecommendationService";
import { useParams } from "react-router-dom";
import { RecommendationContextProvider } from "../../context/RecommendationContext";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import ImageList from "@mui/material/ImageList";
import RecommendationInterface from "../../../interfaces/RecommendationInterface";

const Cards = () => {
  const [otherRecommendations, setOtherRecommendations] = useState<
    RecommendationInterface[]
  >([]);
  const { id } = useParams();
  const fetchOtherRecommendations = useCallback(async () => {
    try {
      const response =
        await RecommendationService.getRecommendationsBySpecialist(
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
    id,
  ]);

  return (
    <Grid
      sx={{
        minHeight: "200px",
        width: "970px",
        marginBottom: "100px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {otherRecommendations?.map((element) => {
        return (
          <RecommendationContextProvider value={element} key={element.id}>
            <Card />
          </RecommendationContextProvider>
        );
      })}
    </Grid>
  );
};
export default Cards;
