import Banner from "../components/banner/Banner";

import { useEffect, useState, useRef } from "react";
export default function Support() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services || []))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <>
      <Banner title="Contact us" />
      <form
        className="site_form"
        id="quoteForm"
        action="quoteForm.php"
        method="post"
      >
        <div className="form_col site_input-groups">
          <div className="site_input-group">
            <input
              type="text"
              name="fullName"
              id="fullname"
              className="site_input"
              placeholder="Full Name"
              aria-describedby="fullname-label fullname-error"
              required
            />
            <label htmlFor="fullname" id="fullname-label">
              Full Name*
            </label>
            <div className="error-message" id="fullname-error"></div>
          </div>

          <div className="site_input-group">
            <input
              type="text"
              name="companyName"
              id="companyname"
              className="site_input"
              placeholder="Company Name"
              aria-describedby="companyname-label companyname-error"
              required
            />
            <label htmlFor="companyname" id="companyname-label">
              Company Name*
            </label>
            <div className="error-message" id="companyname-error"></div>
          </div>

          <div className="site_input-group">
            <input
              type="email"
              name="email"
              id="email"
              className="site_input"
              placeholder="Email"
              aria-describedby="email-label email-error"
              required
            />
            <label htmlFor="email" id="email-label">
              Email*
            </label>
            <div className="error-message" id="email-error"></div>
          </div>

          <div className="site_input-group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="site_input"
              placeholder="Phone Number"
              aria-describedby="phone-label phone-error"
              required
              pattern="[\+]?[0-9\s-]{7,15}"
            />
            <label htmlFor="phone" id="phone-label">
              Phone Number*
            </label>
            <div className="error-message" id="phone-error"></div>
          </div>
        </div>

        <div className="form_col">
          <h4 className="text_light">Services</h4>
          <div
            className="products_lists-checkboxs site_grid grid_col-3"
            role="group"
            aria-labelledby="products-label"
          >
            {services.map((service) => (
              <div className="site_checkbox-group">
                <input
                  type="checkbox"
                  name="products[]"
                  id={service.id}
                  className="site_checkbox"
                  value={service.title}
                />
                <label htmlFor={service.id}>{service.title}</label>
              </div>
            ))}

            <div className="error-message" id="products-error"></div>
          </div>
        </div>
        <div className="form_col">
          <h4 className="text_light">Additional Requirements</h4>
          <div className="form_textarea">
            <textarea
              name="message"
              id="message"
              className="site_textarea site_input"
              placeholder="Your Message"
              aria-describedby="message-label"
            ></textarea>
          </div>
        </div>

        <div className="form_col">
          <button type="submit" className="cta primary_cta" id="submitBtn">
            Send Quote Request
          </button>
        </div>
      </form>
    </>
  );
}
