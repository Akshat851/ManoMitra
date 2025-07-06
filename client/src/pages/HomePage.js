import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { RecentArticlesCanvas } from "../components/RecentArticlesCanvas";
import { TrendingKeywordsCanvas } from "../components/TrendingKeywordsCanvas";
import { CrisisCanvas } from "../components/CrisisCanvas";

export const HomePage = () => {
  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        height="100%"
      >
        <Box
          flex={6}
          bgcolor="primary.light"
          m={2}
          p={2}
          borderRadius="8px"
          boxShadow={3}
          display="flex"
        >
          <RecentArticlesCanvas />
        </Box>
        <Box display="flex" flexDirection="column" flex={4} m={2}>
          <Box
            flex={1}
            bgcolor="primary.main"
            p={2}
            borderRadius="8px"
            boxShadow={3}
            display="flex"
          >
            <CrisisCanvas />
          </Box>
          <Box
            flex={2}
            bgcolor="primary.light"
            mt={3}
            p={2}
            borderRadius="8px"
            boxShadow={3}
          >
            <TrendingKeywordsCanvas />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
