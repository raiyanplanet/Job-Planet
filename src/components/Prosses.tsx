import { Chat } from "@mui/icons-material";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Website from "../assets/image_processing20220616-8811-dnmt4f.jpg";

const Prosses = [
  {
    number: "01",
    title: "Log in or Register",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,obcaecati?",
  },
  {
    number: "01",
    title: "Log in or Register",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,obcaecati?",
  },
  {
    number: "01",
    title: "Log in or Register",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,obcaecati?",
  },
  {
    number: "01",
    title: "Log in or Register",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,obcaecati?",
  },
];

const Systemwork = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 10px",
          textAlign: "center",
          gap: "15px",
        }}
      >
        <Typography
          sx={{
            border: "1px solid #1565C0",
            padding: "5px 20px",
            borderRadius: "50px",
            color: "#fff",
            bgcolor: "#2082ea",
          }}
        >
          How is it work
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Making Your Job Search Easy
        </Typography>
        <Typography sx={{ width: "700px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          modi beatae soluta dignissimos voluptates sint magni dolores
          consequuntur voluptas ipsum.
        </Typography>
        <Box sx={{ margin: "20px 0px" }}>
          <Grid container spacing={5}>
            {Prosses.map((prosses) => (
              <Grid item>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex ",
                    alignItems: "start",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "250px",
                    gap: "5px",
                    padding: "20px 10px",
                    borderRadius: "10px",
                    ":hover": {
                      scale: "1.05",
                      color: "#fff",
                      bgcolor: "#004484",
                    },
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  <Typography variant="h6">{prosses.number}</Typography>
                  <Typography variant="h6">{prosses.title}</Typography>
                  <Typography textAlign={"left"}>
                    {prosses.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant="h6">02</Typography>
              <Typography variant="h6" sx={{ color: "#004484" }}>
                Personal Job Recommendation
              </Typography>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                facilis eos impedit a sapiente necessitatibus odit pariatur
                laudantium mollitia magnam.
              </Typography>
            </Box>
            <hr />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Chat sx={{ color: "#004484" }} />
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat, perferendis ad laudantium veniam obcaecati quaerat
                itaque accusantium. Facere, porro veritatis?
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "gray",
              width: "100%",
              height: "300px",
              borderRadius: "10px",
            }}
            overflow={"hidden"}
          >
            <img src={Website} alt="" style={{ width: "550px" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Systemwork;
