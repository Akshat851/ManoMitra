import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CrisisPage } from "./pages/CrisisPage";
import { NavigationBar } from "./components/NavigationBar";
import { ContactUsPage } from "./pages/ContactUsPage";
import { NewsPage } from "./pages/NewsPage";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "custom.bglayer",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavigationBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crisis" element={<CrisisPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
