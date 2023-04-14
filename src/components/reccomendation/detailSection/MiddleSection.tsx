import { Grid } from "@mui/material";
import {
  RecommendationContext,
  RecommendationContextModel,
} from "../../context/RecommendationContext";
import { useContext } from "react";

const MiddleSection = () => {
  const { RecommendationObject } = useContext(
    RecommendationContext
  ) as RecommendationContextModel;
  var arr = RecommendationObject.benefits;

  return (
    <>
      <Grid
        sx={{
          height: "100px",
          maxWidth: "540px",
          marginTop: "10px",
          marginLeft: "30px",
        }}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {arr.map((element) => {
          return (
            <Grid
              item
              key={element.id}
              sx={{
                fontSize: "12px",
                color: "white ",
                marginRight: "10px",
                minWidth: "70px",
                background: "#2A9D8F",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "20px",
                marginBottom: "3px",
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
