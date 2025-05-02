import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { Link } from "react-router-dom";

// fetch it from api
const articlePreviews = [
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t1ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t2ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t3ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t4ech-ai",
  },
  {
    title: "AI and the Future of Work",
    author: "doctor name",
    image: "some_image",
    publishedAt: "2025-04-28T18:02:21Z",
    content:
      "Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employmentExploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment Exploring how AI will change employment",
    description: "short desc",
    _id: "t5ech-ai",
  },
];

const RecentArticlesCard = ({ article }) => {
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

export const RecentArticles = () => {
  return (
    <Box flex={1} mt="20px">
      {articlePreviews.map((article) => {
        return <RecentArticlesCard key={article._id} article={article} />;
      })}
    </Box>
  );
};
