import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailedArticle = () => {
  const { articleId } = useParams();
  return <Box>from article id {articleId}</Box>;
};
