import React from 'react';
// Import Link from React Router if you're using it for navigation
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Upper Box */}
      <div className="upper-box">
        <div className="auto-container">
          <div className="row no-gutters">
            {/* Footer Info Box */}
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-pin"></span>
                  </div>
                  <div className="text">54B, Tailstoi Town 5238 MT, <br /> La city, IA 522364</div>
                </div>
              </div>
            </div>

            {/* Footer Info Box */}
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-email"></span>
                  </div>
                  <div className="text">Email us : <br /> <a href="mailto:contact@autorex.com">contact@autorex.com</a></div>
                </div>
              </div>
            </div>

            {/* Footer Info Box */}
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-phone"></span>
                  </div>
                  <div className="text">Call us on : <br /><strong>+ 1800 456 7890</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="widgets-inner-container">
            <div className="row clearfix">
              {/* Footer Column */}
              <div className="footer-column col-lg-4">
                <div className="widget widget_about">
                  <div className="logo">
                    <Link to="/"><img src="assets/images/logo-two.png" alt="" /></Link>
                  </div>
                  <div className="text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</div>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Useful Links</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/appointment">Appointment</Link></li>
                          <li><Link to="/testimonials">Testimonials</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Our Services</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><Link to="/services/performance-upgrade">Performance Upgrade</Link></li>
                          <li><Link to="/services/transmission-service">Transmission Service</Link></li>
                          <li><Link to="/services/break-repair">Brake Repair & Service</Link></li>
                          <li><Link to="/services/engine-repair">Engine Service & Repair</Link></li>
                          <li><Link to="/services/tyres-wheels">Tyres & Wheels</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-lg-4">
                <div className="widget widget_newsletter">
                  <h4 className="widget_title">Newsletter</h4>
                  <div className="text">Get the latest updates and offers.</div>
                  <div className="newsletter-form">
                    <form className="ajax-sub-form" method="post">
                      <div className="form-group">
                        <input type="email" placeholder="Enter your email" id="subscription-email" />
                        <button className="theme-btn" type="submit"><span className="fas fa-paper-plane"></span></button>
                        <label className="subscription-label" htmlFor="subscription-email"></label>
                      </div>
                    </form>
                  </div>
                  <ul className="social-links">
                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="auto-container">
        <div className="footer-bottom">
          <div className="copyright-text">© Copyright <Link to="#">Autorex</Link> 2020. All rights reserved.</div>
          <div className="text">Created by <Link to="#">ThemeArc</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
