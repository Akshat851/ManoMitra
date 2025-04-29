import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export const NewsCard = ({ item }) => {
  const { title, description, url, urlToImage } = item;
  return (
    <Card
      sx={{
        maxWidth: 320,
        m: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="200px"
        image={urlToImage}
        alt="image"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary.main"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: "10px", ml: "10px" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => window.open(url, "_blank")}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
