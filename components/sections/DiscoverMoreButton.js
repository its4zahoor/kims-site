import { Button } from "@mui/material";
import Link from "next/link";

export default function DiscoverMoreButton({
  href,
  position = "top",
  ...restProps
}) {
  const positionStyles =
    position === "top" ? { top: "-25px" } : { bottom: "-25px" };

  return (
    <Link href={href} passHref style={{}}>
      <Button
        component="a"
        sx={{
          color: "#04824B",
          backgroundColor: "#FFF",
          padding: "12px 20px",
          minWidth: "220px",
          //border styles
          borderRadius: "25px",
          border: "1.5px solid #04824B",
          // text styles
          fontFamily: "Dax",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "26px",
          // position styles
          letterSpacing: "0.3px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          ...positionStyles,
          // hover styles
          "&:hover": {
            border: "2.5px solid #03683C",
            backgroundColor: "#FFF",
            color: "#03683C",
            fontWeight: 800,
          },
        }}
        {...restProps}
      >
        Discover More
        <i
          className="zmdi zmdi-arrow-right-top"
          style={{
            paddingLeft: "15px",
            color: "#BB3131",
            fontSize: "16px",
          }}
        />
      </Button>
    </Link>
  );
}
