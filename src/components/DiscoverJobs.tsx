import { Box, Button, Typography } from "@mui/material";
import Figma from "../assets/icons/figma.png";
import Wordpress from "../assets/icons/Wordpress_Blue_logo.png";
import Photoshop from "../assets/icons/photoshop.png";
import Shopify from "../assets/icons/shopify.png";
import Men from "../assets/image_processing20220616-8811-dnmt4f.jpg";

const AvailableJobs = [
  {
    jobicon: Figma,
    jobtitle: "Figma",
    jobavailabe: "1500 Jobs Availabe",
  },
  {
    jobicon: Wordpress,
    jobtitle: "Wordpress",
    jobavailabe: "980 Jobs Availabe",
  },
  {
    jobicon: Photoshop,
    jobtitle: "Photoshop",
    jobavailabe: "1400 Jobs Availabe",
  },
  {
    jobicon: Shopify,
    jobtitle: "Shopify",
    jobavailabe: "1000 Jobs Availabe",
  },
];

const DiscoverJobs = () => {
  return (
    <>
      <Box
        display={"flex"}
        padding={3}
        width={"100%"}
        minHeight={"100vh"}
        bgcolor={"#e8e8e8"}
      >
        <Box
          display={"flex"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={"50%"}
            bgcolor={"teal"}
            height={400}
            borderRadius={2}
            overflow={"hidden"}
          >
            <img src={Men} alt="" style={{ width: "660px" }} />
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            padding={"0px 50px"}
            gap={3}
          >
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography
                bgcolor={"transparent"}
                color={"#004484"}
                border={"1px solid blue"}
                borderRadius={"50px"}
                width={150}
                padding={"5px"}
                textAlign={"center"}
                sx={{ cursor: "pointer" }}
              >
                Featured Post
              </Typography>
              <Typography variant="h4" fontWeight={500}>
                Discover Jobs Across <br />
                Popular Roles
              </Typography>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores consectetur corporis vel commodi sit doloribus
                perspiciatis ipsa quidem illo nam!
              </Typography>
            </Box>
            <Box display={"flex"} flexWrap={"wrap"} gap={2} width={400}>
              {AvailableJobs.map((availabe) => (
                <Box
                  bgcolor={"#fff"}
                  padding={"7px "}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  fontSize={30}
                  borderRadius={"6px"}
                  width={170}
                  boxShadow={2}
                  sx={{
                    ":hover": {
                      bgcolor: "#1565C0",
                      color: "#fff",
                      scale: "1.05",
                    },
                    transition: "300ms",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={availabe.jobicon}
                    alt="Jobs"
                    style={{ width: "30px" }}
                  />
                  <Box>
                    <Typography variant="h6" fontSize={15}>
                      {availabe.jobtitle}
                    </Typography>
                    <Typography fontSize={13} color={"#a3a3a3"}>
                      {availabe.jobavailabe}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                color: "#004484",
                border: "1px solid #004484",
                borderRadius: "50px",
              }}
            >
              See more
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DiscoverJobs;
