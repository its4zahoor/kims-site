import Layout from "@/components/layout/Layout";
import { Card, Typography, Box, Grid } from "@mui/material";
import ProgramOffered from "@/components/sections/ProgramsOffered";

export default function Admission() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        {/* Banner with a card */}
        <Box
          className="banner-area banner-bg"
          sx={{
            backgroundImage: "url('/assets/img/bg/scholarship-banner.png')",
          }}
        >
          <Card
            className="banner-child"
            sx={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              backgroundColor: "#BB3131",
              borderRadius: "24px",
              padding: { xs: "61px 20px 52px", md: "55px 20px 74px" },
              marginX: { xs: "32px", md: "auto" },
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
              Welcome to KIMS & KIN Admissions
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
                maxWidth: "90%",
              }}
            >
              Khubaib Institute of Medical Sciences and Nursing is a registered
              institute offering diploma and degree programs with approval from
              relevant bodies such as Higher Education Regulatory Authority
              (HERA) – Khyber Pakhtunkhwa, Pakistan Nursing & Midwifery Council
              (PNMC), Pakistan Pharmacy Council, Faculty of Paramedics and
              Allied Health Sciences (FPAHS) – Khyber Pakhtunkhwa. The institute
              has signed an MoU with Health Foundation (KPHF) – Khyber
              Pakhtunkhwa for District Headquarter Hospital (DHQ), Haripur as a
              teaching/training hospital for practical experience in various
              fields of paramedics and Nursing.
            </Typography>
          </Card>
        </Box>
        {/* Program offered section */}
        <ProgramOffered />
        <Grid
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: { xs: 2, md: 10 },
            backgroundColor: "rgba(187, 49, 49, 0.9)",
            minHeight: "500px",
            background:
              "linear-gradient(90deg, #BB3131 0%, rgba(187, 49, 49, 0.90) 100%), url('/assets/img/bg/library-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              Admission Queries
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
              Proin tellus dui, fringilla et quam sed, bibendum commodo ligula.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px",
                color: "white",
                paddingTop: 5,
                paddingBottom: 4,
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
                paddingBottom: 1,
                display: "flex",
                gap: "14px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.71516 1.09534L5.89299 1.33841C5.16093 1.55507 4.50716 1.97245 4.00864 2.54142C3.51013 3.1104 3.18761 3.80729 3.07904 4.55007C2.73848 6.87723 3.49987 9.59826 5.33571 12.7188C7.16695 15.8314 9.18282 17.8367 11.4016 18.7145C12.1146 18.9964 12.895 19.0716 13.6502 18.9309C14.4053 18.7903 15.1035 18.4398 15.6616 17.9211L16.2831 17.3427C16.6866 16.9679 16.9378 16.462 16.9899 15.9191C17.042 15.3762 16.8915 14.8332 16.5663 14.391L15.0114 12.2754C14.8012 11.9898 14.5052 11.7759 14.1648 11.6637C13.8245 11.5515 13.4569 11.5466 13.1136 11.6497L10.7618 12.3553L10.701 12.3665C10.4419 12.4037 9.8433 11.8534 9.09796 10.5863C8.31822 9.26066 8.15769 8.48531 8.37211 8.28501L9.5681 7.19007C10.0055 6.78998 10.3042 6.26556 10.4225 5.69038C10.5407 5.1152 10.4725 4.51813 10.2274 3.98291L9.46834 2.32757C9.24008 1.82944 8.83502 1.42976 8.32869 1.20305C7.82235 0.976338 7.24813 0.938057 6.71516 1.09534ZM8.42486 2.78895L9.18167 4.44429C9.32906 4.76527 9.37027 5.1235 9.29952 5.46865C9.22877 5.81379 9.04961 6.12851 8.78721 6.36859L7.58779 7.46465C6.81951 8.1781 7.07407 9.3957 8.10608 11.1489C9.07618 12.7987 9.96141 13.6134 10.9132 13.4716L11.0553 13.4423L13.4496 12.7255C13.5641 12.691 13.6866 12.6925 13.8002 12.7299C13.9137 12.7672 14.0124 12.8385 14.0826 12.9337L15.6375 15.0493C15.8003 15.2704 15.8757 15.542 15.8498 15.8135C15.8239 16.0851 15.6983 16.3382 15.4964 16.5257L14.8738 17.1041C14.4751 17.4744 13.9766 17.7246 13.4373 17.8249C12.898 17.9252 12.3407 17.8715 11.8316 17.6702C9.88458 16.9005 8.04416 15.0696 6.32988 12.1561C4.61101 9.2359 3.91497 6.75232 4.21425 4.70987C4.29173 4.1792 4.52208 3.68131 4.8782 3.2748C5.23432 2.8683 5.70138 2.57011 6.22438 2.41534L7.04655 2.17227C7.31311 2.09367 7.5997 2.11289 7.85287 2.22636C8.10605 2.33982 8.30854 2.53978 8.42257 2.78895"
                  fill="white"
                />
              </svg>
              051-9265118
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingBottom: 1,
                display: "flex",
                gap: "14px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.625 1.25H15.625L16.25 1.875V18.125L15.625 18.75H5.625L5 18.125V1.875L5.625 1.25ZM6.25 17.5H15V2.5H6.25V17.5ZM9.375 15H11.875V16.25H9.375V15Z"
                  fill="white"
                />
              </svg>
              +92 316 9250465 <br></br>
              +92 334 3836334 <br></br>
              +92 331 6070009
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dax",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                color: "white",
                paddingBottom: 1,
                display: "flex",
                gap: "14px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.6002 1.69165C9.40811 1.60487 8.21129 1.77579 7.09111 2.19278C5.97094 2.60978 4.95369 3.26308 4.1085 4.10826C3.26332 4.95344 2.61002 5.9707 2.19303 7.09087C1.77603 8.21104 1.60512 9.40787 1.69189 10.6C1.99189 15.0083 5.8419 18.3333 10.2586 18.3333H13.3336C13.7919 18.3333 14.1669 17.9583 14.1669 17.5C14.1669 17.0417 13.7919 16.6667 13.3336 16.6667H10.2752C7.16689 16.6667 4.31689 14.65 3.54189 11.6417C2.30023 6.80832 6.80023 2.29998 11.6336 3.54998C14.6502 4.31665 16.6669 7.16665 16.6669 10.275V11.1917C16.6669 11.85 16.0752 12.5 15.4169 12.5C14.7586 12.5 14.1669 11.85 14.1669 11.1917V10.15C14.1669 8.05832 12.6836 6.17498 10.6169 5.88332C9.95936 5.78554 9.28798 5.84626 8.65866 6.06041C8.02933 6.27457 7.46027 6.63596 6.99885 7.1145C6.53742 7.59304 6.19699 8.17489 6.0059 8.81159C5.81481 9.4483 5.77858 10.1214 5.90023 10.775C6.04638 11.5625 6.41658 12.2911 6.96643 12.8734C7.51628 13.4558 8.22244 13.8672 9.00023 14.0583C10.5336 14.4167 11.9919 13.925 12.9502 12.95C13.6919 13.9667 15.1752 14.5 16.5336 13.9583C17.6502 13.5167 18.3336 12.375 18.3336 11.175V10.2667C18.3336 5.84165 15.0086 1.99165 10.6002 1.69165ZM10.0002 12.5C8.6169 12.5 7.50023 11.3833 7.50023 9.99998C7.50023 8.61665 8.6169 7.49998 10.0002 7.49998C11.3836 7.49998 12.5002 8.61665 12.5002 9.99998C12.5002 11.3833 11.3836 12.5 10.0002 12.5Z"
                  fill="white"
                />
              </svg>
              admissions@kims-kin.edu.pk <br></br>
              it@kims-kin.edu.pk (For Technical Issues)
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
