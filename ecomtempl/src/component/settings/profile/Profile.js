import * as React from "react";
import {
  CssBaseline,
  AppBar,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Link,
  Typography,
  LinearProgress
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./children/AddressForm";
import PaymentForm from "./children/PaymentForm";
import Review from "./children/Review";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

const steps = ["name && address", "details", "Review && confirm"];

function getStepContent(step, user) {
  switch (step) {
    case 0:
      return <AddressForm user={user} />;
    case 1:
      return <PaymentForm user={user} />;
    case 2:
      return <Review user={user} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Profile({ user, userReducer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Profile
          </Typography>
          {userReducer.loading ? (
            <LinearProgress color="inherit" />
          ) : (
            <div>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for updating your profile.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your updation number is #2001539. We have emailed your
                      update confirmation, and will send you an update when
                      there is somthing wrong.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep, user)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1 ? "validate" : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </div>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
