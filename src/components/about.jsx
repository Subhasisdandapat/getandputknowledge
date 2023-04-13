import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <section id="about1">
        <div className="about-1 pt-5">
          <h1>AboutUs</h1>
          <p>
            We are the team of CCP , we build this website for getting knowledge
            about some best personality in the world and it's also help students
            and parents to know all about the person by searching in this page.
            It all happened after the login validation.qui tempora placeat
            itaque! Accusantium temporibus error suscipit.
          </p>
        </div>
        <div id="about2">
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-4 ">
                  <div className="about-item text-center pt-5 pb-2 ps-1 pe-2 border border-info rounded h-100">
                    <i className="fa fa-book"></i>
                    <h3>MISSION</h3>
                    <hr />
                    <p>
                      In terms of the mission of web pages, GET and PUT are
                      important because they enable users to interact with web
                      resources. GET requests allow users to retrieve
                      information and view web pages, while PUT requests allow
                      them to update or create new resources. Without these
                      methods, the web would be a static, read-only experience.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="about-item text-center pt-5 pb-2 ps-1 pe-2 border border-info rounded h-100">
                    <i className="fa fa-earth"></i>
                    <h3>VISION</h3>
                    <hr />
                    <p>
                      The vision of the web is to be a platform for sharing and
                      collaboration, and HTTP methods like GET and PUT are
                      crucial to realizing this vision. By enabling users to
                      access and contribute to web resources, these methods help
                      to create a truly decentralized and democratic platform
                      for information exchange.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="about-item text-center pt-5 pb-2 ps-1 pe-2 border border-info rounded h-100">
                    <i className="fa fa-pencil"></i>
                    <h3>ACHIVEMENTS</h3>
                    <hr />
                    <p>
                      Overall, the achievements and impact of GET and PUT on the
                      web are far-reaching and significant. These methods have
                      helped to create a dynamic and collaborative platform for
                      information exchange, and they continue to drive
                      innovation and progress in web development today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* another section-------------- */}
      </section>
      <section>
        <div className="container mb-5 mt-5 pt-5">
          <h1 className="text-center mb-2 font-weight-bold">Contributers</h1>
          <hr />
          <div className="row gy-3">
            <div className="col-md-3 ">
              <div class="style-item card border border-info h-100">
                <img
                  src={require("../img/rohit.jpg")}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title ">Md Rohit Middya</h5>
                  <hr />
                  <p className="card-text">
                  Co-Founder & Director
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="style-item card border border-info h-100">
                <img
                  src={require("../img/haseeb.jpg")}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title ">Md Haseeb Khan</h5>
                  <hr />
                  <p className="card-text">
                  Co-Founder & CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="style-item card border border-info h-100">
                <img
                  src={require("../img/papan.jpg")}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Papan Ghosh</h5>
                  <hr />
                  <p className="card-text">
                    Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="style-item card border border-info h-100">
                <img
                  src={require("../img/default.jpg")}
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Subhasis Dandapat</h5>
                  <hr />
                  <p className="card-text">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
