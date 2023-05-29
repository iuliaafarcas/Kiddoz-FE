import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TypeEnum } from "../../../../interfaces/TypeEnum";
import { AgeUnitEnum } from "../../../../interfaces/AgeUnitEnum";
import Benefit, { Benefits } from "../../../../interfaces/Benefits";
import RecommendationService from "../../../../api/recommendation/RecommendationService";

const CreateRecommendationForm = () => {
  const [type, setType] = useState("");
  const [benefit, setBenefit] = useState<Benefit[]>([]);

  const filterIndexedEnumsKeys = (obj: any) => {
    return Object.keys(obj).filter((currentKey) => isNaN(parseInt(currentKey)));
  };

  const typesOptions = useMemo(() => {
    return filterIndexedEnumsKeys(TypeEnum).map((typeName: string) => {
      return (
        <MenuItem key={`type-option-${typeName}`} value={typeName}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const ageOptions = useMemo(() => {
    return filterIndexedEnumsKeys(AgeUnitEnum).map((typeName: string) => {
      return (
        <MenuItem key={`type-option-${typeName}`} value={typeName}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);
  const fetchBenefits = async () => {
    try {
      const response = await RecommendationService.getBenefits();
      console.log(response.data);
      setBenefit(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchBenefits();
  }, []);
  // const benefitOptions = useMemo(() => {
  //   return Benefits.map((benefit: Benefit) => {
  //     return (
  //       <Grid
  //         item
  //         key={benefit.id}
  //         sx={{
  //           fontSize: "11px",
  //           color: "white ",
  //           height: "22px",
  //           marginRight: "10px",
  //           maxWidth: "100px",
  //           background: "#2A9D8F",
  //           paddingLeft: "10px",
  //           paddingRight: "10px",
  //           paddingTop: "3px",
  //           borderRadius: "20px",
  //         }}
  //       >
  //         {benefit.name}
  //       </Grid>
  //     );
  //   });
  // }, []);

  return (
    <>
      <Grid
        sx={{
          width: "900px",
          marginTop: "150px",
          marginLeft: "300px",
          height: "1250px",
          border: "4px solid  #2A9D8F",
          borderRadius: "60px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "40px",
            marginLeft: "70px",
            marginRight: "70px",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>
            Recommend something interesting and help others!
          </Typography>
          <InputLabel sx={{ marginTop: "30px" }}> Title </InputLabel>
          <TextField></TextField>
          <InputLabel sx={{ marginTop: "20px" }}> Type </InputLabel>
          <Select value={type} label="Type">
            {typesOptions}
          </Select>
          <InputLabel sx={{ marginTop: "20px" }}> Recommended age </InputLabel>

          <Grid
            sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <TextField
              type="number"
              sx={{ width: "100px", marginRight: "20px" }}
              placeholder="From"
            ></TextField>
            <Select
              value={type}
              placeholder="From"
              label="Type"
              sx={{ width: "100px" }}
            >
              {ageOptions}
            </Select>

            <TextField
              type="number"
              placeholder="To"
              sx={{ width: "100px", marginRight: "20px", marginLeft: "100px" }}
            ></TextField>
            <Select value={type} label="Type" sx={{ width: "100px" }}>
              {ageOptions}
            </Select>
          </Grid>

          <InputLabel sx={{ marginTop: "20px" }}> Description </InputLabel>
          <TextField
            sx={{ marginTop: "20px" }}
            multiline
            rows={10}
            placeholder="Description"
          />
          <InputLabel sx={{ marginTop: "20px", marginBottom: "20px" }}>
            {" "}
            Image{" "}
          </InputLabel>
          <TextField
            sx={{ width: "750px", marginRight: "20px" }}
            placeholder="Image adress"
          ></TextField>
          <InputLabel sx={{ marginTop: "20px", marginBottom: "20px" }}>
            {" "}
            Benefits{" "}
          </InputLabel>

          <Grid
            sx={{
              height: "250px",
              overflowY: "scroll",

              marginTop: "10px",
            }}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
          >
            {benefit.map((element: Benefit) => {
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
        </Grid>
      </Grid>
    </>
  );
};
export default CreateRecommendationForm;
