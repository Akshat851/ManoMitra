import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "#e8e8e8",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavigationBar />
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
