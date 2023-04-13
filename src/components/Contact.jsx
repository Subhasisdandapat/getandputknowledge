import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container pt-5 mb-5 text-light">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-6 text-center my-3">Contact Us</h1>
            <p className="text-center">
              Thank you for your interest in our page. We are
              dedicated to providing the highest level of service to our
              clients/customers and are always happy to hear from you. If you
              have any questions or comments about our products/services, please
              feel free to contact us using the information below:
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <i className="fa fa-location-dot fa-3x"></i>
            <h3>Location</h3>
            <p>Area,City,Country</p>
            <i className="fa fa-phone fa-3x"></i>
            <h3>Call us</h3>
            <p>+91 123 4567890</p>
            <i className="fa fa-envelope fa-3x"></i>
            <h3>Email</h3>
            <p>get&putknowledge@gmail.com</p>
          </div>
          <div className="col-md-8">
            <div className="contactform">
              <div className="row">
                <div className="col-md-8">
                  <span id="lblResponse" className="tab-content" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <p>Enter Your Name</p>
                  <input
                    type="text"
                    name="tbName"
                    id="tbName"
                    className="form-control my-2"
                    placeholder="name"
                  />
                  <br />
                  <div className="col-md-6">
                    <p>Enter Your Email</p>
                    <input
                      type="email"
                      name="tbEmail"
                      id="tbEmail"
                      className="form-control my-2"
                      placeholder="Enter Email"
                    />
                  </div>
                  <br />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p>Enter Subject</p>
                    <input
                      type="text"
                      name="tbSubject"
                      id="tbSubject"
                      className="form-control my-2"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      name="tbMessage"
                      id="tbMessage"
                      cols="30"
                      rows="10"
                      className="form-control my-2"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      name="btnSendMsg"
                      value="Send Message"
                      id="btnSendMsg"
                      className="btn btn-lg btn-submit btn-outline-light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
