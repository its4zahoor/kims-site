import { Typography, Stack, Grid } from "@mui/material";
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
          sx={{
            textAlign: "center",
            fontFamily: "Dax",
            fontSize: { xs: 32, sm: 40 },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textTransform: "uppercase",
            letterSpacing: { xs: "0.64", sm: "0.8px" },
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
          paddingTop: "50px",
          paddingBottom: "80px",
          gap: "20px",
        }}
      >
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "400px",
            padding: "20px",
            textAlign: "center",
          }}
          item
        >
          <DiscoverMoreButton href="/medical-programs" />
          <ProgramCard
            title="Medical Diploma Programs"
            description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
            src="/assets/img/admission/medical-diploma-program.png"
          />
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "400px",
            padding: "20px",
            textAlign: "center",
          }}
          item
        >
          <ProgramCard
            title="Medical Degree Programs"
            description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
            src="/assets/img/admission/medical-degree-program.png"
            order="dec"
          />
          <DiscoverMoreButton href="/medical-programs" position="bottom" />
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "400px",
            padding: "20px",
            textAlign: "center",
          }}
          item
        >
          <DiscoverMoreButton href="/nursing-programs" />
          <ProgramCard
            title="Nursing Diploma Programs"
            description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
            src="/assets/img/admission/nursing-diploma-program.png"
          />
        </Grid>
        <Grid
          sx={{
            width: { xs: "300px", sm: "350px" },
            height: "400px",
            padding: "20px",
            textAlign: "center",
          }}
          item
        >
          <ProgramCard
            title="Nursing Degree Programs"
            description="Cras elementum diam lacus, non sollicitudin lorem euismod nec."
            src="/assets/img/admission/nursing-degree-program.png"
            order="dec"
          />
          <DiscoverMoreButton href="/nursing-programs" position="bottom" />
        </Grid>
      </Grid>
    </>
  );
}
