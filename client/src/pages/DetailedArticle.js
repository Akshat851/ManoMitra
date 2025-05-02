import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import background_image from "../images/background.jpg";

const article = {
  title: "AI and the Future of Work",
  author: "doctor name",
  image: "some_image",
  publishedAt: "2025-04-28T18:02:21Z",
  content:
    "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
  description:
    "Exploring how AI will change employment Exploring how AI will change employment ",
  _id: "t1ech-ai",
};

export const DetailedArticle = () => {
  // fetch article from db using this articleid
  const { articleId } = useParams();
  return (
    <Box
      p="20px"
      display="flex"
      maxWidth="1000px"
      alignSelf="center"
      width="100%"
      flexDirection="column"
      boxSizing="border-box"
    >
      <Typography
        fontWeight="bold"
        variant="h4"
        color="primary.main"
        textAlign="justify"
      >
        {article.title}
      </Typography>
      <Typography
        py="20px"
        fontWeight="bold"
        fontStyle="italic"
        textAlign="justify"
      >
        ~{article.description}
      </Typography>
      <Box
        sx={{
          aspectRatio: "16 / 5",
          overflow: "hidden",
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        component="img"
        src={background_image}
      />
      <Typography pt="20px" textAlign="justify">
        {article.content}
      </Typography>
    </Box>
  );
};
