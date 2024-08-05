import { Card, Typography } from "@mui/material";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { API_URL, BASE_URL } from "@/util/constants";
import { sanitizedData, splitIntoTwo } from "@/util/helpers";

export default function EventInsight({ data }) {
  const [firstHalf, secondHalf] = splitIntoTwo(data.data.description, "<br>");

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/events/event-insights-header.png"
        >
          <Card
            sx={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              backgroundColor: "#BB3131",
              borderRadius: "50px",
              padding: { xs: "61px 20px 52px", md: "55px 20px 74px" },
              padding: 5,
              marginX: { xs: "32px", md: "auto" },
              position: "relative",
              top: "30px",
            }}
          >
            {/* TODO: create theme file for mui and define theme */}
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 16, sm: 24 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
                color: "white",
                maxWidth: "1064px",
              }}
            >
              {data.data.title}
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
              <div
                className="*:text-white"
                dangerouslySetInnerHTML={sanitizedData(
                  data.data.description.substring(0, 200)
                )}
              />
            </Typography>
          </Card>
        </section>
        <section className="bg-offwhite-kims h-[100px]" />
        <section className="bg-offwhite-kims">
          <div className="container">
            <div
              className="py-4"
              dangerouslySetInnerHTML={sanitizedData(firstHalf.join("<br>"))}
            />
            <Image
              alt="news-image"
              sizes="25vw, 100vw"
              src={`${BASE_URL}/${data.data.image}`}
              width={100}
              height={100}
              className="rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              className="py-4"
              dangerouslySetInnerHTML={sanitizedData(secondHalf.join("<br>"))}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${API_URL}/v1/event?id=${context.query.id}`);
  const data = await res.json();
  return { props: { data } };
};
