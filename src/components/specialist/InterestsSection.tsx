import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const InterestsSection = () => {
  const interests = [
    "Limits",
    "Parenting",
    "Bullying",
    "Children fears",
    "Relation between siblings",
    "Relation parent-children",
  ];
  return (
    <Grid sx={{ width: "1250px", height: "300px" }}>
      <Typography sx={{ fontSize: "20px" }}>
        <b>About me</b>
      </Typography>
      <Typography sx={{ fontSize: "16px", marginTop: "10px" }}>
        I am ambitious and driven. I thrive on challenge and constantly set
        goals for myself, so I have something to strive towards. I am not
        comfortable with settling, and I am always looking for an opportunity to
        do better and achieve greatness. In my previous role, I was promoted
        three times in less than two years.I am highly organised. I always take
        notes, and I use a series of tools to help myself stay on top of
        deadlines. I like to keep a clean workspace and create a logical filing
        method so I am always able to find what I need. I find this increases
        efficiency and also helps the rest of the team stay on track. In my last
        role, I created a new filing process that increased departmental
        efficiency by 25 percent.
      </Typography>
      <Typography
        sx={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
      >
        <b>Domains of activity</b>
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        {interests.map((element) => {
          return <Typography>{`\u2022 ${element}`}</Typography>;
        })}
      </Grid>
    </Grid>
  );
};
export default InterestsSection;