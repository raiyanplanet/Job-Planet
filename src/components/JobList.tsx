import { Book, Save } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

const JobList = [
  {
    logo: "",
    companyname: "Raiyan Software",
    position: "Web Application Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "1000",
    sallerytime: "monthly",
  },
  {
    logo: "",
    companyname: "Raiyan tach",
    position: "Frontend Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "599",
    sallerytime: "monthly",
  },
  {
    logo: "",
    companyname: "Raiyan it",
    position: "Mobile Application Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "1400",
    sallerytime: "monthly",
  },
  {
    logo: "",
    companyname: "Raiyan inc",
    position: "Django Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "2000",
    sallerytime: "monthly",
  },
  {
    logo: "",
    companyname: "Raiyan Software",
    position: "Data Scincetist",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "1200",
    sallerytime: "monthly",
  },
  {
    logo: "",
    companyname: "Petzen Shop",
    position: "Laravel Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam maxime culpa ab esse, quidem nihil rem fugit quisquam itaque dolores.",
    lavel: "Remote",
    lavel2: "Part-Time",
    lavel3: "Full-Time",
    sallery: "699",
    sallerytime: "monthly",
  },
];

const Joblist = () => {
  return (
    <Box sx={{ bgcolor: "#f4f4f4" }}>
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
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                bgcolor: "#0056a8",
                border: "1px solid #1565C0",
                padding: "6px 20px",
                borderRadius: "50px",
                opacity: "100%",
              }}
            >
              Feature Jobs
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Various Career Opportunity <br />
              Waiting for You
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ width: "50%", color: "#383838" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              dolorum omnis? Dolores fuga blanditiis eum exercitationem
              provident asperiores culpa iste?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row ",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {JobList.map((joblist) => (
              <Paper
                elevation={4}
                sx={{
                  width: "350px",
                  padding: "20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  gap: "50px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Book sx={{ color: "tomato", fontSize: "60px" }} />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        <Typography variant="h6">
                          {joblist.companyname}
                        </Typography>
                        <Typography>5 Hours ago</Typography>
                      </Box>
                    </Box>
                    <Save
                      sx={{
                        cursor: "pointer",
                        ":hover": { color: "#004484", transition: "0.3s" },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h6">{joblist.position}</Typography>
                    <Typography variant="subtitle1">
                      {joblist.description}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <Button
                      sx={{
                        border: "1px solid gray",
                        padding: "5px 10px",
                        borderRadius: "50px",

                        fontSize: "10px",
                        color: "gray",
                      }}
                    >
                      {joblist.lavel}
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid gray",
                        padding: "5px 10px",
                        borderRadius: "50px",

                        fontSize: "10px",
                        color: "gray",
                      }}
                    >
                      {joblist.lavel2}
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid gray",
                        padding: "5px 10px",
                        borderRadius: "50px",

                        fontSize: "10px",
                        color: "gray",
                      }}
                    >
                      {joblist.lavel3}
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", fontWeight: "500" }}
                  >
                    ${joblist.sallery}
                    <Typography variant="subtitle2" sx={{ fontWeight: "400" }}>
                      /{joblist.sallerytime}
                    </Typography>
                  </Typography>

                  <Button variant="contained">Apply Now</Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Joblist;
