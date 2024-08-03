import Layout from "@/components/layout/Layout";
import { Card, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import HeaderBanner from "@/components/layout/header/HeaderBanner";
import ImageGalleryRow from "@/components/sections/ImageGalleryRow";
import Health1 from "/public/assets/img/training-facilities/health-1.png";
import Health2 from "/public/assets/img/training-facilities/health-2.png";
import Health3 from "/public/assets/img/training-facilities/health-3.png";
import Library1 from "/public/assets/img/training-facilities/library-1.png";
import Library2 from "/public/assets/img/training-facilities/library-2.png";
import Library3 from "/public/assets/img/training-facilities/library-3.png";
import Library4 from "/public/assets/img/training-facilities/library-4.png";
import Sports1 from "/public/assets/img/training-facilities/sports-1.png";
import Sports2 from "/public/assets/img/training-facilities/sports-2.png";
import Sports3 from "/public/assets/img/training-facilities/sports-3.png";
import Sports4 from "/public/assets/img/training-facilities/sports-4.png";
import LibraryDesktop from "/public/assets/img/training-facilities/library.png";
import LibraryMobile from "/public/assets/img/training-facilities/library-mobile.png";
import HealthDesktop from "/public/assets/img/training-facilities/health.png";
import HealthMobile from "/public/assets/img/training-facilities/health-mobile.png";
import SportsDesktop from "/public/assets/img/training-facilities/sports.png";
import SportsMobile from "/public/assets/img/training-facilities/sports-mobile.png";
import FacilitiesSection from "@/components/sections/FacilitiesSection";

export default function TrainingFacilities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <HeaderBanner bannerImage="/assets/img/bg/training-facilities-banner.png">
          <Card
            sx={{
              width: { xs: "92vw", md: "80vw" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#BB3131",
              borderRadius: "50px",
              padding: { xs: "60px 20px", md: "64px" },
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
              Welcome to <br></br> Khubaib Institute Training Facilities
            </Typography>
          </Card>
        </HeaderBanner>
        <Box
          sx={{
            padding: {
              xs: "70px 20px",
              md: "80px",
              lg: "80px 80px 70px",
              xl: "35px 80px 70px",
            },
            background: 'url("/assets/img/bg/Vector.png")',
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
            Students Learning Resources & Services
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
            Empower your educational journey with our comprehensive Student
            Learning Resources & Services. From tutoring to academic workshops,
            we provide the support you need to excel in your studies. Discover a
            wealth of resources tailored to enrich your learning experience.{" "}
          </Typography>
        </Box>
        <FacilitiesSection
          mobileImage={LibraryMobile}
          desktopImage={LibraryDesktop}
          title="Library"
          description={[
            "The library at Khubaib Institute of Medical Sciences and Nursing contain course specific books and journals as per requirement of relevant councils and boards. The students at undergraduate level an also access world’s academic literature both intranet and wireless Internet access, and ample photocopying and printing facilities.",
            "A team of subject-specialist librarian and staff is on hand to assist, train, and advise students on how to use the collections to their best advantage.",
            "One of the library’s most popular and well-used sections is the Study Rooms, a dedicated undergraduate facility, where students can access and utilize the personal study cubicles, group discussion rooms, and receive assistance in researching and writing their reports, essays, and assignments – a convenient one-stop-centre for the undergraduate student who wants to excel.",
          ]}
        />
        <ImageGalleryRow images={[Library1, Library2, Library3, Library4]} />
        <FacilitiesSection
          mobileImage={HealthMobile}
          desktopImage={HealthDesktop}
          title="Health"
          description={[
            "With our vision to become a university health center which provides  Medical and Nursing services in the field of Primary Care on par with  developed countries, the Khubaib Institute of Medical Sciences and  Nursing is planning to upgrade its basic health facilities on campus in  our efforts to cultivate and promote good health amongst our community.",
          ]}
          direction={isMobile ? "column-reverse" : "row-reverse"}
          contentContainerSx={{ backgroundColor: "#04824B" }}
        />
        <ImageGalleryRow images={[Health1, Health2, Health3]} />
        <FacilitiesSection
          mobileImage={SportsMobile}
          desktopImage={SportsDesktop}
          title="Sports"
          description={[
            "At Khubaib Institute of Medical Sciences and Nursing we have an  extensive sporting facility. These facilities include a fully equipped  gym, sports hall, football & hockey grounds, Cricket pitch,  basketball court, and an excellent athletics facility.",
            "KIMS provides a range of quality sports facilities for the staff and students at university and national levels.",
          ]}
          contentContainerSx={{ backgroundColor: "#BB3131" }}
        />
        <ImageGalleryRow images={[Sports1, Sports2, Sports3, Sports4]} />
      </Layout>
    </>
  );
}
