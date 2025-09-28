import Banner from "../components/banner/Banner";

export default function Support() {
  return (
    <>
      <Banner title="Contact us" />
      <form
        class="site_form"
        id="quoteForm"
        action="quoteForm.php"
        method="post"
      >
        <div class="form_col site_input-groups">
          <div class="site_input-group">
            <input
              type="text"
              name="fullName"
              id="fullname"
              class="site_input"
              placeholder="Full Name"
              aria-describedby="fullname-label fullname-error"
              required
            />
            <label for="fullname" id="fullname-label">
              Full Name*
            </label>
            <div class="error-message" id="fullname-error"></div>
          </div>

          <div class="site_input-group">
            <input
              type="text"
              name="companyName"
              id="companyname"
              class="site_input"
              placeholder="Company Name"
              aria-describedby="companyname-label companyname-error"
              required
            />
            <label for="companyname" id="companyname-label">
              Company Name*
            </label>
            <div class="error-message" id="companyname-error"></div>
          </div>

          <div class="site_input-group">
            <input
              type="email"
              name="email"
              id="email"
              class="site_input"
              placeholder="Email"
              aria-describedby="email-label email-error"
              required
            />
            <label for="email" id="email-label">
              Email*
            </label>
            <div class="error-message" id="email-error"></div>
          </div>

          <div class="site_input-group">
            <input
              type="tel"
              name="phone"
              id="phone"
              class="site_input"
              placeholder="Phone Number"
              aria-describedby="phone-label phone-error"
              required
              pattern="[\+]?[0-9\s-]{7,15}"
            />
            <label for="phone" id="phone-label">
              Phone Number*
            </label>
            <div class="error-message" id="phone-error"></div>
          </div>
        </div>

        <div class="form_col">
          <h4 class="text_light">Services</h4>
          <div
            class="products_lists-checkboxs site_grid grid_col-3"
            role="group"
            aria-labelledby="products-label"
          >
            <div class="site_checkbox-group">
              <input
                type="checkbox"
                name="products[]"
                id="aviation-fuels"
                class="site_checkbox"
                value="Next Generation Security"
              />
              <label for="aviation-fuels">Next Generation Security</label>
            </div>
            <div class="site_checkbox-group">
              <input
                type="checkbox"
                name="products[]"
                id="diesel-gas-oils"
                class="site_checkbox"
                value="ICT Infrastructures & Integration"
              />
              <label for="diesel-gas-oils">ICT Infrastructures & Integration</label>
            </div>
            <div class="site_checkbox-group">
              <input
                type="checkbox"
                name="products[]"
                id="heavy-fuel-oils"
                class="site_checkbox"
                value="Enterprise Network & Mobility"
              />
              <label for="heavy-fuel-oils">Enterprise Network & Mobility</label>
            </div>
            <div class="site_checkbox-group">
              <input
                type="checkbox"
                name="products[]"
                id="natural-gas-petroleum-products"
                class="site_checkbox"
                value="Data Center and Converged Infrastructure"
              />
              <label for="natural-gas-petroleum-products">
                Data Center and Converged Infrastructure
              </label>
            </div>
            <div class="site_checkbox-group">
              <input
                type="checkbox"
                name="products[]"
                id="refined-products-petrochemicals"
                class="site_checkbox"
                value="Facility Maintenance"
              />
              <label for="refined-products-petrochemicals">
                Facility Maintenance
              </label>
            </div>
            <div class="error-message" id="products-error"></div>
          </div>
        </div>
        <div class="form_col">
          <h4 class="text_light">Additional Requirements</h4>
          <div class="form_textarea">
            <textarea
              name="message"
              id="message"
              class="site_textarea site_input"
              placeholder="Your Message"
              aria-describedby="message-label"
            ></textarea>
          </div>
        </div>

        <div class="form_col">
          <button type="submit" class="cta primary_cta" id="submitBtn">
            Send Quote Request
          </button>
        </div>
      </form>
    </>
  );
}
