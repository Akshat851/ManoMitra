import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import background_image from "../images/background.jpg";

const article = {
  title: "AI and the Future of Work",
  author: "Akshat Mahajan",
  image: "some_image",
  publishedAt: "2025-05-28T18:02:21Z",
  content:
    "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
  description:
    "Exploring how AI will change employment Exploring how AI will change employment ",
  _id: "t1ech-ai",
};

export const DetailedArticle = () => {
  // fetch article from db using this articleid
  const { articleId } = useParams();

  const date = new Date(article.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

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
        alignSelf="center"
      >
        {article.title}
      </Typography>
      <Typography
        pt="20px"
        fontWeight="bold"
        fontStyle="italic"
        alignSelf="center"
      >
        {article.description}
      </Typography>
      <Box
        py="20px"
        display="flex"
        flexDirection="row"
        alignSelf="center"
        flexWrap="wrap"
        color="text.secondary"
        gap={4}
      >
        <Typography fontStyle="italic">by {article.author}</Typography>
        <Typography fontStyle="italic">{formattedDate}</Typography>
      </Box>
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
