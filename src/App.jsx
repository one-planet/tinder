import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image="src/assets/ryan_gosling_as_ken.jpeg"
          alt="Profile Image"
        />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ margin: 2 }}
        >
          <Button variant="contained" color="success">
            Like
          </Button>
          <Button variant="contained" color="error">
            Dislike
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default App;
