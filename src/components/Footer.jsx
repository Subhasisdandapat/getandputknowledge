import React from "react";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 w-auto p-3">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-x1-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Get & Put Knowledge
            </h5>
            <p>
              Designed and built with all the love in the world by the Bootstrap
              team with the help of our contributors.
            </p>
          </div>
          {/* links------------ */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <Link to="/home" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <p>
              <Link to="/about" className="text-white text-decoration-none">
                About
              </Link>
            </p>
            <p>
              <Link to="/contact" className="text-white text-decoration-none">
                Contact Us
              </Link>
            </p>
          </div>
          {/* contact------------------------ */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              contact
            </h5>
            <p>
              <i className="fas fa-home me-3"></i>Kolkata, WestBengal,India
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              getandputknowladge@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i>+91 1234567890
            </p>
          </div>

          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved by:
                <a href=" " className="text-warning text-decoration-none ms-1">
                  <strong>The Providers</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href=" " className="btn-floating btn-sm text-white fs-5 me-3">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href=" " className="btn-floating btn-sm text-white fs-5 me-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href=" " className="btn-floating btn-sm text-white fs-5 me-3">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href=" " className="btn-floating btn-sm text-white fs-5 me-3">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href=" " className="btn-floating btn-sm text-white fs-5 me-3">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
