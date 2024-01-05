import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import StarIcon from "@mui/icons-material/Star";

function App() {
  return (
    <div>
      {/* Top Section */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Tinder
          </Typography>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <MessageIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={10} sm={8} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image="/src/assets/profile.jpg"
                alt="Profile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Moko Marie, 28
                </Typography>
              </CardContent>
            </Card>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "10px" }}
            >
              Swipe Right to Like, Swipe Left to Dislike
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Section */}
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ThumbDownIcon />}
            >
              Dislike
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<StarIcon />}
            >
              Boost
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              startIcon={<ThumbUpIcon />}
            >
              Like
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
