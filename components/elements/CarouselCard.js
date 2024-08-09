import React from "react";
import { Stack, Card, Typography } from "@mui/material";

import Image from "next/image";

const Carousel = ({ description, name, key, className }) => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "inherit",
        minHeight: { xs: 400, sm: 300, md: 350 },
      }}
      key={key}
      className={className}
    >
      <Card
        sx={{
          padding: { xs: "50px 20px 60px", md: "50px 50px 80px" },
          borderRadius: "50px",
          color: "#FF0000",
          height: "100%",
        }}
        className="carousel-card"
      >
        <Typography
          sx={{
            color: "#101010",
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px", // 160%
            letterSpacing: "0.3px",
            paddingBottom: "25px",
          }}
          className="description"
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: "#BB3131",
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px", // 120%
            letterSpacing: "0.4px",
          }}
        >
          {name}
        </Typography>
      </Card>
      <Image
        src="/assets/img/icons/carousel-circle-image.svg"
        width={80}
        height={80}
        style={{ marginTop: "-40px" }}
      />
    </Stack>
  );
};

export default Carousel;
