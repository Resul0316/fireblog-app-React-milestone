import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import resul from "../assets/resul.jpg";

export default function Profile() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Profile" height="140" image={resul} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Junior Front-end Developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A curious full-blown developer with strong creative thinking skills,
          high energy, and integrity, skilled in developing complex solutions,
          interested in writing new code. Has the ability to create effective
          algorithms, interact positively, and communicate appropriately with
          team members. Able to grasp new technologies and concepts quickly to
          develop innovative and creative solutions to problems. Always eager to
          learn about various technologies, tools, and libraries.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
