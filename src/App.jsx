import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack, Box } from "@mui/material";

function App() {
  // Array of images
  const images = ["ken.jpeg", "leo.jpeg", "tom.jpeg"];

  // State to keep track of the current image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to handle 'Like' button click
  const handleLikeClick = () => {
    setCurrentImage((prev) => {
      // Find the index of the current image
      const currentIndex = images.indexOf(prev);
      // Calculate the index of the next image
      const nextIndex = (currentIndex + 1) % images.length;
      // Return the next image
      return images[nextIndex];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eeeeee",
        padding: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 345 },
          mx: "auto",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={`src/assets/${currentImage}`} // Use state for the image source
          alt="Profile Image"
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ margin: 2 }}
        >
          <Button variant="contained" color="success" onClick={handleLikeClick}>
            Like
          </Button>
          <Button variant="contained" color="error" onClick={handleLikeClick}>
            Dislike
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default App;
