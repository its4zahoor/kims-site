import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Card, Typography, Stack, Button, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "@/components/common/TextField";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to server
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/contact-us-banner.png"
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
              Contact Us
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
              }}
            >
              We welcome feedback. If you have an enquiry, please get in touch
              with us
            </Typography>
            <Grid
              container
              sx={{
                justifyContent: "center",
                gap: "27px",
                paddingTop: "35px",
                // position: "absolute",
                // bottom: "-60px", // Adjust this value to position the Box correctly
                // left: "50%",
                // transform: "translateX(-50%)",
                // marginBottom: "-200px",
              }}
            >
              <Grid
                sx={{
                  position: "relative",
                  padding: "20px",
                  textAlign: "center",
                  width: { xs: "300px", sm: "350px" },
                }}
                item
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#04824B",
                    padding: "10px",
                    width: "75px",
                    height: "75px",
                    filter: "drop-shadow(-5px 5px 25px rgba(0, 0, 0, 0.30))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "-25px", // Adjust this value to position the Box correctly
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      d="M30.5 21C30.5 22.5913 29.8679 24.1174 28.7426 25.2426C27.6174 26.3679 26.0913 27 24.5 27C22.9087 27 21.3826 26.3679 20.2574 25.2426C19.1321 24.1174 18.5 22.5913 18.5 21C18.5 19.4087 19.1321 17.8826 20.2574 16.7574C21.3826 15.6321 22.9087 15 24.5 15C26.0913 15 27.6174 15.6321 28.7426 16.7574C29.8679 17.8826 30.5 19.4087 30.5 21V21Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.5 21C39.5 35.284 24.5 43.5 24.5 43.5C24.5 43.5 9.5 35.284 9.5 21C9.5 17.0218 11.0804 13.2064 13.8934 10.3934C16.7064 7.58035 20.5218 6 24.5 6C28.4782 6 32.2936 7.58035 35.1066 10.3934C37.9196 13.2064 39.5 17.0218 39.5 21V21Z"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Card
                  sx={{
                    padding: "52px 38px 32px",
                    borderRadius: "25px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1C3E68",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textTransform: "uppercase",
                      paddingBottom: "5px",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101010",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                    }}
                  >
                    Main Shahrah-e-Resham, Bakka Mor,Haripur KPK, Pakistan
                  </Typography>
                </Card>
              </Grid>
              <Grid
                sx={{
                  position: "relative",
                  padding: "20px",
                  textAlign: "center",
                  width: { xs: "300px", sm: "350px" },
                }}
                item
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#04824B",
                    padding: "10px",
                    width: "75px",
                    height: "75px",
                    filter: "drop-shadow(-5px 5px 25px rgba(0, 0, 0, 0.30))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "-25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="44"
                    viewBox="0 0 41 44"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7778 4H31.2222L32.5 5.28571V38.7143L31.2222 40H10.7778L9.5 38.7143V5.28571L10.7778 4ZM12.0556 37.4286H29.9444V6.57143H12.0556V37.4286ZM18.4444 32.2857H23.5556V34.8571H18.4444V32.2857Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Card
                  sx={{
                    padding: "64px 38px 32px",
                    borderRadius: "25px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1C3E68",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textTransform: "uppercase",
                      paddingBottom: "5px",
                    }}
                  >
                    contact no.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101010",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                    }}
                  >
                    {"+92-995-670780  |  +92-995-670780"}
                  </Typography>
                </Card>
              </Grid>
              <Grid
                sx={{
                  position: "relative",
                  padding: "20px",
                  textAlign: "center",
                  width: { xs: "300px", sm: "350px" },
                }}
                item
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#04824B",
                    padding: "10px",
                    width: "75px",
                    height: "75px",
                    filter: "drop-shadow(-5px 5px 25px rgba(0, 0, 0, 0.30))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "-25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M21.2005 3.3833C18.8162 3.20974 16.4226 3.55158 14.1822 4.38557C11.9419 5.21956 9.90737 6.52615 8.21701 8.21652C6.52664 9.90689 5.22005 11.9414 4.38606 14.1817C3.55207 16.4221 3.21023 18.8157 3.38379 21.2C3.98379 30.0166 11.6838 36.6666 20.5171 36.6666H26.6671C27.5838 36.6666 28.3338 35.9166 28.3338 35C28.3338 34.0833 27.5838 33.3333 26.6671 33.3333H20.5505C14.3338 33.3333 8.63379 29.3 7.08379 23.2833C4.60046 13.6166 13.6005 4.59997 23.2671 7.09997C29.3005 8.6333 33.3338 14.3333 33.3338 20.55V22.3833C33.3338 23.7 32.1505 25 30.8338 25C29.5171 25 28.3338 23.7 28.3338 22.3833V20.3C28.3338 16.1166 25.3671 12.35 21.2338 11.7666C19.9187 11.5711 18.576 11.6925 17.3173 12.1208C16.0587 12.5491 14.9205 13.2719 13.9977 14.229C13.0748 15.1861 12.394 16.3498 12.0118 17.6232C11.6296 18.8966 11.5572 20.2429 11.8005 21.55C12.0928 23.1249 12.8332 24.5821 13.9329 25.7469C15.0326 26.9116 16.4449 27.7344 18.0005 28.1166C21.0671 28.8333 23.9838 27.85 25.9005 25.9C27.3838 27.9333 30.3505 29 33.0671 27.9166C35.3005 27.0333 36.6671 24.75 36.6671 22.35V20.5333C36.6671 11.6833 30.0171 3.9833 21.2005 3.3833ZM20.0005 25C17.2338 25 15.0005 22.7666 15.0005 20C15.0005 17.2333 17.2338 15 20.0005 15C22.7671 15 25.0005 17.2333 25.0005 20C25.0005 22.7666 22.7671 25 20.0005 25Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Card
                  sx={{
                    padding: "64px 38px 32px",
                    borderRadius: "25px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1C3E68",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textTransform: "uppercase",
                      paddingBottom: "5px",
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    sx={{
                      color: "#101010",
                      textAlign: "center",
                      fontFamily: "Dax",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "24px",
                    }}
                  >
                    info@kims.edu.pk
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </section>
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
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: { xs: "80vw", sm: "600px" },
              textTransform: "uppercase",
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
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
              <TextField
                placeholder="Email Address"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                placeholder="Phone Number"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
              />
              <TextField
                placeholder="Comment or Message"
                multiline
                rows={5}
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ""}
              />
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
                  "&:hover": {},
                }}
              >
                Submit
                <i
                  class="zmdi zmdi-arrow-right-top"
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
