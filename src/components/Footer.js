import React from "react";

export const Footer = () => {
  const footerStyle = {
    margin: "30px",
  };
  return (
    <div class="container">
      <footer
        style={footerStyle}
        class="text-center text-lg-start border border-white pt-4"
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4">OUR WORLD</h5>

              <ul class="list-unstyled mb-4">
                <li>
                  <a href="#!" class="text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Environmental philosophy
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Artist collaborations
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4">Assistance</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Contact Information
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Payment
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4">Careers</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4">Sign up to our newsletter</h5>

              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">
                  Email address
                </label>
              </div>

              <button type="submit" class="btn btn-outline-white btn-block">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div class="text-center p-3 border-top border-white">
          <a class="text-white" href="https://github.com/nishatlea">
            Nishat_Lea
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
