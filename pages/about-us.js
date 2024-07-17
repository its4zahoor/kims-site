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
          className="bg-blue-900"
          data-background="/assets/img/bg/Vector.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: { xs: 2, md: 10 },
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
        <div>
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
        </div>
      </Layout>
    </>
  );
}
