import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useUserAuth } from "../Context/UserAuthContext";
import { Alert } from "react-bootstrap";


const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  flex: "1",
  gap: "10px",
  padding: "2%",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
});

const SignUpForm = () => {
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "", // New field for gender
      country: "", // New field for country
      acceptTerms: false, // New field for accepting terms and conditions
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      gender: Yup.string().required("Required"), // Validation for gender field
      country: Yup.string().required("Required"), // Validation for country field
      acceptTerms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ), // Validation for accepting terms and conditions checkbox
    }),
    onSubmit: async (values) => {
      setError("");

      try {
        const signUpRes= await signUp(values);
        if(signUpRes)
        {
          navigate("/");
        }
        else{
          navigate("/signup")
        }
        
      } catch (err) {
        setError(err.message);
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10% 1%",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <FormContainer onSubmit={formik.handleSubmit}>
        <h2
          style={{
            margin: "0px",
            padding: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
            fontSize: "2em",
            fontFamily: "Roboto Slab, serif",
          }}
        >
          Sign Up
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputLabelProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of label
            }}
            inputProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of input element
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of label
            }}
            inputProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of input element
            }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputLabelProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of label
            }}
            inputProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of input element
            }}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            InputLabelProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of label
            }}
            inputProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of input element
            }}
          />
          {/* Gender Radio Buttons */}
          <div style={{display: 'flex', gap: '20px'}}>
            <label style={{ fontFamily: "Montserrat, sans-serif", display: 'flex', gap: '5px' }}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              Male
            </label>
            <label style={{ fontFamily: "Montserrat, sans-serif", display: 'flex', gap: '5px' }}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              Female
            </label>
          </div>
          {/* Country Dropdown */}
          <TextField
            fullWidth
            id="country"
            name="country"
            select
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            SelectProps={{
              native: true,
              style: {
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#f2f2f2",
                },
              },
            }}
            InputLabelProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of label
            }}
            inputProps={{
              style: { fontFamily: "Montserrat, sans-serif" }, // Change border color of input element
            }}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option
              value="pakistan"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Pakistan
            </option>
            <option
              value="india"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              India
            </option>
            <option
              value="bangladesh"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Bangladesh
            </option>
            <option
              value="usa"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              USA
            </option>
            <option
              value="australia"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Australis
            </option>
            <option
              value="italy"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Italy
            </option>
            <option
              value="germany"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Germany
            </option>
            <option value="uk" style={{ fontFamily: "Montserrat, sans-serif" }}>
              UK
            </option>
            <option
              value="canada"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Canada
            </option>
            {/* Add more countries as needed */}
          </TextField>

          

          {/* Accept Terms and Conditions Checkbox */}
          <label style={{ display: 'flex', gap: '5px'}}>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
            />
            Accept Terms and Conditions
          </label>
        </div>
        {/* <Button
          type="submit"
          variant="contained"
          style={{  background: 'black', color: 'white' }}
          sx={{ mt: 2 }}
        >
          Sign Up
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
        <div>
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </FormContainer>
    </div>
  );
};

export default SignUpForm;
