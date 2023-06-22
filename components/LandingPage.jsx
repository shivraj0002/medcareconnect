import React from "react";
import Box from "@mui/material/Box";
import Carousel from "./Wrappers/Carousel";

const crsImageLinks = [
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3l8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhhcm1hY3l8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhhcm1hY3l8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
];

const LandingPage = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={{
          xs: "395px",
          sm: "395px",
          md: "500px",
          lg: "65vh",
          xl: "75vh",
        }}
      >
        <Carousel>
          {crsImageLinks.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: {
                    xs: "370px",
                    sm: "370px",
                    md: "500px",
                    lg: "65vh",
                    xl: "75vh",
                  },
                  bgcolor: "secondary",
                  backgroundImage: `url("${item}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              ></Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default LandingPage;
