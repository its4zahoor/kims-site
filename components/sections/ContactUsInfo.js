import { Grid, Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MapPinIcon from "/public/assets/img/icons/map-pin.svg";
import MobileIcon from "/public/assets/img/icons/device-mobile.svg";
import AtEmailIcon from "/public/assets/img/icons/round-alternate-email.svg";
import Image from "next/image";

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  backgroundColor: "#04824B",
  padding: "10px",
  minWidth: "75px",
  minHeight: "75px",
  filter: "drop-shadow(-5px 5px 25px rgba(0, 0, 0, 0.30))",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "-32px",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  maxWidth: { xs: "300px", sm: "350px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "52px 38px 32px",
  borderRadius: "25px",
  width: "100%",
  height: "100%",
}));

export default function ContactUsInfo({ sx, info, ...restProps }) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        gap: "27px",
        ...sx,
      }}
      {...restProps}
    >
      <StyledGridItem item xs={10} sm={5} md={3.2} lg={3}>
        <StyledBox>
          <Image priority src={MapPinIcon} alt="map pin" />
        </StyledBox>
        <StyledCard>
          <Typography
            sx={{
              color: "#1C3E68",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              textTransform: "uppercase",
              paddingBottom: "5px",
            }}
          >
            Address
          </Typography>
          <Typography
            sx={{
              color: "#101010",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            {info?.address ||
              "Main Shahrah-e-Resham, Bakka Mor,Haripur KPK, Pakistan"}
          </Typography>
        </StyledCard>
      </StyledGridItem>
      <StyledGridItem item xs={10} sm={5} md={3.2} lg={3}>
        <StyledBox>
          <Image priority src={MobileIcon} alt="mobile" />
        </StyledBox>
        <StyledCard
          sx={{
            padding: "64px 38px 32px",
            borderRadius: "25px",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#1C3E68",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              textTransform: "uppercase",
              paddingBottom: "5px",
            }}
          >
            contact no.
          </Typography>
          <Typography
            sx={{
              color: "#101010",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            {info?.phoneNumbers?.split(",")?.join(" | ") || "+92-995-670780"}
          </Typography>
        </StyledCard>
      </StyledGridItem>
      <StyledGridItem item xs={10} sm={5} md={3.2} lg={3}>
        <StyledBox>
          <Image priority src={AtEmailIcon} alt="at email" />
        </StyledBox>
        <StyledCard
          sx={{
            padding: "64px 38px 32px",
            borderRadius: "25px",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#1C3E68",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              textTransform: "uppercase",
              paddingBottom: "5px",
            }}
          >
            Email Us
          </Typography>
          <Typography
            sx={{
              color: "#101010",
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            {info?.email || "info@kims.edu.pk"}
          </Typography>
        </StyledCard>
      </StyledGridItem>
    </Grid>
  );
}
