import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export const ContactUsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const alignValue = isSmallScreen ? "center" : "inherit";

  const [stateDisabled, setStateDisabled] = useState(false);
  const [sendMessageSucess, setSendMessageSucess] = useState(false);
  const [sendMessageError, setSendMessageError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStateDisabled(true);
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name"),
      email: formData.get("email"),
      description: "Message from ManoMitra -> " + formData.get("description"),
    };
    emailjs
      .send("service_zjrq4h8", "template_rmlm0sy", obj, "xxcZVUhmiI8DoEz8L")
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            description: "",
          });
          setSendMessageSucess(true);
          setStateDisabled(false);
        },
        (error) => {
          setSendMessageError(true);
          setStateDisabled(false);
          console.log(error);
        }
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Box display="flex" justifyContent="center" pt="20px">
      <Box
        maxWidth="md"
        sx={{
          m: "20px",
          bgcolor: "primary.light",
          p: "20px",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary.main"
          fontWeight="bold"
          sx={{ mb: "10px" }}
        >
          Contact Us
        </Typography>

        <Typography align="center" color="primary.main">
          Feel free to contact us with any questions or to learn more about our
          services. Our team is ready to support you on your journey to mental
          wellness. Connect with us today to take the first step toward healing.
        </Typography>
        <Grid container pt={6}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ pb: "20px", color: "primary.main" }}>
              <Typography variant="h6" align={alignValue} fontWeight="bold">
                EMAIL
              </Typography>
              <Typography align={alignValue}>info@manomitra.com</Typography>
              <Typography variant="h6" align={alignValue} fontWeight="bold">
                <br />
                PHONE
              </Typography>
              <Typography align={alignValue}>1800-120-820050</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    name="name"
                    id="name"
                    label="Name"
                    required
                    fullWidth
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      input: { color: "primary.main" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      input: { color: "primary.main" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    name="description"
                    label="Message"
                    placeholder="Enter Your Message"
                    multiline
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      textarea: {
                        color: "primary.main",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={stateDisabled}
                fullWidth
                sx={{
                  p: 1,
                  mt: 2,
                }}
              >
                {stateDisabled ? (
                  <CircularProgress size={24} sx={{ color: "primary.light" }} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
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
            Mail sent successfully.
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
            Error sending mail.
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
