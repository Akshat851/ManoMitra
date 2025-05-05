import { Box, Typography } from "@mui/material";
import React from "react";

// need to fetch it from backend
const keywordData = [
  { word: "React", id: 30 },
  { word: "JavaScript", id: 50 },
  { word: "CSS", id: 20 },
  { word: "HTML", id: 16 },
  { word: "HTML", id: 17 },
  { word: "JavaScript", id: 51 },
  { word: "HTML", id: 18 },
];

const RenderKeywords = ({ keywordObj }) => {
  const opacity = Math.random() * 0.5 + 0.5;
  const degrees = Math.random() * 20 - 10;
  const fontSize = `${Math.floor(Math.random() * 17) + 20}px`;

  return (
    <Typography
      fontSize={fontSize}
      mr="5px"
      fontWeight="bold"
      color="primary.main"
      sx={{
        transform: `rotate(${degrees}deg)`,
        opacity: opacity,
      }}
    >
      {keywordObj.word}
    </Typography>
  );
};

export const TrendingKeywordsCanvas = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Typography color="primary.main" fontWeight="medium" fontSize="1.2rem">
        Trending Keywords
      </Typography>
      <Box
        flex={1}
        alignContent="center"
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        {keywordData.map((keywordObj) => {
          return <RenderKeywords key={keywordObj.id} keywordObj={keywordObj} />;
        })}
      </Box>
    </Box>
  );
};
