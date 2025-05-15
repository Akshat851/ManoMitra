import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const LoginSignup = () => {
  // const [stateLoginDisabled, setStateLoginDisabled] = useState(false);

  // const [loginSucess, setLoginSucess] = useState(false);
  // const [loginError, setLoginError] = useState(false);

  // const [signinSucess, setSigninSucess] = useState(false);
  // const [signinError, setSigninError] = useState(false);

  // const [formLoginData, setFormLoginData] = useState({
  //   name: "",
  //   password: "",
  // });

  const [stateSignupDisabled, setStateSignupDisabled] = useState(false);

  const [formSignupData, setFormSignupData] = useState({
    name: "",
    email: "",
    isDoctor: false,
    specialization: "",
    degree: "",
    password: "",
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setStateSignupDisabled(true);
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setFormSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={4} m="20px">
      <Grid
        size={{ xs: 12, md: 6 }}
        bgcolor="primary.light"
        p="20px"
        borderRadius="8px"
        boxShadow={3}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary.main"
          fontWeight="bold"
          mb="10px"
        >
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignupSubmit}>
          <TextField
            name="name"
            id="name"
            label="Name"
            required
            fullWidth
            placeholder="Enter Your Full Name"
            value={formSignupData.name}
            onChange={handleSignupChange}
            sx={{
              mb: "20px",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
              input: { color: "primary.main" },
            }}
          />
          <TextField
            name="email"
            id="email"
            label="Email"
            required
            fullWidth
            placeholder="Enter Your Email"
            value={formSignupData.email}
            onChange={handleSignupChange}
            sx={{
              mb: "20px",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
              input: { color: "primary.main" },
            }}
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            required
            fullWidth
            placeholder="Enter Password"
            value={formSignupData.password}
            onChange={handleSignupChange}
            sx={{
              mb: "20px",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
              input: { color: "primary.main" },
            }}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={stateSignupDisabled}
            fullWidth
            sx={{
              p: 1,
              mt: 2,
            }}
          >
            {stateSignupDisabled ? (
              <CircularProgress size={24} sx={{ color: "primary.light" }} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        bgcolor="primary.light"
        p="20px"
        borderRadius="8px"
        boxShadow={3}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary.main"
          fontWeight="bold"
          mb="10px"
        >
          Login
        </Typography>
        <Box
          component="form"
          // onSubmit={handleSubmit}
        >
          <TextField
            required
            fullWidth
            id="termp"
            label="trmp"
            name="email"
            placeholder="Enter Your Email"
            // value={formData.email}
            // onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
              input: { color: "primary.main" },
            }}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            // disabled={stateDisabled}
            fullWidth
            sx={{
              p: 1,
              mt: 2,
            }}
          >
            {/* {stateDisabled ? (
                <CircularProgress size={24} sx={{ color: "primary.light" }} />
              ) : (
                "Send Message"
              )} */}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
