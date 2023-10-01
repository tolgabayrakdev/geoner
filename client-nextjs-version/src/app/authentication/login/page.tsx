"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Button, TextField, } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginRequest = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await fetch("http://127.0.0.1:5000/api/v1/auth/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
      if (result.status === 200 && result.ok) {
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      }
    } catch (err: any) {
      setTimeout(() => {
        setLoading(false);
      }, 1500)
    }
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
              <form onSubmit={handleLoginRequest}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <h2>Login here</h2>
                </Box>

                <Stack>
                  <Box>
                    <TextField onChange={(e)=> setEmail(e.target.value)} label="Email" fullWidth />
                  </Box>
                  <Box mt="15px">
                    <TextField onChange={(e)=> setPassword(e.target.value)} type="password" label="Password" fullWidth />
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
                  <LoadingButton
                    loading={loading}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                  >
                    Sign In
                  </LoadingButton>
                </Box>
              </form>

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
