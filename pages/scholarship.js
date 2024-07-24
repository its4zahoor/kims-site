import { Card, Typography, Grid } from "@mui/material";
import DataGrid from "@/components/common/DataGrid";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Scholarship() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/scholarship-banner.png"
          style={{ height: "820px" }}
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
                maxWidth: "1064px",
              }}
            >
              Scholarships
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
                maxWidth: "1064px",
              }}
            >
              The Financial Assistance Program aims to assist students who have
              limited financial need to support the cost of their education.
              Currently, the types of Financial Assistance offered to students
              in the listed programs are
            </Typography>
          </Card>
        </section>
        <Grid
          data-background="/assets/img/scholarship/scholarship-program-bg.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: 2.5,
            backgroundColor: "#274474",
          }}
          container
        >
          <Grid item sx={{ minWidth: 200, maxWidth: 550 }}>
            <DataGrid
              columns={[
                {
                  field: "program",
                  headerName: "Academic Programs",
                  width: 550,
                },
              ]}
              rows={[
                { id: 1, program: "Diploma Programs in Paramedics" },
                { id: 2, program: "Diploma Programs in Nursing" },
                { id: 3, program: "Degree Programs in Paramedics" },
                { id: 4, program: "Degree Programs in Nursing" },
              ]}
            />
          </Grid>
          <Grid item sx={{ minWidth: 200, maxWidth: 550 }}>
            <DataGrid
              columns={[
                {
                  field: "financialAssistance",
                  headerName: "Financial Assistance",
                  width: 550,
                },
              ]}
              rows={[
                {
                  id: 1,
                  financialAssistance:
                    "Partial Fee waiver on need cum merit basis",
                },
                {
                  id: 2,
                  financialAssistance:
                    "Partial Fee waiver on need cum merit basis",
                },
                {
                  id: 3,
                  financialAssistance: "Need cum Merit based scholarships",
                },
                {
                  id: 4,
                  financialAssistance: "Need cum Merit based scholarships",
                },
              ]}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: { xs: 3, md: 10 },
            background:
              "linear-gradient(90deg, #BB3131 0%, rgba(187, 49, 49, 0.90) 100%), url('/assets/img/bg/library-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
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
              Information
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "36px",
                color: "white",
                paddingBottom: { xs: 3, md: 5 },
              }}
            >
              The Institute reserves the right to change the type of financial
              assistance offered to students. The procedure to apply for
              financial assistance is summarized below.
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
              The financial assistance application must be completed and
              submitted with the required supporting documentation. Incomplete
              and/or late applications for financial assistance will not be
              considered.
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
                paddingTop: { xs: 0, md: 5 },
                paddingBottom: 3,
              }}
            >
              If you have any questions about the application or encounter any
              problems, do not create a new application because it can delay the
              application process. For assistance, you can call the Office of
              Admissions at:
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
                  Students desirous of financial assistance are required to
                  submit a separate application form for financial assistance.
                </li>
                <li>
                  The level of financial assistance awarded is determined
                  through predefined, point-based evaluation criteria based on
                  the applicant’s socio-economic profile. The socio-economic
                  profile is prepared based on the information given by the
                  applicant and his/her parents or guardian in the financial
                  assistance application form and in interviews.
                </li>
                <li>
                  The Institute’s Financial Assistance Committee is responsible
                  for receiving applications for financial assistance and
                  reviewing it based on a prescribed evaluation system and
                  determining the level of financial assistance to be awarded to
                  the applicant.
                </li>
                <li>
                  Submission of an application for financial assistance does not
                  guarantee an award of financial assistance.
                </li>
                <li>
                  Students are informed individually of the financial assistance
                  awarded to them.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <section className="-mt-[50px]">
          <div className="container relative -bottom-40 rounded-3xl">
            <Image
              sizes="25vw"
              src="/assets/img/home/brochure.png"
              width={50}
              height={50}
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
              }}
              className="rounded-3xl"
            />
            <div className="absolute top-20 left-40 uppercase text-white">
              <div className="w-2/5 flex flex-col relative">
                <span>Download our brochure</span>
                <span className="text-3xl font-extrabold mb-4">
                  Ready to explore our full suite of academic & Guide solutions?
                </span>
                <span>
                  <button className="mt-4 py-2 px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                    <Link href="#" className="text-white">
                      <span className="mr-3">Download Our Brochure</span>
                      <i class="zmdi zmdi-download" />
                    </Link>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
