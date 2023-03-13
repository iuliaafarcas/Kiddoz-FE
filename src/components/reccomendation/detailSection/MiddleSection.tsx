import { Grid, Typography } from "@mui/material";

const MiddleSection = () => {
  var arr = [
    "weight loss",
    "building muscle",
    "teamwork",
    "communication",
    "communication",
    "team work",
    "weight loss",
    "building muscle",
    "teamwork",
    "communication",
    "communication",
    "team work",
  ];

  return (
    <>
      <Grid
        sx={{
          height: "90px",
          width: "540px",
          marginTop: "10px",
          marginLeft: "30px",
        }}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {arr.map((element) => {
          return (
            <>
              <Grid
                item
                key={element}
                sx={{
                  fontSize: "11px",
                  color: "white ",
                  height: "22px",
                  marginRight: "10px",
                  maxWidth: "100px",
                  background: "#2A9D8F",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "3px",
                  borderRadius: "20px",
                }}
              >
                {element}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default MiddleSection;
