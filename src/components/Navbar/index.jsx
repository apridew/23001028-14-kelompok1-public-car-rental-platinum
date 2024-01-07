import { Link } from "react-router-dom";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import * as formater from "../../helpers/formaters";
import Button from "../Button";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid wrapper-nav">
          <Link
            onClick={formater.scrollTop}
            to={"/"}
            className="navbar-brand fw-bold"
          >
            Binar Car
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end w-50"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header pb-0">
              <HashLink
                onClick={formater.scrollTop}
                smooth={true}
                to={"/"}
                className="nav-link"
              >
                <h5
                  className="offcanvas-title fw-semibold"
                  id="offcanvasNavbarLabel"
                >
                  BCR
                </h5>
              </HashLink>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-lg-3 gap-md-3 gap-sm-0">
                <li className="nav-item">
                  <HashLink
                    smooth={true}
                    to={"/#our-services"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Our Services
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth={true} to={"/#why-us"} className="nav-link">
                    Why Us
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    smooth={true}
                    to={"/#testimonial"}
                    className="nav-link"
                  >
                    Testimonial
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth={true} to={"/#faq"} className="nav-link">
                    FAQ
                  </HashLink>
                </li>
                <li>
                  <Button link="/register" name="Register" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
