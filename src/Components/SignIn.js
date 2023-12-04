import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useUserAuth } from "../Context/UserAuthContext";
import { TextField, Typography, Paper } from "@material-ui/core";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";


const SignIn = () => {
  const { signIn } = useUserAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setError("");
      try {
        await signIn(values.email, values.password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    },
  });

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "5%" }}>
        <Paper elevation={8} style={{ padding: "5%", display: "flex", flexDirection: "column", maxWidth: "400px", width: "100%" }}>
          <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>
            Vendor Management System
          </Typography>

          <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {error && <Alert severity="error" style={{ marginTop: "10px" }}>{error}</Alert>}

            {/* <Button type="submit" variant="contained"  style={{ marginTop: "20px", background: 'black', color: 'white' }}>
              Sign In
            </Button> */}
            <Button
        variant="outlined"
        type="submit"
        sx={{
          backgroundColor: "#000",
          color: "white",
          borderRadius: "8px",
          padding: '7px',
          marginTop: '20px',
          "&:hover": { color: '#FF8C00', background: 'black' },
        }}
      >
        Sign In
      </Button>

            <Typography variant="body2" style={{ marginTop: "10px", textAlign: "center" }}>
              <a href="/signup" style={{ color: "#3f51b5", textDecoration: "none" }}>Create an account</a>
            </Typography>
          </form>
        </Paper>
      </div>
    </section>
  );
};

export default SignIn;
