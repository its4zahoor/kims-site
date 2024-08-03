import BrochureBanner from "@/components/common/BrochureBanner";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <BrochureBanner />
      <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
        <div className="footer__top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer__about">
                    <p>
                      The Mission of Khubaib Institute of Medical Sciences and
                      Nursing is to demonstrate excellence in Paramedics and
                      Nursing education and training through leading-edge and
                      multi-disciplinary teaching and practice with significant
                      implications for improved patient care and health
                      outcomes.
                    </p>
                    <div className="footer__logo logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="img" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title uppercase">Get in Touch</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/about-us">
                        Main Shahrah-e-Resham, Bakka Mor, Haripur KPK, Pakistan
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">+92-995-670780</Link>
                    </li>
                    <li>
                      <Link href="tel:+92-334-9991220">+92-334-9991220</Link>
                      <Link href="tel:+92-331-6070009">+92-331-6070009</Link>
                    </li>
                    <li>
                      <Link href="mailto:admissions@kims-kin.edu.pk">
                        admissions@kims-kin.edu.pk
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                  <ul className="list-wrap m-0 p-0">
                    <li className="mt-3 uppercase text-white">Follow Us On</li>
                    <li className="flex justify-between">
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-whatsapp" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title uppercase">Quick links</h4>
                  <ul className="list-wrap uppercase">
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Academics</Link>
                    </li>
                    <li>
                      <Link href="#">Chairman's Message</Link>
                    </li>
                    <li>
                      <Link href="#">Director's Message</Link>
                    </li>
                    <li>
                      <Link href="#">Faculty</Link>
                    </li>
                    <li>
                      <Link href="#">facilities</Link>
                    </li>
                    <li>
                      <Link href="#">Fee Structure</Link>
                    </li>
                    <li>
                      <Link href="#">Scholarships</Link>
                    </li>
                    <li>
                      <Link href="#">News and Updates</Link>
                    </li>
                    <li>
                      <Link href="#">Hostel & Mess Facilities</Link>
                    </li>
                    <li>
                      <Link href="#">Sports Facilities</Link>
                    </li>
                    <li>
                      <Link href="#">Training Facilities</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                    <li>
                      <Link href="#">Downloads</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright__text">
                  <p>
                    {new Date().getFullYear()} © Copyright Khubaib University
                    Pakistan. Website by Devify
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright__menu">
                  <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Universiy Privacy Statement</Link>
                    </li>
                    <li>
                      <Link href="#">FAQS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
