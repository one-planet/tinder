import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack, Box, Fade } from "@mui/material";
import LandingPage from "./LandingPage"; // Import the LandingPage component

function App() {
  const imagesBoy = ["ken.jpeg", "leo.jpeg", "tom.jpeg"];
  const imagesGirl = ["marg.jpeg", "brie.jpeg", "taylor.jpeg"];
  // const images = imagesBoy;
  const [currentImage, setCurrentImage] = useState(null);
  const [fade, setFade] = useState(true);
  const [gender, setGender] = useState(null); // State to store user's choice

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
    setCurrentImage(selectedGender === "boy" ? imagesBoy[0] : imagesGirl[0]);
  };

  const handleLikeClick = () => {
    const images = gender === "boy" ? imagesBoy : imagesGirl;

    setFade(false); // Start fade out
    setTimeout(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
      setFade(true); // Fade in the new image
    }, 500); // Adjust timing based on fade duration
  };

  if (!gender) {
    return <LandingPage onSelectGender={handleSelectGender} />;
  }

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
        <Fade in={fade} timeout={500}>
          <CardMedia
            component="img"
            height="300"
            image={`src/assets/${currentImage}`}
            alt="Profile Image"
          />
        </Fade>
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
