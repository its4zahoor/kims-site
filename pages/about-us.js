import CounterUp from "@/components/elements/CounterUp";
import { Card, Typography, Grid, Stack, Box } from "@mui/material";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function AboutUs() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/about-us-banner.png"
        >
          <Card
            sx={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              backgroundColor: "#BB3131",
              borderRadius: "24px",
              padding: { xs: "61px 20px 52px", md: "55px 20px 74px" },
              padding: 5,
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
                maxWidth: "900px",
              }}
            >
              Khubaib institute of medical sciences and nursing
            </Typography>
            <Typography
              variant="body1"
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
        </section>
        <Grid
          data-background="/assets/img/bg/Vector.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
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
                paddingBottom: 3,
              }}
            >
              The institute is conveniently located at a very strategic location
              on main Shahrah-e-Resham, Haripur at a distance of 08 km from
              Jhari Kas interchange, 8.5km from Hattar interchange and less than
              08km from main Haripur city. The campus is easily reachable by
              public and private transport through M-1 or the Silk Route from
              the federal and provincial capital of Khyber Pakhtunkhwa.
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
              Khubaib Institute of Medical Sciences and Nursing is a registered
              institute offering diploma and degree programs with approval from
              relevant bodies such as the Higher Education Regulatory Authority
              (HERA) – Khyber Pakhtunkhwa, Pakistan Nursing & Midwifery Council
              (PNMC), Pakistan Pharmacy Council, Faculty of Paramedics and
              Allied Health Sciences (FPAHS) – Khyber Pakhtunkhwa. The institute
              has signed an MoU with Health Foundation (KPHF) – Khyber
              Pakhtunkhwa for District Headquarter Hospital (DHQ), Haripur as a
              teaching/training hospital for practical experience in various
              fields of paramedics and Nursing.
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
            <img
              fill
              style={{ width: "100%", height: "100%" }}
              src="/assets/img/about-us/library.png"
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
            <img
              width={24}
              height={24}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-8 right-9"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <img
              fill
              style={{ width: "100%", height: "100%" }}
              src="/assets/img/about-us/labs.png"
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
            <img
              width={24}
              height={24}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-8 right-9"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <img
              fill
              style={{ width: "100%", height: "100%" }}
              src="/assets/img/about-us/sports.png"
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
            <img
              width={24}
              height={24}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-8 right-9"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ position: "relative" }}>
            <img
              fill
              style={{ width: "100%", height: "100%" }}
              src="/assets/img/about-us/facilities.png"
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
            <img
              width={24}
              height={24}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-8 right-9"
            />
          </Grid>
        </Grid>
        <Box sx={{ padding: { xs: "40px 32px", md: "40px 120px" } }}>
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
            }}
          >
            This proposal aims to establish a nursing institution aligned with
            KP-Health Foundation's vision for an innovative healthcare model.
            Our goal is to prepare a highly qualified workforce, enhancing
            clinical proficiency for superior healthcare services in the
            province.
          </Typography>
        </Box>
        <Grid container sx={{ justifyContent: "center", gap: "20px" }}>
          <Grid item xs={12} md={5}>
            <Card
              data-background="/assets/img/about-us/vision.png"
              sx={{
                paddingX: "65px",
                minWidth: { xs: "90vw", md: "630px" },
                height: "auto",
                minHeight: "400px",
                borderRadius: "50px",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", bottom: "65px", left: "65px" }}>
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    color: "white",
                    paddingBottom: 1,
                  }}
                >
                  vision
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
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              data-background="/assets/img/about-us/mission.png"
              sx={{
                paddingX: "65px",
                minWidth: { xs: "90vw", md: "630px" },
                height: "auto",
                minHeight: "400px",
                borderRadius: "50px",
                backgroundSize: "cover",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", bottom: "65px", left: "65px" }}>
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    color: "white",
                    paddingBottom: 1,
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
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid
          data-background="/assets/img/bg/Vector.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
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
              to support KP-Health Foundation’s mandate of promoting the
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
              <ul>
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
                paddingBottom: 3,
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
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: { xs: 2, md: 10 },
            backgroundColor: "rgba(187, 49, 49, 0.9)",
            minHeight: "500px",
            "&::before": {
              backgroundImage: "url(/assets/img/about-us/chairman-msg-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              // opacity: 0.2, // Set the opacity of the image
            },
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
              CHAIRMAN’S MESSAGE
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
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/about-us/graduation.png"
        />
        <Box sx={{ padding: { xs: "40px 32px", md: "80px" } }}>
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
            responsibility”, as well as the theologians’ opinion that medical
            knowledge was not only among the praiseworthy sciences but also a
            community obligation, as it is necessary for the life of the body,
            were factors which acted as an inspiration to learning medicine and
            to endeavor to excel in its practice. So, both the abundance of
            translated ancient medical books, which became available to people
            and the saying of the eminent physician Abū Bakr Muḥammad ibn
            Zakariyyā al-Rāzī (Rhazes, 865–925) that: “He who studies the work
            of the Ancients gains the experience of their labor, it is as if he
            himself had lived a thousand years spent on the investigation”, gave
            a great boost for more people to study and practice medicine.
          </Typography>
        </Box>
        {/* <div>
          <section className="about-area-two">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">Who we are</span>
                      <h2 className="title tg-svg">
                        The Leading Global{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="about-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Marketplace
                        </span>{" "}
                        for Learning and Instruction
                      </h2>
                    </div>
                    <p className="fw-medium">
                      Borem ipsum dolor sit amet, consectetur adipiscing eliawe
                      ellus luctus nec ullamcorper mattisBorem
                    </p>
                    <p>
                      Bipsum dolor awtnse awctetur adipis we followelit.
                      Borem.Borem ipsum dolamet consectetur adipiscing eliawe
                      awUt elit ellutnse awcon sectetur adipiscing ectetur.
                    </p>
                    <div className="tg-button-wrap">
                      <Link href="/courses" className="btn tg-svg">
                        <span className="text">Explore Courses</span>{" "}
                        <span
                          className="svg-icon"
                          id="about-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-11">
                  <div className="about__images-wrap">
                    <div className="column">
                      <img src="/assets/img/others/about_img03.jpg" alt="img" />
                    </div>
                    <div className="column">
                      <img src="/assets/img/others/about_img04.jpg" alt="img" />
                      <img src="/assets/img/others/about_img05.jpg" alt="img" />
                    </div>
                    <div className="about__shapes">
                      <img
                        src="/assets/img/objects/about_shape01.png"
                        alt="img"
                        className="about-shape-01"
                        data-aos="fade-down-left"
                      />
                      <img
                        src="/assets/img/objects/about_shape02.png"
                        alt="img"
                        className="about-shape-02"
                        data-aos="fade-up-right"
                      />
                      <img
                        src="/assets/img/objects/about_shape03.png"
                        alt="img"
                        className="about-shape-03 rotateme"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="fact-area fact-bg"
            data-background="/assets/img/bg/fact_bg.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9">
                  <div className="section__title text-center mb-50">
                    <span className="sub-title">Worldwide Our Achievement</span>
                    <h2 className="title tg-svg">
                      Grow You{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="fact-title"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Skills
                      </span>
                      To Advance Your Career path
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-webinar" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={325200} />
                      </h3>
                      <p>Students Enrolled</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-graduates" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={11399} />
                      </h3>
                      <p>Top Class Courses</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-countries" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={312} />
                      </h3>
                      <p>World Countries</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-trophy" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count">
                        <CounterUp end={590} />
                      </h3>
                      <p>Award We Received</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mentors-area position-relative section-pt-120 section-pb-90">
            <div className="container">
              <div className="section__title-wrap mb-55">
                <div className="row align-items-center gap-4 gap-md-0">
                  <div className="col-md-8">
                    <div className="section__title text-center text-md-start">
                      <span className="sub-title">
                        Our Qualified People Matter
                      </span>
                      <h2 className="title tg-svg">
                        Top{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-8"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Class
                        </span>{" "}
                        Mentors
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <Link
                        href="/instructor"
                        className="btn btn-border tg-svg"
                      >
                        <span className="text">All Instructors</span>{" "}
                        <span
                          className="svg-icon"
                          id="mentors-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="mentors__item">
                    <div className="mentors__img">
                      <Link href="/instructor-details">
                        <img
                          src="/assets/img/mentors/mentors01.png"
                          alt="mentor"
                        />
                      </Link>
                      <div className="mentors__social">
                        <span className="share">
                          <i className="flaticon-share" />
                        </span>
                        <ul className="social-list list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mentors__content">
                      <div className="mentors__content-top">
                        <h4 className="name">
                          <Link href="/instructor-details">Robert Smith</Link>
                        </h4>
                        <span className="designation">Graphic Design</span>
                      </div>
                      <div className="mentors__content-bottom">
                        <ul className="list-wrap">
                          <li className="students">
                            <i className="flaticon-user-1" />
                            1,135 Students
                          </li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(5.0)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="mentors__item">
                    <div className="mentors__img">
                      <Link href="/instructor-details">
                        <img
                          src="/assets/img/mentors/mentors02.png"
                          alt="mentor"
                        />
                      </Link>
                      <div className="mentors__social">
                        <span className="share">
                          <i className="flaticon-share" />
                        </span>
                        <ul className="social-list list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mentors__content">
                      <div className="mentors__content-top">
                        <h4 className="name">
                          <Link href="/instructor-details">Olivia Mia</Link>
                        </h4>
                        <span className="designation">Web Design</span>
                      </div>
                      <div className="mentors__content-bottom">
                        <ul className="list-wrap">
                          <li className="students">
                            <i className="flaticon-user-1" />
                            1,135 Students
                          </li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.9)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="mentors__item">
                    <div className="mentors__img">
                      <Link href="/instructor-details">
                        <img
                          src="/assets/img/mentors/mentors03.png"
                          alt="mentor"
                        />
                      </Link>
                      <div className="mentors__social">
                        <span className="share">
                          <i className="flaticon-share" />
                        </span>
                        <ul className="social-list list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mentors__content">
                      <div className="mentors__content-top">
                        <h4 className="name">
                          <Link href="/instructor-details">William Hope</Link>
                        </h4>
                        <span className="designation">Digital Marketing</span>
                      </div>
                      <div className="mentors__content-bottom">
                        <ul className="list-wrap">
                          <li className="students">
                            <i className="flaticon-user-1" />
                            3,235 Students
                          </li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.7)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="mentors__item">
                    <div className="mentors__img">
                      <Link href="/instructor-details">
                        <img
                          src="/assets/img/mentors/mentors04.png"
                          alt="mentor"
                        />
                      </Link>
                      <div className="mentors__social">
                        <span className="share">
                          <i className="flaticon-share" />
                        </span>
                        <ul className="social-list list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mentors__content">
                      <div className="mentors__content-top">
                        <h4 className="name">
                          <Link href="/instructor-details">Sophia Ava</Link>
                        </h4>
                        <span className="designation">Web Development</span>
                      </div>
                      <div className="mentors__content-bottom">
                        <ul className="list-wrap">
                          <li className="students">
                            <i className="flaticon-user-1" />
                            2,235 Students
                          </li>
                          <li className="rating">
                            <i className="fas fa-star" />
                            <span className="rating-count">(4.2)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentors__shapes">
              <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
              <img src="/assets/img/objects/mentors_shape02.png" alt="shape" />
            </div>
          </section>
          <section className="cta-area-two position-relative">
            <div
              className="cta__bg"
              data-background="/assets/img/bg/cta_bg.jpg"
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="cta__content">
                    <p>ARE YOU READY FOR THIS OFFER</p>
                    <h2 className="title">50% Offer For Very First 50</h2>
                    <h5 className="sub-title">Student’s Mentors</h5>
                    <div className="tg-button-wrap justify-content-center">
                      <Link href="/contact" className="btn tg-svg">
                        <span className="text">Become a Student</span>{" "}
                        <span
                          className="svg-icon"
                          id="cta-btn-2"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta__shapes">
              <img
                src="/assets/img/objects/cta_shape001.svg"
                alt="img"
                className="position-absolute"
                data-aos="fade-down-right"
                data-aos-delay={300}
              />
              <img
                src="/assets/img/objects/cta_shape002.png"
                alt="img"
                className="position-absolute"
              />
              <img
                src="/assets/img/objects/cta_shape003.svg"
                alt="img"
                className="position-absolute"
                data-aos="fade-up-left"
                data-aos-delay={300}
              />
            </div>
          </section>
          <section className="events-area position-relative section-pt-120 section-pb-90">
            <div className="container">
              <div className="section__title-wrap mb-55">
                <div className="row align-items-center gap-4 gap-md-0">
                  <div className="col-md-8">
                    <div className="section__title text-center text-md-start">
                      <span className="sub-title">Featured Events</span>
                      <h2 className="title tg-svg">
                        Upcoming{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="event-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Events
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <Link href="/events" className="btn btn-border tg-svg">
                        <span className="text">Our All Events</span>{" "}
                        <span
                          className="svg-icon"
                          id="events-btn"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb01.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology Conference
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> United Kingdom
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb02.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Exactly How Technology Can Make Reading Better
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> Tokyo Japan
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <Link
                        href="/events-details"
                        className="shine__animate-link"
                      >
                        <img
                          src="/assets/img/events/event_thumb03.jpg"
                          alt="img"
                        />
                      </Link>
                      <span className="events__date">
                        <i className="flaticon-calendar-date" /> 25 May, 2023
                      </span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title">
                        <Link href="/events-details">
                          Aewe Creating Futures Through Technology Conference
                        </Link>
                      </h4>
                      <span className="location">
                        <i className="flaticon-pin-1" /> New Work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mentors__shapes">
              <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
              <img
                src="/assets/img/objects/events_shape.png"
                width={98}
                alt="shape"
              />
            </div>
          </section>
        </div> */}
        <section className="-mt-[50px]">
          <div className="container relative -bottom-40 bg-gradient-to-r from-blue-900 to-blue-500 rounded-3xl">
            <img
              sizes="25vw"
              src="/assets/img/about-us/brochure.png"
              width={50}
              height={50}
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
            <div className="absolute top-20 left-10 uppercase text-black">
              <div className="w-1/2 flex flex-col relative">
                <span>Download our brochure</span>
                <span className="text-3xl font-extrabold">
                  Ready to explore our full suite of academic & Guide solutions?
                </span>
                <button className="py-2 px-4 border-slate-800 border-2 font-semibold rounded-full shadow-md hover:bg-red-800">
                  <Link href="/courses">
                    <span className="mr-3">Download Our Brochure</span>
                    <i class="zmdi zmdi-download" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
