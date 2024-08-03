import { Stack } from "@mui/material";

export default function HeaderBanner({ bannerImage, children, sx }) {
  return (
    <Stack
      className="banner-area banner-bg"
      sx={{
        backgroundImage: `url(${bannerImage})`,
        paddingTop: { xs: "300px", md: "500px", xl: "600px" },
        paddingBottom: { xs: "20px", lg: "10px" },
        backgroundRepeat: "no-repeat",
        backgroundColor: "#274474",
        height: "max-content",
        alignItems: "center",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}
