import React from 'react';
import home_banner5 from '../../assets/images/banner/home_banner5.jpeg'
import home_banner from '../../assets/images/banner/home_banner.jpeg'
import home_banner1 from '../../assets/images/banner/home_banner1.jpeg'
import home_banner2 from '../../assets/images/banner/home_banner2.jpeg'
const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Video Section */}
      <section className="video-section"  style={{ backgroundImage: `url(${home_banner5})`,backgroundSize:'' }}>
        <div className="auto-container">
          <h5>Working since 1999</h5>
          <h2>Tuneup Your Car <br /> to Next Level</h2>
          <div className="video-box">
            <div className="video-btn">
              <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="overlay-link lightbox-image video-fancybox ripple">
                <i className="flaticon-play"></i>
              </a>
            </div>
            <div className="text">Watch intro video <br /> about us</div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-box">
                <img src={home_banner2} alt="" />
                <img  src={home_banner} alt="" />
                <div className="year-experience"><strong>17</strong> years <br /> Experience</div>
              </div>
            </div>
            <div className="col-lg-7 pl-lg-5">
              <div className="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div className="text">
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
                </div>
                <div className="link-btn mt-40">
                  <a href="about.html" className="theme-btn btn-style-one style-two">
                    <span>About Us <i className="flaticon-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section, Features Section, Why Choose Us, Another Video Section, and CTA Section omitted for brevity */}
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title style-two">
            <h2>Our Featured Services</h2>
            <div className="text">
              Bring to the table win-win survival strategies to ensure proactive domination. At
              the end of the day, going forward, a new normal that has evolved from generation X is on the
              runway heading towards a streamlined cloud solution.
            </div>
          </div>
          {/* Example Service */}
          <div className="row">
            {/* Repeat for each service */}
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Performance Upgrade</h2>
                <a href="#" className="read-more">read more +</a>
                <div className="icon"><span className="flaticon-power"></span></div>
              </div>
            </div>
            {/* Other services omitted for brevity */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner-container">
                <h2>Quality Service And <br /> Customer Satisfaction !!</h2>
                <div className="text">
                  We utilize the most recent diagnostic equipment to ensure your vehicle is repaired or serviced properly and in a timely fashion.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image"><img src="/path-to-your-image/image-3.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div className="text">
                  Bring to the table win-win survival strategies to ensure proactive domination.
                </div>
              </div>
              {/* Example Reason */}
              <div className="icon-box">
                <div className="icon"><span className="flaticon-mechanic"></span></div>
                <h4>Certified Expert Mechanics</h4>
              </div>
              {/* Other reasons omitted for brevity */}
            </div>
            <div className="col-lg-6">
              {/* Additional content here */}
            </div>
          </div>
        </div>
      </section>

      {/* Another Video Section */}
      {/* Omitted for brevity, follow the pattern from the first video section */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="left-column">
              <h3>Schedule Your Appointment Today</h3>
              <div className="text">Your Automotive Repair & Maintenance Service Specialist</div>
            </div>
            <div className="right-column">
              <div className="phone">1800.456.7890</div>
              <div className="btn"><a href="#" className="theme-btn btn-style-one"><span>Appointment</span></a></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
