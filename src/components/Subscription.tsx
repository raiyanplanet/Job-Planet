import { Box, Button, InputBase, Typography } from "@mui/material";

const Subscription = () => {
  return (
    <>
      <Box bgcolor={"#fff"} padding={3}>
        <Box
          bgcolor={"#004484"}
          color={"#fff"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          padding={"30px 0"}
          borderRadius={"10px"}
        >
          <Typography variant="h4" fontWeight={400}>
            A Job Hunting experience <br />
            like no other
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            obcaecati iste commodi eaque exercitationem!
          </Typography>
          <Box
            border={"1px solid gray"}
            borderRadius={"50px"}
            bgcolor={"#fff"}
            width={"40%"}
            padding={"10px 10px 10px 30px"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase placeholder="Enter your email" />
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Subscription;
