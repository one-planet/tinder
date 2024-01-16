import React from "react";
import { Box, Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
function LandingPage({ onSelectGender }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around", // evenly distribute space
        alignItems: "center",
        height: "100vh", // full viewport height
        backgroundColor: "#eeeeee",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelectGender("boy")}
        sx={{
          width: "100%", // fill the width
          height: "50%", // fill half the height
          fontSize: "1.5rem", // larger text for better readability
          "&:hover": {
            backgroundColor: "primary.dark", // optional: darken on hover
          },
        }}
      >
        Looking for dudes
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSelectGender("girl")}
        sx={{
          width: "100%", // fill the width
          height: "50%", // fill half the height
          fontSize: "1.5rem", // larger text for better readability
          "&:hover": {
            backgroundColor: "secondary.dark", // optional: darken on hover
          },
        }}
      >
        Looking for girls
      </Button>
    </Box>
  );
}

export default LandingPage;
