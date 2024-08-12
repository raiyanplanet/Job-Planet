import {
  AccountBalance,
  ArrowRightSharp,
  AssignmentInd,
  Book,
  Code,
  Computer,
  DesignServices,
  DesignServicesOutlined,
  GamepadOutlined,
  IosShare,
  LocationSearching,
  ManageAccounts,
  MobileFriendly,
  Search,
} from "@mui/icons-material";
import { Box, Button, InputBase, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#004484",
          width: "100%",
          flexDirection: "column",
          gap: "20px",
          padding: "110px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
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
            No.1 Job searcing Platform
          </Typography>

          <Typography
            variant="h3"
            sx={{
              display: "flex",
              flexDirection: "column ",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "400",
              color: "#fff",
            }}
          >
            Find a Skilled Individual <span>to do the job</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              borderRadius: "50px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, at.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              bgcolor: "#fff",
              padding: "5px 5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50px",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 10px",
                gap: "5px",
              }}
            >
              <Search sx={{ opacity: "50%" }}></Search>
              <InputBase
                placeholder="Search a job"
                sx={{
                  width: "400px",
                  border: "none",
                  outline: "none",
                  fontSize: "20px",
                }}
              ></InputBase>
            </Box>
            <Typography
              sx={{
                display: "flex ",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                opacity: "50%",
                fontSize: "20px",
              }}
            >
              <LocationSearching sx={{ opacity: "50%" }}></LocationSearching>
              <span>City, State, XIP or Remote</span>
            </Typography>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                borderRadius: "50px",
                padding: "5px 20px",
              }}
            >
              Search
            </Button>
          </Box>
          <Typography color={"#fff"} sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            officia.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <Code
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Web Development <ArrowRightSharp />
          </Button>

          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <DesignServices
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Web Design <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <MobileFriendly
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Mobile app Development <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <IosShare
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            IOS Development <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <GamepadOutlined
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Game Development <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <DesignServicesOutlined
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Graphic Design <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <Computer
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            SEO Services <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <ManageAccounts
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Project Management <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <Book
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Content Writting <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <AssignmentInd
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Virtual Assistent <ArrowRightSharp />
          </Button>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "8px 8px",
              border: "1px solid #0056a8",
              bgcolor: "transparent",
              borderRadius: "10px",
            }}
          >
            {" "}
            <AccountBalance
              sx={{
                bgcolor: "#fff",
                color: "#0056a8",
                padding: "3px 3px",
                borderRadius: "50%",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
            Accountent <ArrowRightSharp />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
