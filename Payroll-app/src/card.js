import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardDemo() {
  return (
    <div style={{ margin: "25%" }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            ResMed Payroll
          </Typography>
          <Typography variant="h4" component="div">
            Heading
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            View payroll information
          </Typography>
          <Typography variant="body1">
            This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            <br />
            {'"describes the content"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </div>
  );
}