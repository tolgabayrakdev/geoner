"use client";
import { Grid, Box, Card, Typography, Stack, Button, TextField, Snackbar, Alert } from "@mui/material";
import Link from "next/link";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleRegisterRequest = async (e: any) => {
    e.preventDefault()
    try {
      setLoading(true);

    } catch (err: any) {
      setTimeout(() => {
        setLoading(false);
      }, 1500)
    }
  }

  return (
    <PageContainer title="Register" description="this is Register page">
      <Snackbar open={open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Account created successful.
        </Alert>
      </Snackbar>
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
              <form onSubmit={handleRegisterRequest}>

                <Box display="flex" alignItems="center" justifyContent="center">
                  <Logo />
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center">
                  <h2>Register here</h2>
                </Box>
                <Box>
                  <Stack mb={3}>
                    <TextField onChange={(e) => setEmail(e.target.value)} label="Username" fullWidth />
                    <Box mt="15px">
                      <TextField className="" label="Email" fullWidth />
                    </Box>
                    <Box mt="15px">
                      <TextField type="password" label="Password" fullWidth />
                    </Box>

                  </Stack>
                  <LoadingButton
                    loading={loading}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                  >
                    Sign Up
                  </LoadingButton>
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
              </form>

            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Register;
