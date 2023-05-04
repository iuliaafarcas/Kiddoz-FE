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
  const { id } = useParams();

  const fetchSpecialist = useCallback(async () => {
    try {
      const response = await SpecialistService.getSpecialistById(parseInt(id!));
      const currentSpecialist: SpecialistInterface = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        occupation: response.data.occupation,
        quote: response.data.quote,
        description: response.data.description,
        age: response.data.age,
        domain: response.data.domain,
        image: response.data.image,
        domainsInterest: response.data.domainsInterest,
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
        paddingLeft: "40px",
        paddingRight: "40px",

        width: "1200px",
        minHeight: "500px",
        marginLeft: "120px",
        backgroundColor: "white",
      }}
    >
      <AboutMe />
      <InterestsSection />
    </Grid>
  );
};
export default ViewSpecialist;
