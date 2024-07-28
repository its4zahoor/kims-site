import { Card, Typography, Stack, Grid, Button, Box } from "@mui/material";
import DiscoverMoreButton from "./DiscoverMoreButton";
import ProgramCard from "./ProgramCard";

export default function ProgramOffered() {
  return (
    <>
      {/* Program offered section */}
      <Stack
        data-background="/assets/img/bg/Vector.png"
        sx={{
          padding: { xs: "80px 20px 20px", md: "100px 80px 20px" },
          backgroundColor: "#274474",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: { xs: 32, sm: 40 },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textTransform: "uppercase",
            letterSpacing: "0.64px",
            color: "white",
            paddingBottom: "10px",
          }}
        >
          Programs Offered
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            color: "white",
            maxWidth: "620px",
          }}
        >
          At KIMS and KIN, our inclusive admissions prioritize merit, offering
          scholarships. We embrace diversity, welcoming individuals regardless
          of faith, gender, or nationality.
        </Typography>
      </Stack>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingY: "50px",
        }}
      >
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "450px",
            padding: "20px",
          }}
          item
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <DiscoverMoreButton href="/medical-programs" />
            <ProgramCard
              title="Medical Diploma Programs"
              description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
              src="/assets/img/admission/medical-diploma-program.png"
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "450px",
            padding: "20px",
          }}
          item
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <ProgramCard
              title="Medical Degree Programs"
              description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
              src="/assets/img/admission/medical-degree-program.png"
              order="dec"
            />
            <DiscoverMoreButton href="/medical-programs" position="bottom" />
          </Box>
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "450px",
            padding: "20px",
          }}
          item
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <DiscoverMoreButton href="/nursing-programs" />
            <ProgramCard
              title="Nursing Diploma Programs"
              description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
              src="/assets/img/admission/nursing-diploma-program.png"
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "450px",
            padding: "20px",
          }}
          item
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <ProgramCard
              title="Nursing Degree Programs"
              description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
              src="/assets/img/admission/nursing-degree-program.png"
              order="dec"
            />
            <DiscoverMoreButton href="/nursing-programs" position="bottom" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
