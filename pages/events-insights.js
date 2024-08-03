import { Card, Typography } from "@mui/material";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { API_URL } from "@/util/constants";

export default function EventInsight({ data }) {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              scelerisque aliquam neque, in tristique mauris facilisis quis.
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
              Nullam sollicitudin lorem lorem, et fringilla quam commodo a. Sed
              neque urna, tristique eu lectus vitae, rhoncus dignissim erat.
              Nullam at sapien metus. Maecenas tristique nunc erat, in
              consectetur sapien lacinia in.
            </Typography>
          </Card>
        </section>
        <section className="bg-offwhite-kims h-[100px]" />
        <section className="bg-offwhite-kims">
          <div className="container">
            <p className="py-4">
              Integer eu augue ac quam sollicitudin consectetur vel eget velit.
              Aenean congue turpis lorem, tincidunt dictum dui dapibus a.
              Quisque eu tincidunt mi, vestibulum consequat felis. Maecenas nec
              rhoncus orci. Integer a auctor risus. Sed ac semper sapien. Mauris
              vel lobortis metus. Etiam luctus urna eget commodo vestibulum.
              Aliquam blandit molestie ultrices. Mauris porttitor, leo at
              volutpat rutrum, ligula turpis pulvinar lorem, ac tincidunt sem
              enim non urna. Duis id leo ut sem laoreet rutrum. Fusce porttitor
              elementum porta. Donec at sem neque. Vivamus eget scelerisque
              libero. In vitae tellus a nulla commodo dapibus. Sed in tempor
              arcu. Cras fringilla leo ut fermentum malesuada. Nullam lorem
              tortor, sagittis at leo non, mattis efficitur mi. Phasellus vitae
              ipsum nec urna tempor gravida. In non arcu tristique, posuere
              turpis at, vestibulum nibh. Quisque vel lacus viverra, mollis leo
              eu, condimentum nisl. Maecenas non varius nisl, non dignissim
              libero. Duis rhoncus lectus efficitur, tincidunt ex at, lobortis
              urna. Mauris quam ante, vulputate sit amet enim sit amet,
              ultricies gravida leo. Mauris venenatis arcu eu arcu egestas
              aliquet. Vestibulum varius arcu nisl, tincidunt vulputate odio
              mattis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ipsum dolor, fringilla sed fermentum vel, porttitor at
              sapien. Vestibulum faucibus ante vitae mattis tempus.
            </p>
            <Image
              sizes="25vw, 100vw"
              src="/assets/img/events/event-main.png"
              width={100}
              height={100}
              className="rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <p className="py-4">
              Integer eu augue ac quam sollicitudin consectetur vel eget velit.
              Aenean congue turpis lorem, tincidunt dictum dui dapibus a.
              Quisque eu tincidunt mi, vestibulum consequat felis. Maecenas nec
              rhoncus orci. Integer a auctor risus. Sed ac semper sapien. Mauris
              vel lobortis metus. Etiam luctus urna eget commodo vestibulum.
              Aliquam blandit molestie ultrices. Mauris porttitor, leo at
              volutpat rutrum, ligula turpis pulvinar lorem, ac tincidunt sem
              enim non urna. Duis id leo ut sem laoreet rutrum. Fusce porttitor
              elementum porta. Donec at sem neque. Vivamus eget scelerisque
              libero. In vitae tellus a nulla commodo dapibus. Sed in tempor
              arcu. Cras fringilla leo ut fermentum malesuada. Nullam lorem
              tortor, sagittis at leo non, mattis efficitur mi. Phasellus vitae
              ipsum nec urna tempor gravida. In non arcu tristique, posuere
              turpis at, vestibulum nibh. Quisque vel lacus viverra, mollis leo
              eu, condimentum nisl. Maecenas non varius nisl, non dignissim
              libero. Duis rhoncus lectus efficitur, tincidunt ex at, lobortis
              urna. Mauris quam ante, vulputate sit amet enim sit amet,
              ultricies gravida leo. Mauris venenatis arcu eu arcu egestas
              aliquet. Vestibulum varius arcu nisl, tincidunt vulputate odio
              mattis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ipsum dolor, fringilla sed fermentum vel, porttitor at
              sapien. Vestibulum faucibus ante vitae mattis tempus.
            </p>
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
