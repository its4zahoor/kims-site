import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header bg-blue-700 text-white ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
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
                              <Link href="/diploma-program">
                                DIPLOMA PROGRAM
                              </Link>
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
                              <Link href="/admission-process">
                                ADMISSION PROCESS
                              </Link>
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
                              <Link href="/sports-facilities">
                                SPORTS FACILITIES
                              </Link>
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
                    </div>
                    <div className="header-btn apply-btn">
                      <Link
                        href="/apply"
                        className="btn rounded-pill d-flex gap-1 align-items-center"
                      >
                        <img src="/assets/img/icons/game-icons-graduate-cap.svg" />
                        APPLY NOW
                      </Link>
                    </div>
                    <div className="logo ps-5">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/KIMS-logo.png"
                          alt="KIMS Logo"
                        />
                      </Link>
                    </div>
                  </nav>
                </div>
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
                        <img
                          src="/assets/img/logo/KIMS-logo.png"
                          alt="KIMS Logo"
                        />
                      </Link>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                  </nav>
                </div>
                <div
                  className="tgmobile__menu-backdrop"
                  onClick={handleMobileMenu}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
