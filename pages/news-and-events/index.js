import { Card, Typography } from "@mui/material";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { API_URL, BASE_URL } from "@/util/constants";
import { sanitizedData } from "@/util/helpers";
import Link from "next/link";
import dayjs from "dayjs";

export default function NewsEvents({ data }) {
  const formatDate = (date) => dayjs(date).format("MMM DD, YYYY");

  const mainContent = data?.rows?.[0] || {};

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/events/event-header.png"
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
              News & Media
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
              All the latest headlines from around the University of Khubaib
            </Typography>
          </Card>
        </section>
        <div className="bg-blue-kims">
          <Link href={`news-and-events/${mainContent.id}`}>
            <div className="flex justify-between container relative top-20">
              <Image
                alt="event-main-image"
                sizes="25vw, 100vw"
                src={`${BASE_URL}/${mainContent.image}`}
                width={50}
                height={50}
                className="rounded-3xl"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="p-3 m-4">
                <div className="text-green-600 font-semibold mb-3">
                  {formatDate(mainContent.updatedAt)}
                </div>
                <h5>{mainContent.title.substring(0, 100)}</h5>
                <div
                  className="*:text-white *:text-sm *:mt-4"
                  dangerouslySetInnerHTML={sanitizedData(
                    mainContent.description.substring(0, 150)
                  )}
                />
              </div>
            </div>
          </Link>
        </div>
        <section className="bg-offwhite-kims py-5" />
        <section className="bg-offwhite-kims py-5">
          <div className="container">
            <h2 className="text-3xl uppercase text-inherit font-extrabold pt-8">
              News & Events
            </h2>
            <div className="flex flex-col items-stretch">
              {data.rows.map((event) => (
                <Link href={`news-and-events/${event.id}`}>
                  <div className="flex justify-between text-black w-full py-5">
                    <Image
                      alt={`${event.type}-image`}
                      sizes="25vw"
                      src={`${BASE_URL}/${event.image}`}
                      width={100}
                      height={100}
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "300px",
                      }}
                      className="rounded-3xl"
                    />
                    <div className="p-3">
                      <p>
                        <span className="bg-red-700 text-white rounded-3xl py-2 px-3 font-semibold capitalize">
                          {event.type}
                        </span>
                        <span className="ml-5 text-green-700 font-semibold">
                          {formatDate(event.updatedAt)}
                        </span>
                      </p>
                      <div>{event.title}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/v1/events`);
  const data = await res.json();
  return { props: { data } };
};
