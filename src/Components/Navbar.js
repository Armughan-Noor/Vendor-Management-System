import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError("");
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      {error && (
        <Alert style={{ background: "red", color: "white" }}>{error}</Alert>
      )}
      <nav
        style={{ position: "sticky", top: 0, zIndex: 20, background: "black" }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="/home"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ ml: 1, fontWeight: "bold", color: "#FF8C00" }}
            >
              VENDOR APP
            </Typography>
          </a>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Typography
              variant="body1"
              component="a"
              href="/home"
              sx={{ color: "#fff", fontSize: "1.25rem", textDecoration: "none", "&:hover": { color: "#FF8C00" } }}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href="/about"
              sx={{ color: "#fff", fontSize: "1.25rem", textDecoration: "none", "&:hover": { color: "#FF8C00" } }}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              component="a"
              href="/contact"
              sx={{ color: "#fff", fontSize: "1.25rem", textDecoration: "none", "&:hover": { color: "#FF8C00" } }}
            >
              Contact
            </Typography>
          </nav>
          <nav style={{ display: "flex", gap: "20px" }}>
            {user ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                    "&:hover": { color: "#FF8C00" },
                  }}
                >
                  {user.displayName}
                </Typography>
              </div>
            ) : (
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: "1rem" }}
              >
                Log In First
              </Typography>
            )}
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#000",
                color: "white",
                borderRadius: "8px",
                padding: '7px',
                "&:hover": {  color: '#FF8C00' },
              }}
              onClick={handleLogOut}
            >
              Log out
            </Button>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
