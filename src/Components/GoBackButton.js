import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoBackComponent = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Replace "/home" with the actual home page route
    navigate("/home");
  };

  return (
    <div style={{  margin: "20px" }}>
      {/* Your component content goes here */}
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "#000",
          color: "white",
          borderRadius: "8px",
          padding: '7px',
          marginTop: '10px',
          "&:hover": { color: '#FF8C00', background: 'black' },
        }}
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </div>
  );
};

export default GoBackComponent;
