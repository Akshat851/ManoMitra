import { Grid } from "@mui/material";
import SignupForm from "../components/SignupForm";
import { LoginForm } from "../components/LoginForm";

export const LoginSignup = () => {
  return (
    <Grid container spacing={4} m="20px">
      <Grid
        size={{ xs: 12, md: 6 }}
        bgcolor="primary.light"
        p="20px"
        borderRadius="8px"
        boxShadow={3}
      >
        <SignupForm />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        bgcolor="primary.light"
        p="20px"
        borderRadius="8px"
        boxShadow={3}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
};
