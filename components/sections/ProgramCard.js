import { Card, Typography, Stack } from "@mui/material";

export default function ProgramCard({
  title,
  description,
  src,
  href,
  sx,
  order = "asc",
  ...restProps
}) {
  return (
    <Card
      sx={{
        padding: 0,
        borderRadius: "25px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: order === "dec" ? "column-reverse" : "column",
        ...sx,
      }}
      {...restProps}
    >
      <Stack
        sx={{
          height: "50%",
          gap: "5px",
          padding: order === "dec" ? "30px 20px 80px" : "60px 20px 30px",
          backgroundColor: "#04824B",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textTransform: "uppercase",
            color: "#FFF",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px" /* 150% */,
            color: "#FFF",
          }}
        >
          {description}
        </Typography>
      </Stack>
      <img
        fill
        src={src}
        style={{
          height: "50%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
