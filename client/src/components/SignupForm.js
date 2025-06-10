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
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const textFieldSx = {
  mb: "20px",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "primary.main" },
  },
  input: { color: "primary.main" },
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sendMessageSucess, setSendMessageSucess] = useState(false);
  const [sendMessageError, setSendMessageError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isDoctor: false,
    yoe: 0,
    degree: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "isDoctor" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const cleanedData = {
      ...formData,
      yoe: formData.isDoctor ? formData.yoe : 0,
      degree: formData.isDoctor ? formData.degree : "",
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_PREFIX}/register`, cleanedData)
      .then((res) => {
        if (res.status === 200) {
          setFormData({
            name: "",
            email: "",
            isDoctor: false,
            yoe: 0,
            degree: "",
            password: "",
          });
          setSendMessageSucess(true);
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

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        color="primary.main"
        fontWeight="bold"
        mb="10px"
      >
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          required
          fullWidth
          placeholder="Enter Your Full Name"
          autoComplete="username"
          value={formData.name}
          onChange={handleChange}
          sx={textFieldSx}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          required
          fullWidth
          placeholder="Enter Your Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          sx={textFieldSx}
        />
        <FormControl fullWidth required sx={textFieldSx}>
          <InputLabel htmlFor="signup-password">Password</InputLabel>
          <OutlinedInput
            id="signup-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            autoComplete="new-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Box display="flex" alignItems="center" gap={2} pb="10px">
          <Typography color="primary.main">Are you a doctor?</Typography>
          <Switch
            checked={formData.isDoctor}
            onChange={(e) => {
              handleChange({ ...e, target: { ...e.target, name: "isDoctor" } });
            }}
          />
        </Box>

        {formData.isDoctor && (
          <Box>
            <TextField
              name="yoe"
              label="Years Of Experience"
              slotProps={{ htmlInput: { type: "number", min: 0 } }}
              required
              fullWidth
              placeholder="Enter Years of Experience"
              value={formData.yoe}
              onChange={handleChange}
              sx={textFieldSx}
            />
            <TextField
              name="degree"
              label="Education Qualification"
              required
              fullWidth
              placeholder="Enter your Education Qualification"
              value={formData.degree}
              onChange={handleChange}
              sx={textFieldSx}
            />
          </Box>
        )}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={disabled}
          fullWidth
          sx={{ p: 1, mt: 2 }}
        >
          {disabled ? (
            <CircularProgress size={24} sx={{ color: "primary.light" }} />
          ) : (
            "Sign Up"
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
          Registration Successful
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
          Registration Failed
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupForm;
