import { Card, Typography, Grid, Box, Stack } from "@mui/material";
import Layout from "@/components/layout/Layout";
import HeaderBanner from "@/components/layout/header/HeaderBanner";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <HeaderBanner bannerImage="/assets/img/bg/about-us-banner.png">
          <Card
            sx={{
              width: { xs: "92vw", md: "80vw" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              backgroundColor: "#BB3131",
              borderRadius: "24px",
              padding: { xs: "61px 20px 52px", md: "55px 20px 74px" },
              padding: 5,
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
                maxWidth: "900px",
              }}
            >
              Khubaib institute of medical sciences and nursing
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 20, sm: 16 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: "32px", sm: "24px" },
                color: "white",
                maxWidth: "900px",
              }}
            >
              Khubaib Institute of Medical Sciences & Nursing will be devoted to
              excellence in teaching and front-line research, advancing
              knowledge for a good future.
            </Typography>
          </Card>
        </HeaderBanner>
        <Grid
          data-background="/assets/img/bg/Vector.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 20px", md: "80px", lg: "60px 80px 120px" },
            gap: { xs: 2, md: 10 },
            backgroundColor: "#274474",
          }}
          container
        >
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.32px",
                textTransform: "uppercase",
                color: "white",
                paddingBottom: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "36px",
                color: "white",
              }}
            >
              Khubaib Institute of Medical Sciences and Nursing is established
              with a slogan “Seeking Knowledge and Cultivating Excellence in
              healthcare education and research” and is considered a pioneer
              institute in this region for healthcare education such as
              paramedic, allied health sciences and Nursing.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingTop: 5,
              }}
            >
              The institute is conveniently located at a very strategic location
              on main Shahrah-e-Resham, Haripur at a distance of 08 km from
              Jhari Kas interchange, 8.5km from Hattar interchange and less than
              08km from main Haripur city. The campus is easily reachable by
              public and private transport through M-1 or the Silk Route from
              the federal and provincial capital of Khyber Pakhtunkhwa.
              <br></br>
              <br></br>
              The establishment of Khubaib Institute of Medical Sciences and
              Nursing is a response to a rapidly changing health care and
              research environment, improve patient care and public health
              outcomes through public-private partnership with public sector
              hospitals. The institute, as an exemplary institute of
              public-private partnership, plays a key role in enhancing
              collaboration with government healthcare bodies on all fronts,
              specifically teaching, research, policy and administration public
              service etc.
              <br></br>
              <br></br>
              The establishment of Khubaib Institute of Medical Sciences and
              Nursing is a response to a rapidly changing health care and
              research environment, improve patient care and public health
              outcomes through public-private partnership with public sector
              hospitals. The institute, as an exemplary institute of
              public-private partnership, plays a key role in enhancing
              collaboration with government healthcare bodies on all fronts,
              specifically teaching, research, policy and administration public
              service etc.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <Image
              src="/assets/img/about-us/library.png"
              width={360}
              height={360}
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Dax",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
                textTransform: "uppercase",
                bottom: "32px",
                left: "36px",
                position: "absolute",
                color: "white",
              }}
            >
              Library
            </Typography>
            <Image
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-8 right-9"
              width={24}
              height={24}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <Image
              src="/assets/img/about-us/labs.png"
              width={360}
              height={360}
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Dax",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
                textTransform: "uppercase",
                bottom: "32px",
                left: "36px",
                position: "absolute",
                color: "white",
              }}
            >
              Labs
            </Typography>
            <Image
              className="absolute bottom-8 right-9"
              src="/assets/img/icons/red_arrow_down.svg"
              width={24}
              height={24}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <Image
              src="/assets/img/about-us/sports.png"
              width={360}
              height={360}
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Dax",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
                textTransform: "uppercase",
                bottom: "32px",
                left: "36px",
                position: "absolute",
                color: "white",
              }}
            >
              Sports
            </Typography>
            <Image
              className="absolute bottom-8 right-9"
              src="/assets/img/icons/red_arrow_down.svg"
              width={24}
              height={24}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <Image
              src="/assets/img/about-us/facilities.png"
              width={360}
              height={360}
              style={{ width: "100%", height: "100%" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Dax",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
                textTransform: "uppercase",
                bottom: "32px",
                left: "36px",
                position: "absolute",
                color: "white",
              }}
            >
              Facilities
            </Typography>
            <Image
              className="absolute bottom-8 right-9"
              src="/assets/img/icons/red_arrow_down.svg"
              width={24}
              height={24}
            />
          </Grid>
        </Grid>
        <Stack
          sx={{
            padding: { xs: "80px 20px 40px", md: "100px 120px 40px" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: { xs: 32, sm: 40 },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: { xs: "0.64px", sm: "0.8px" },
              textTransform: "uppercase",
              textAlign: "center",
              color: "#1C3E68",
            }}
          >
            Goal & Objectives
          </Typography>
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "center",
              color: "#101010",
              maxWidth: "850px",
            }}
          >
            This proposal aims to establish a nursing institution aligned with
            KP-Health Foundation's vision for an innovative healthcare model.
            Our goal is to prepare a highly qualified workforce, enhancing
            clinical proficiency for superior healthcare services in the
            province.
          </Typography>
        </Stack>
        <Grid
          container
          sx={{ justifyContent: "center", gap: "20px", marginBottom: "-80px" }}
        >
          <Grid item xs={12} md={5.5} lg={4} sx={{ marginX: "20px" }}>
            <Card
              sx={{
                padding: { xs: "60px 20px", sm: "60px" },
                height: "400px",
                minHeight: "400px",
                maxHeight: "450px",
                borderRadius: "55px",
                background:
                  "linear-gradient(180deg, rgba(4, 130, 75, 0.20) 0%, #04824B 100%), url(/assets/img/about-us/vision.png) lightgray 50% / cover no-repeat",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  height: "100%",
                  gap: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: { xs: 32, sm: 40 },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px" /* 150% */,
                    color: "white",
                  }}
                >
                  At Khubaib Institute of Medical Sciences and Nursing, our
                  vision is to be a leading force in paramedical education and
                  practice nationally and globally. Strive for excellence in
                  healthcare training, commit to quality education and global
                  recognition.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5.5} lg={4} sx={{ marginX: "20px" }}>
            <Card
              sx={{
                padding: { xs: "60px 20px", sm: "60px" },
                height: "400px",
                minHeight: "400px",
                maxHeight: "450px",
                borderRadius: "55px",
                background:
                  "linear-gradient(180deg, rgba(4, 130, 75, 0.20) 0%, #04824B 100%), url(/assets/img/about-us/mission.png) lightgray 50% / cover no-repeat",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  height: "100%",
                  gap: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: { xs: 32, sm: 40 },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  mission
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px" /* 150% */,
                    color: "white",
                  }}
                >
                  The mission of the institutions is to achieve excellence in
                  Paramedics and Nursing education and training, conducting
                  innovative, multi-disciplinary teaching and practice with
                  significant impact on enhanced patient care and health
                  outcomes.
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <Grid
          data-background="/assets/img/bg/Vector.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "128px 20px 100px", md: "200px 80px 128px" },
            gap: { xs: 2, md: 10 },
            backgroundColor: "#274474",
          }}
          container
        >
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.32px",
                textTransform: "uppercase",
                color: "white",
                paddingBottom: 2,
              }}
            >
              Goal & Objectives
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "36px",
                color: "white",
              }}
            >
              This proposal advances the creation of a new nursing institution
              to support KP-Health Foundation's mandate of promoting the
              development of innovative healthcare delivery model of
              public-private partnership to impart clinical skills of the
              students for improved healthcare delivery services in the
              province.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingTop: 5,
                paddingBottom: 3,
              }}
            >
              Objectives of the establishment of the Khubaib Institute of
              Medical Sciences and Nursing are:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingBottom: 3,
              }}
            >
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>
                  To prepare a highly qualified, skilled and knowledgeable
                  healthcare workforce.
                </li>
                <li>
                  To create a competitive academic environment providing a
                  platform for hands-on technical experience and learning.
                </li>
                <li>
                  To reduce the burden of the public sector in providing
                  improved healthcare delivery services in the province
                </li>
                <li>
                  To ensure efficient use of human, physical, and financial
                  resources.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.8px",
                color: "white",
                textAlign: "center",
                paddingTop: 5,
                paddingBottom: 3,
              }}
            >
              Why KIMS & KIN?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px",
                color: "white",
                textAlign: "center",
              }}
            >
              Degree and diploma programs offered at KIMS & KIN will prepare you
              for a successful career in Nursing, paramedics and allied health
              sciences. We offer a list of highly in-demand programs that will
              open a world of opportunities to our students and scholars. We aim
              to be globally respected in healthcare education and training at
              KIMS and KIN. This opens doors for our graduates to lead in
              healthcare organizations and schools, both locally and
              internationally. We believe in providing quality education and
              research through induction of high-quality faculty and providing
              dynamic learning environment. We maintain partnerships and
              collaborations with world-renowned institutions and organizations
              to provide international exposure and research facilities to our
              students to equip them with world-class educational degrees and
              diploma programs.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 20px", md: "120px 80px" },
            gap: { xs: 2, md: 10 },
            minHeight: "500px",
            background:
              "linear-gradient(90deg, #BB3131 0%, rgba(187, 49, 49, 0.90) 100%), url('/assets/img/bg/library-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          container
        >
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                letterSpacing: "0.32px",
                textTransform: "uppercase",
                color: "white",
                paddingBottom: 2,
              }}
            >
              CHAIRMAN'S MESSAGE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "36px",
                color: "white",
              }}
            >
              NADEEM AHMED KHAN
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingTop: 5,
                paddingBottom: 3,
              }}
            >
              Welcome to Khubaib Institute of Medical Sciences and Nursing,
              Haripur! Exciting news: Chairman announces new degree and diploma
              programs in Paramedics, Allied Health Sciences, and Nursing. Our
              institute prioritizes excellence, blending academic rigor with
              practical experience. Join us to become knowledgeable,
              compassionate, and ethically grounded healthcare professionals.
              Visit our campus to experience our values and traditions. Khubaib
              Institute is committed to your personal growth, knowledge-seeking,
              and success in healthcare education and research.
            </Typography>
          </Grid>
        </Grid>
        <Stack
          className="banner-area bg-image"
          sx={{
            background: 'url("/assets/img/about-us/graduation.png")',
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/img/icons/video-play.svg"
            width={120}
            height={120}
            alt="play video"
          />
        </Stack>
        <Box
          sx={{
            padding: { xs: "80px 20px 75px", md: "100px 20px 75px" },
            maxWidth: "1276px",
            marginX: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0.48px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#BB3131",
              paddingBottom: "10px",
            }}
          >
            Introduction
          </Typography>
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#1C3E68",
              paddingBottom: "20px",
            }}
          >
            Our Philosophy
          </Typography>
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            The Prophetic saying, “If anyone carries out medical treatment, yet
            previously he was not known as a medical man, then he takes the
            responsibility”, as well as the theologians' opinion that medical
            knowledge was not only among the praiseworthy sciences but also a
            community obligation, as it is necessary for the life of the body,
            were factors which acted as an inspiration to learning medicine and
            to endeavor to excel in its practice. So, both the abundance of
            translated ancient medical books, which became available to people
            and the saying of the eminent physician Abū Bakr Muḥammad ibn
            Zakariyyā al-Rāzī (Rhazes, 865-925) that: “He who studies the work
            of the Ancients gains the experience of their labor, it is as if he
            himself had lived a thousand years spent on the investigation”, gave
            a great boost for more people to study and practice medicine.
          </Typography>
        </Box>
      </Layout>
    </>
  );
}
