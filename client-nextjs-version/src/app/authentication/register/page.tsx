"use client";
import { Grid, Box, Card, Typography, Stack, Button, TextField } from "@mui/material";
import Link from "next/link";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterRequest = async () => {

  }

  return (
    <PageContainer title="Register" description="this is Register page">
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
                <h2>Register here</h2>
              </Box>
              <Box>
                <Stack mb={3}>
                  <TextField label="Username" fullWidth />
                  <Box mt="15px">
                    <TextField className="" label="Email" fullWidth />
                  </Box>
                  <Box mt="15px">
                    <TextField type="password" label="Password" fullWidth />
                  </Box>

                </Stack>
                <Button color="primary" variant="contained" size="large" fullWidth component={Link} href="/authentication/login">
                  Sign Up
                </Button>
              </Box>

              <Stack
                direction="row"
                justifyContent="center"
                spacing={1}
                mt={3}
              >
                <Typography
                  color="textSecondary"
                  variant="h6"
                  fontWeight="400"
                >
                  Already have an Account?
                </Typography>
                <Typography
                  component={Link}
                  href="/authentication/login"
                  fontWeight="500"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  Sign Up
                </Typography>
              </Stack>

            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Register;
