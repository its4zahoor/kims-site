import Layout from "@/components/layout/Layout";
import { Card, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import Taekwondo from "/public/assets/img/sports/taekwondo.png";
import TaekwondoGreen from "/public/assets/img/sports/taekwondo_green.png";
import FacilitiesSection from "@/components/sections/FacilitiesSection";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/training-facilities-banner.png"
        >
          <Card
            sx={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#BB3131",
              borderRadius: "50px",
              padding: { xs: "50px 20px", md: "64px" },
              marginX: "auto",
            }}
          >
            {/* TODO: create theme file for mui and define theme */}
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 32, sm: 40 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Sports Facilities
            </Typography>
          </Card>
        </section>
        <Box
          data-background="/assets/img/bg/Vector.png"
          sx={{
            padding: "100px 20px 60px",
            backgroundColor: "#274474",
          }}
          container
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "white",
              paddingBottom: 1.25,
            }}
          >
            "Winners never quit and quitters never win."
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "32px" /* 200% */,
              color: "white",
              maxWidth: "1094px",
              marginX: "auto",
            }}
          >
            we have an extensive sporting facility. These facilities include a
            fully equipped gym, sports hall, football & hockey grounds, Cricket
            pitch, basketball court, and an excellent athletics facility. KIMS
            provides a range of quality sports facilities for the staff and
            students at university and national levels.
            <br />
            -At Khubaib institute of Medical Sciences and Nursing
          </Typography>
        </Box>
        <FacilitiesSection
          mobileImage={Taekwondo}
          desktopImage={Taekwondo}
          contentContainerSx={{ backgroundColor: "#BB3131" }}
          description={[
            "Khubaib  Institute of Medical Sciences and Nursing boasts a vibrant sports  culture, offering students a well-rounded educational experience. With  expansive grounds dedicated to various sports and a state-of-the-art gym  facility, students have ample opportunities to tay active and pursue  their athletic passions. From cricket to football, basketball to  badminton, our campus provides the perfect environment for students to  hone their skills and engage in friendly competition. Whether  participating in intramural tournaments or simply enjoying recreational  sports, students benefit from the physical and mental well-being that  comes with regular exercise and teamwork. At Khubaib Institute, we  recognize the importance of sports in fostering camaraderie, leadership,  and a healthy lifestyle among our student body.",
          ]}
        />
        <FacilitiesSection
          mobileImage={TaekwondoGreen}
          desktopImage={TaekwondoGreen}
          title="Taekwondo"
          description={[
            "With our vision to become a university health center which provides  Medical and Nursing services in the field of Primary Care on par with  developed countries, the Khubaib Institute of Medical Sciences and  Nursing is planning to upgrade its basic health facilities on campus in  our efforts to cultivate and promote good health amongst our community.",
          ]}
          direction={isMobile ? "column-reverse" : "row-reverse"}
          contentContainerSx={{ backgroundColor: "#04824B" }}
        />
      </Layout>
    </>
  );
}
