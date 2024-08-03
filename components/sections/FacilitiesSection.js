import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function TrainingFacilitiesSection({
  sx,
  mobileImage,
  desktopImage,
  title,
  description,
  titleSx,
  descriptionSx,
  contentContainerSx,
  direction = "row",
  ...restProps
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      sx={{
        flexDirection: direction,
        ...sx,
      }}
      {...restProps}
    >
      <Grid item xs={12} sm={6}>
        <Image
          src={isMobile ? mobileImage : desktopImage}
          alt={`Image of ${title}`}
          width={720}
          height={550}
          style={{
            minWidth: "100%",
            minHeight: "100%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          minHeight: 450,
          paddingY: { xs: "20px" },
          paddingLeft: {
            xs: "20px",
            sm: direction === "row-reverse" ? "80px" : "20px",
          },
          paddingRight: {
            xs: "20px",
            sm: direction === "column" ? "80px" : "20px",
          },
          backgroundColor: "#101010",
          ...contentContainerSx,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Dax",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            color: "#FFF",
            ...titleSx,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Dax",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px" /* 150% */,
            color: "#FFF",
            ...descriptionSx,
          }}
        >
          {description.map((desc) => (
            <>
              {desc}
              <br></br>
              <br></br>
            </>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
}
