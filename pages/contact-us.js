import Layout from "@/components/layout/Layout";
import { useState } from "react";
import {
  Card,
  Typography,
  Stack,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
// TODO: common component textfield is not working with react hook form
// import TextField from "@/components/common/TextField";
import { API_URL } from "@/util/constants";
import ContactUsInfo from "@/components/sections/ContactUsInfo";

export default function Contact() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API_URL}/v1/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Clear the form
        reset();
        setError(null);
      } else {
        // Set a state to indicate the error
        setError("Failed to send message");
      }
    } catch (error) {
      // Set a state to indicate the network error
      setError("Network error occurred");
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Stack
          className="banner-area banner-bg"
          sx={{
            backgroundImage: {
              xs: "url('/assets/img/bg/contact-us-banner-mobile.png')",
              sm: "url('/assets/img/bg/contact-us-banner.png')",
            },
            paddingTop: { xs: "400px", sm: "500px" },
            backgroundSize: { xs: "contain", sm: "cover" },
            backgroundRepeat: "no-repeat",
            backgroundColor: "#274474",
            height: "max-content",
            alignItems: "center",
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
              padding: { xs: "50px 20px", md: "50px 20px 150px" },
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
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 16, sm: 20 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: "24px", sm: "32px" },
                color: "white",
              }}
            >
              We welcome feedback. If you have an enquiry, please get in touch
              with us
            </Typography>

            {isSmallScreen && <ContactUsInfo />}
          </Card>
          {!isSmallScreen && <ContactUsInfo sx={{ marginTop: "-150px" }} />}
        </Stack>
        <Box
          data-background="/assets/img/bg/Vector.png"
          sx={{
            padding: { xs: "80px 32px", md: "100px 80px" },
            backgroundColor: "#274474",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Dax",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "48px" /* 120% */,
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: { xs: "80vw", sm: "600px" },
              color: "#FFF",
            }}
          >
            Leave us a Message
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 2.5,
                maxWidth: { xs: "80vw", sm: "600px" },
                width: "600px",
              }}
            >
              <TextField
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    borderRadius: "25px",
                    border: "1px solid rgba(18, 118, 77, 0.10)",
                    "&:hover": {
                      border: "1.25px solid rgba(18, 118, 77, 0.50)",
                    },
                    "&.Mui-focused": {
                      border: "1.5px solid rgba(18, 118, 77)",
                    },
                    "&.Mui-error": {
                      border: "1.5px solid #FF0000",
                    },
                  },
                }}
                placeholder="Full Name*"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message?.toString()}
              />
              <TextField
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    borderRadius: "25px",
                    border: "1px solid rgba(18, 118, 77, 0.10)",
                    "&:hover": {
                      border: "1.25px solid rgba(18, 118, 77, 0.50)",
                    },
                    "&.Mui-focused": {
                      border: "1.5px solid rgba(18, 118, 77)",
                    },
                    "&.Mui-error": {
                      border: "1.5px solid #FF0000",
                    },
                  },
                }}
                placeholder="Email Address*"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
              />
              <TextField
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    borderRadius: "25px",
                    border: "1px solid rgba(18, 118, 77, 0.10)",
                    "&:hover": {
                      border: "1.25px solid rgba(18, 118, 77, 0.50)",
                    },
                    "&.Mui-focused": {
                      border: "1.5px solid rgba(18, 118, 77)",
                    },
                    "&.Mui-error": {
                      border: "1.5px solid #FF0000",
                    },
                  },
                }}
                placeholder="Phone Number*"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                error={!!errors.phone}
                helperText={errors.phone?.message?.toString()}
              />
              <TextField
                variant="outlined"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    borderRadius: "25px",
                    border: "1px solid rgba(18, 118, 77, 0.10)",
                    "&:hover": {
                      border: "1.25px solid rgba(18, 118, 77, 0.50)",
                    },
                    "&.Mui-focused": {
                      border: "1.5px solid rgba(18, 118, 77)",
                    },
                    "&.Mui-error": {
                      border: "1.5px solid #FF0000",
                    },
                  },
                }}
                placeholder="Comment or Message*"
                multiline
                rows={5}
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message?.message?.toString()}
              />
              {error && (
                <Typography
                  sx={{
                    fontFamily: "Dax",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textAlign: "center",
                    color: "#BB3131",
                  }}
                >
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#04824B",
                  fontFamily: "Dax",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "26px" /* 173.333% */,
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  padding: "12px 20px",
                  borderRadius: "50px",
                  "&:hover": {
                    backgroundColor: "#03683C",
                    color: "#FFF",
                  },
                }}
              >
                Submit
                <i
                  className="zmdi zmdi-arrow-right-top"
                  style={{ paddingLeft: "15px" }}
                />
              </Button>
            </Stack>
          </form>
        </Box>
        <div>
          {/* contact-area-end */}
          {/* contact-map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.1315165128976!2d72.83961479999998!3d33.963459000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfacefe04459c1%3A0x1253fcda9a5af2c0!2sKhubaib%20College%20Haripur!5e0!3m2!1sen!2s!4v1721988608558!5m2!1sen!2s"
              style={{ border: 0 }}
              width={1440}
              height={850}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
