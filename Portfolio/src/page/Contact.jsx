import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// <-- external CSS

export default function ContactForm() {
  return (
    <div className="contact-page d-flex justify-content-center align-items-center min-vh-100">
      <div className="container contact-container">
        <h2 className="text-center mb-5 text-light">Get in Touch</h2>

        <div className="row g-4">
          {/* LEFT: Contact Info */}
          <div className="col-md-5">
            <div className="contact-info-card h-100 p-4">
              <h4 className="mb-4">Contact Me</h4>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <i className="bx bxl-gmail me-2"></i>
                  <strong> Email:</strong> example@email.com
                </li>
                <li className="mb-3">
                  <i className="bx bx-phone me-2"></i>
                  <strong>Phone:</strong> +1 234 567 890
                </li>
                <li className="mb-3">
                  <i className="bx bx-pin me-2"></i>
                  <strong className="text-L">Location:</strong> +1 234 567 890
                </li>
              </ul>

              <h6 className="mb-3">Follow Me</h6>
              <div className="d-flex gap-3 social-links">
                <div className="btn-sci">
                  <div className="sci">
                    <a href="#">
                      <i className="bx bxl-github"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-md-7">
            <form className="contact-form-card p-4">
              <h4 className="mb-4">Send a Message</h4>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control custom-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control custom-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control custom-input"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="form-control custom-input"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary send-btn px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center  mt-4 small">
          We’ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
