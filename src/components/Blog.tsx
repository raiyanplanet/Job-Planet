import { Box, Button, Card, Typography } from "@mui/material";
import Website from "../assets/image_processing20220616-8811-dnmt4f.jpg";

const Blogitem = [
  {
    img: Website,
    title: "Create a E-commerce website for your business ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing eli Laboriosam dolor impedit animi quam vero modi.sdfdsaf",
  },
  {
    img: Website,
    title: "Create a E-commerce website for your business ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing eli Laboriosam dolor impedit animi quam vero modi.sdfdsaf",
  },
  {
    img: Website,
    title: "Create a E-commerce website for your business ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing eli Laboriosam dolor impedit animi quam vero modi.sdfdsaf",
  },
];

const Blog = () => {
  return (
    <>
      <Box padding={4} display={"flex"} flexDirection={"column"} gap={5}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"self-start"}
        >
          <Box width={"30%"} display={"flex"} flexDirection={"column"} gap={1}>
            <Typography
              color={"#004484 "}
              textAlign={"center"}
              padding={"5px 10px"}
              border={"1px solid #004484"}
              borderRadius={"50px"}
              width={"40%"}
            >
              Insight and tips
            </Typography>
            <Typography variant="h6">
              Find Growth Insight and <br />
              Tips in our Blog
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" sx={{ borderRadius: "50px" }}>
              Read more on the blog
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {Blogitem.map((blog) => (
            <Card
              sx={{
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ overflow: "hidden", width: "400px", height: "200px" }}>
                <img
                  src={blog.img}
                  alt=""
                  style={{ width: "400px", height: "200px" }}
                />
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
                justifyContent={"center"}
                width={"100%"}
                gap={1}
                padding={3}
              >
                <Typography variant="h6">{blog.title}</Typography>
                <Typography>{blog.description}</Typography>
                <Button variant="contained">Read more</Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Blog;
