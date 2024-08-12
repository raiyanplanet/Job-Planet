import {
  Copyright,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Link, List, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box padding={"50px 10px"}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          {/* Footer left */}
          <Box
            justifyContent={"space-between"}
            display={"flex"}
            flexDirection={"column"}
            height={"40vh"}
          >
            <Box flexDirection={"column"}>
              <Typography variant="h5" fontWeight={600} color={"primary"}>
                JOB PLANET
              </Typography>
              <Typography width={"200px"} color={"#7c7c7c"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ea?
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Follow us
                </Typography>
              </Box>
              <List sx={{ display: "flex", gap: "10px" }}>
                <Link sx={{ cursor: "pointer", color: "#004484" }}>
                  <Facebook />
                </Link>
                <Link sx={{ cursor: "pointer", color: "#004484" }}>
                  <Instagram />
                </Link>
                <Link sx={{ cursor: "pointer", color: "#004484" }}>
                  {" "}
                  <LinkedIn />
                </Link>
                <Link sx={{ cursor: "pointer", color: "#004484" }}>
                  <Twitter />
                </Link>
              </List>
            </Box>
          </Box>
          {/* Footer nav 1 */}
          <Box>
            <List
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Technology Professionals
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Browse for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Companies
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Advice
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Evants
              </Typography>
            </List>
          </Box>

          {/* Footer nav 2 */}
          <Box>
            <List
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Technology Professionals
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Browse for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Companies
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Advice
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Evants
              </Typography>
            </List>
          </Box>

          {/* Footer nav 3 */}
          <Box>
            <List
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Technology Professionals
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Browse for Jobs
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Search for Companies
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Advice
              </Typography>

              <Typography
                sx={{
                  ":hover": { color: "#004484" },
                  transition: "0.3s",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "#7c7c7c",
                }}
              >
                Career Evants
              </Typography>
            </List>
          </Box>
        </Toolbar>
        {/* nav bottom */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          height={"50px"}
        >
          <Typography
            variant="subtitle1"
            color={"#a0a0a0"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Copyright <Copyright /> 2024 Job Planet. All Right Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
