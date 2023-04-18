import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Navbar from "../components/Navbar";
import TypeNavbar from "../components/TypeNavbar";
import { Grid } from "@mui/material";
import Recommendation from "../components/reccomendation/Recommendation";
import {
  RecommendationContext,
  RecommendationContextModel,
  RecommendationContextProvider,
  RecommendationFullContextProvider,
} from "../components/context/RecommendationContext";
import RecommendationService from "../api/RecommendationService";
import { useParams } from "react-router-dom";
import RecommendationInterface, {
  emptyRecommendation,
} from "../interfaces/RecommendationInterface";

const RecommendationPage = () => {
  const [recommendation, setRecommendation] =
    useState<RecommendationInterface>(emptyRecommendation);

  const { id } = useParams();

  const fetchRecommendation = async () => {
    try {
      const response = await RecommendationService.getRecommendationById(
        parseInt(id!)
      );
      const currentRecommendation: RecommendationInterface = {
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        fromAge: response.data.fromAge,
        fromUnitAge: response.data.fromUnitAge,
        toAge: response.data.toAge,
        toUnitAge: response.data.toUnitAge,
        type: response.data.type,
        image: response.data.image,
        specialist: response.data.specialist,
        benefits: response.data.benefits,
      };
      setRecommendation(currentRecommendation);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRecommendation();
  }, []);

  return (
    <RecommendationFullContextProvider
      value={recommendation}
      setValue={setRecommendation}
    >
      <Grid
        sx={{
          background: "#f5f5f5",
          height: "100%",
          width: "100%",
        }}
      >
        <Navbar />
        <TypeNavbar />
        <Recommendation />
      </Grid>
    </RecommendationFullContextProvider>
  );
};
export default RecommendationPage;
