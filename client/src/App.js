import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CrisisPage } from "./pages/CrisisPage";
import { NavigationBar } from "./components/NavigationBar";
import { ContactUsPage } from "./pages/ContactUsPage";
import { NewsPage } from "./pages/NewsPage";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DetailedArticle } from "./pages/DetailedArticle";
import { Articles } from "./pages/Articles";
import { LoginSignup } from "./pages/LoginSignup";
import { ChatRoom } from "./pages/ChatRoom";
import { AboutUs } from "./pages/AboutUs";
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navBarHeight = isMobile ? 56 : 64;

  return (
    <BrowserRouter>
      <Box
        minHeight="100vh"
        bgcolor="custom.bglayer"
        display="flex"
        flexDirection="column"
        sx={{ paddingTop: `${navBarHeight}px` }}
      >
        <NavigationBar />
        <Box display="flex" flexDirection="column" flex={1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crisis" element={<CrisisPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/articles/:articleId" element={<DetailedArticle />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
