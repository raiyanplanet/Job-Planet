import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  InputBase,
  ListItem,
  Typography,
} from "@mui/material";

const Navber = () => {
  return (
    <AppBar
      sx={{
        padding: "20px 30px",
        bgcolor: "#004484",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        JOB PLANET
      </Typography>

      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "35%",
        }}
      >
        <Typography
          sx={{
            ":hover": { color: "#1565C0" },
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            ":hover": { color: "#1565C0" },
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          Find jobs
        </Typography>
        <Typography
          sx={{
            ":hover": { color: "#1565C0" },
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          Companies
        </Typography>
        <Typography
          sx={{
            ":hover": { color: "#1565C0" },
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          Services
        </Typography>
      </ListItem>

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box
          sx={{
            bgcolor: "transparent",
            padding: "3px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #1565C0",
            borderRadius: "50px",
            gap: "5px",
          }}
        >
          <Search sx={{ opacity: "70%" }} />{" "}
          <InputBase
            placeholder="Search Jobs"
            sx={{ color: "#fff" }}
          ></InputBase>
        </Box>
        <Button sx={{ color: "#fff", border: "1px solid #1565C0" }}>
          Sign in
        </Button>
        <Button variant="contained">Sign up</Button>
      </Box>
    </AppBar>
  );
};

export default Navber;
