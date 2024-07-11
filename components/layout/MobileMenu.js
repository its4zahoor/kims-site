import Link from "next/link";
import { useState } from "react";
import Link from "next/link";
import { useState } from "react";
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
        <li className="active">
          <Link href="/about-us">ABOUT</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">ACADEMIC</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
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
          <div
            className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">ADMISSION</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/diploma-program">DIPLOMA PROGRAM</Link>
            </li>
            <li>
              <Link href="/degree-program">DEGREE PROGRAM</Link>
            </li>
            <li>
              <Link href="/eligibility-criteria">ELIGIBILITY CRITERIA</Link>
            </li>
            <li>
              <Link href="/admission-process">ADMISSION PROCESS</Link>
            </li>
            <li>
              <Link href="/fee-structure">FEE STRUCTURE</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(2)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">FACILITIES</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/scholarship">SCHOLARSHIP</Link>
            </li>
            <li>
              <Link href="/training-facilities">TRAINING FACILITIES</Link>
            </li>
            <li>
              <Link href="/sports-facilities">SPORTS FACILITIES</Link>
            </li>
          </ul>
          <div
            className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(3)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li>
          <Link href="/news-and-events">NEWS & EVENTS</Link>
        </li>
        <li>
          <Link href="contact-us">CONTACT US</Link>
        </li>
      </ul>
    </>
  );
}
