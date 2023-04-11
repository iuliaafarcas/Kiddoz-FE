import { Grid } from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import AboutMe from "./AboutMe";
import InterestsSection from "./InterestsSection";
import {
  SpecialistContext,
  SpecialistContextModel,
} from "../../context/SpecialistContext";
import { useParams } from "react-router-dom";
import SpecialistService from "../../../api/SpecialistService";
import SpecialistInterface from "../../../interfaces/SpecialistInterface";

const ViewSpecialist = () => {
  const { setSpecialistObject } = useContext(
    SpecialistContext
  ) as SpecialistContextModel;
  const id = 253;

  const fetchSpecialist = useCallback(async () => {
    try {
      const response = await SpecialistService.getSpecialistById(id);
      const currentSpecialist: SpecialistInterface = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        occupation: response.data.occupation,
        quote: response.data.quote,
        description: response.data.description,
        age: response.data.age,
        domain: { id: 1, name: "psychology" },
        image: response.data.image,
        domainOfActivities: response.data.domainOfActivities,
      };

      setSpecialistObject?.(currentSpecialist);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchSpecialist();
  }, [setSpecialistObject, fetchSpecialist]);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1250px",
        height: "1000px",
        marginLeft: "120px",
      }}
    >
      <AboutMe />
      <InterestsSection />
    </Grid>
  );
};
export default ViewSpecialist;
