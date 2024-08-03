import Link from "next/link";
import { useState } from "react";
import { Stack } from "@mui/material";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="menu-item-has-children">
          <Stack
            sx={{
              flexDirection: "row",
              alignItem: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            className="item"
          >
            <Link href="#">Academic</Link>
            {isActive.key == 1 ? (
              <i
                className="zmdi zmdi-caret-up zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(1)}
              ></i>
            ) : (
              <i
                className="zmdi zmdi-caret-down zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(1)}
              ></i>
            )}
          </Stack>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/institute-of-nursing">
                Khubaib Institute of Nursing
              </Link>
            </li>
            <li>
              <Link href="/institute-of-medical-sciences">
                Khubaib Institute of Medical Sciences
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Stack
            sx={{
              flexDirection: "row",
              alignItem: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            className="item"
          >
            <Link href="#">Admission</Link>
            {isActive.key == 2 ? (
              <i
                className="zmdi zmdi-caret-up zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(2)}
              ></i>
            ) : (
              <i
                className="zmdi zmdi-caret-down zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(2)}
              ></i>
            )}
          </Stack>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/diploma-program">Diploma Program</Link>
            </li>
            <li>
              <Link href="/degree-program">Degree Program</Link>
            </li>
            <li>
              <Link href="/eligibility-criteria">Eligibility Criteria</Link>
            </li>
            <li>
              <Link href="/admission-process">Admission Process</Link>
            </li>
            <li>
              <Link href="/fee-structure">Fee Structure</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Stack
            sx={{
              flexDirection: "row",
              alignItem: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
            className="item"
          >
            <Link href="#">Facilities</Link>
            {isActive.key == 3 ? (
              <i
                className="zmdi zmdi-caret-up zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(3)}
              ></i>
            ) : (
              <i
                className="zmdi zmdi-caret-down zmdi-hc-2x"
                style={{ color: "#FFF", padding: "30px 0px" }}
                onClick={() => handleToggle(3)}
              ></i>
            )}
          </Stack>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/scholarship">Scholarship</Link>
            </li>
            <li>
              <Link href="/training-facilities">Training Facilities</Link>
            </li>
            <li>
              <Link href="/sports-facilities">Sports Facilities</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/news-and-events">News & Events</Link>
        </li>
        <li>
          <Link href="contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
