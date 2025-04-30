import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { Link } from "react-router-dom";

// fetch it from api
const articlePreviews = [
  {
    title: "AI and the Future of Work",
    description:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    _id: "t1ech-ai",
  },
  {
    title: "AI and the Future of Work",
    description:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    _id: "t2ech-ai",
  },
  {
    title: "AI and the Future of Work",
    description:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    _id: "t3ech-ai",
  },
  {
    title: "AI and the Future of Work",
    description:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    _id: "t4ech-ai",
  },
  {
    title: "AI and the Future of Work",
    description:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    _id: "t5ech-ai",
  },
];

const TrendingArticlesCard = ({ article, index }) => {
  return (
    <Box>
      <Box
        component={Link}
        to={`/articles/${article._id}`}
        sx={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          p: "10px",
          "&:hover": {
            bgcolor: "custom.bglayer",
            cursor: "pointer",
          },
        }}
      >
        <FeedOutlinedIcon
          fontSize="large"
          sx={{ color: "primary.main", p: "20px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color="black" fontWeight="bold">
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {article.description}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export const TrendingArticles = () => {
  return (
    <Box flex={1} mt="20px">
      {articlePreviews.map((article, index) => {
        return (
          <TrendingArticlesCard
            key={article._id}
            article={article}
            index={index}
          />
        );
      })}
    </Box>
  );
};
