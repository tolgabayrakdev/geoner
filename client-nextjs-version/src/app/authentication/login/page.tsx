"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Button, } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { useState } from "react";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRequest = async () => {

  }

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
                 <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>


              <Box display="flex" alignItems="center" justifyContent="center">
               <h2>Login here</h2>
              </Box>

              <Stack>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="username"
                    mb="5px"
                  >
                    Email
                  </Typography>
                  <CustomTextField variant="outlined" fullWidth />
                </Box>
                <Box mt="25px">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    component="label"
                    htmlFor="password"
                    mb="5px"
                  >
                    Password
                  </Typography>
                  <CustomTextField type="password" variant="outlined" fullWidth />
                </Box>
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                  my={2}
                >

                  <Typography
                    component={Link}
                    href="/authentication/reset-password"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Forgot Password ?
                  </Typography>
                </Stack>
              </Stack>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  href="/"
                  type="submit"
                >
                  Sign In
                </Button>
              </Box>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                mt={3}
              >
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="500"
                >
                  New to Modernize?
                </Typography>
                <Typography
                  component={Link}
                  href="/authentication/register"
                  fontWeight="500"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  Create an account
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default Login;
