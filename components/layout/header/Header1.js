import Link from "next/link";
import MobileMenu from "../MobileMenu";
import {
  Box,
  Button,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import AlignJustifyIcon from "/public/assets/img/icons/align-justify.svg";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "flex-start", lg: "space-between" },
              alignItems: "center",
              paddingX: { xs: "20px", sm: "40px" },
            }}
            className="tgmenu__nav"
          >
            {isMobile && (
              <IconButton
                onClick={handleMobileMenu}
                sx={{
                  width: "40px",
                  height: "40px",
                  padding: "5px 4px",
                  borderRadius: "100px",
                  background: "#04824B",
                  marginRight: { xs: "60px", lg: "" },
                }}
              >
                <Image priority src={AlignJustifyIcon} alt="menu" />
              </IconButton>
            )}
            <Box
              className="logo"
              sx={{
                borderRight: { xs: "2px solid #FFF", lg: "none" },
                paddingRight: { xs: "30px", lg: "0px" },
              }}
            >
              <Link href="/">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="Khubaib University Logo"
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 50 : 70}
                />
              </Link>
            </Box>
            <Box
              className="tgmenu__navbar-wrap tgmenu__main-menu"
              sx={{
                display: { xs: "none", lg: "flex" },
                flexDirection: "row",
              }}
            >
              <ul className="navigation">
                <li className="active">
                  <Link href="/about-us">ABOUT</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">ACADEMICS</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/institute-of-nursing">
                        KHBAIB INSTITUTE OF NURSING
                      </Link>
                    </li>
                    <li>
                      <Link href="/institute-of-medical-sciences">
                        KHUBAIB INSTITUTE OF MEDICAL SCIENCES
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">ADMISSION</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/diploma-program">DIPLOMA PROGRAM</Link>
                    </li>
                    <li>
                      <Link href="/degree-program">DEGREE PROGRAM</Link>
                    </li>
                    <li>
                      <Link href="/eligibility-criteria">
                        ELIGIBILITY CRITERIA
                      </Link>
                    </li>
                    <li>
                      <Link href="/admission-process">ADMISSION PROCESS</Link>
                    </li>
                    <li>
                      <Link href="/fee-structure">FEE STRUCTURE</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">FACILITIES</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/scholarship">SCHOLARSHIP</Link>
                    </li>
                    <li>
                      <Link href="/training-facilities">
                        TRAINING FACILITIES
                      </Link>
                    </li>
                    <li>
                      <Link href="/sports-facilities">SPORTS FACILITIES</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/news-and-events">NEWS & EVENTS</Link>
                </li>
                <li>
                  <Link href="contact-us">CONTACT US</Link>
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: { xs: 2, xl: 5 },
                paddingLeft: { xs: "30px", lg: "0px" },
              }}
            >
              {!isMobile && (
                <Link id="header-btn" href="/apply" passHref>
                  <Button
                    component="a"
                    variant="filled"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#04824B",
                      padding: "14px 30px 14px 20px",
                      borderRadius: "100px",
                      fontFamily: "Dax",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "0.32px",
                      color: "#FFF",
                      textTransform: "uppercase",
                      "&:hover": {
                        color: "#FFF",
                        backgroundColor: "#03683C",
                      },
                    }}
                  >
                    <Image
                      src="/assets/img/icons/game-icons-graduate-cap.svg"
                      width={20}
                      height={20}
                      alt="graduate-cap"
                    />
                    Apply Now
                  </Button>
                </Link>
              )}
              <Link href="/">
                <Image
                  src="/assets/img/logo/KIMS-logo.png"
                  width={isMobile ? 96 : 120}
                  height={isMobile ? 40 : 50}
                  alt="KIMS Logo"
                />
              </Link>
            </Box>
          </Box>
          {/* Mobile Menu  */}
          <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box bg-secondary">
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="tg-flaticon-close-1" />
              </div>
              <div className="nav-logo d-flex align-items-center gap-1">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="Logo" />
                </Link>
                <div class="vr bg-white"></div>
                <Link href="/">
                  <img src="/assets/img/logo/KIMS-logo.png" alt="KIMS Logo" />
                </Link>
              </div>
              <div className="tgmobile__menu-outer">
                <MobileMenu />
              </div>
            </nav>
          </div>
          <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
          {/* End Mobile Menu */}
          {/* </div> */}
        </div>
      </header>
    </>
  );
}
