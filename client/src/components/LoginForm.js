import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [sendMessageSucess, setSendMessageSucess] = useState(false);
  const [sendMessageError, setSendMessageError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    axios
      .post(`${process.env.REACT_APP_SERVER_PREFIX}/login`, formData)
      .then((res) => {
        if (res.status === 200 && res.data === "Success") {
          setFormData({
            email: "",
            password: "",
          });
          setSendMessageSucess(true);
        } else {
          setSendMessageError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setSendMessageError(true);
      })
      .finally(() => {
        setDisabled(false);
      });
  };

  const textFieldSx = {
    mb: "20px",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
    },
    input: { color: "primary.main" },
  };

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        color="primary.main"
        fontWeight="bold"
        mb="10px"
      >
        Login
      </Typography>

      <Box component="form" onSubmit={handleFormSubmit}>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          fullWidth
          placeholder="Enter Your Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={textFieldSx}
        />

        <FormControl fullWidth required sx={textFieldSx}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ input: { color: "primary.main" } }}
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={disabled}
          sx={{ p: 1, mt: 2 }}
        >
          {disabled ? (
            <CircularProgress size={24} sx={{ color: "primary.light" }} />
          ) : (
            "Login"
          )}
        </Button>
      </Box>
      <Snackbar
        open={sendMessageSucess}
        autoHideDuration={3500}
        onClose={() => {
          setSendMessageSucess(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            setSendMessageSucess(false);
          }}
          severity="success"
          variant="filled"
        >
          Login Successful
        </Alert>
      </Snackbar>
      <Snackbar
        open={sendMessageError}
        autoHideDuration={3500}
        onClose={() => {
          setSendMessageError(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => {
            setSendMessageError(false);
          }}
          severity="error"
          variant="filled"
        >
          Login Failed
        </Alert>
      </Snackbar>
    </Box>
  );
};
