import { motion } from "framer-motion";

const AboutPage = () => {
  const slideIn = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section-about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideIn}
      >
        <div className="hero-content-about">
          <h1>About Nexora</h1>
          <p>
            Nexora is your go-to platform for hosting and attending virtual
            events. We make it easier to connect with others, no matter where
            you are in the world. Our mission is to bring seamless, dynamic, and
            enjoyable virtual experiences to all.
          </p>
        </div>
        <div className="hero-image">
          {/* Placeholder for future image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYmluYXJ8ZW58MHx8MHx8fDA%3D"
            alt="About Nexora"
          />
        </div>
      </motion.section>

      <motion.section
        className="content-section content-division"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideIn}
      >
        <div className="content-text vert-line">
          <h1>Mission and vision</h1>
          <p>
            Empowering Boundless Connections Worldwide Through One Unified
            Platform
          </p>
        </div>
        <div className="content-text vert-line">
          <h1>Our core value: Care</h1>
          <p>
            We care for our customers, our company, our communities, our
            teammates, and ourselves
          </p>
        </div>
      </motion.section>

      <motion.section
        className="content-section content-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideIn}
      >
        <div className="content-head">
          <h1>Nexora is dedicated to delivering happiness to</h1>
          <div className="logos-container">
            <div className="logos">
              <h2>Our customers</h2>
              <p>
                We listen to our customers and strive to deliver happiness
                through our innovations
              </p>
            </div>

            <div className="logos">
              <h2>Our community</h2>
              <p>We support and connect our communities around the world</p>
            </div>

            <div className="logos">
              <h2>Our teammates</h2>
              <p>We collaborate and build trust with one another</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* First Content Section - Image Left */}
      <motion.section
        className="content-section image-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideIn}
      >
        <div className="content-image">
          <img
            src="https://www.ucf.edu/wp-content/blogs.dir/19/files/2020/02/Sustainable-Event-Management-web.jpg"
            alt="Seamless Event Management"
          />
        </div>
        <div className="content-text">
          <h2>Seamless Event Management</h2>
          <p>
            Nexora simplifies event creation and management with easy-to-use
            tools for hosting virtual events. Whether it’s a conference, meetup,
            or social event, Nexora has everything you need to bring people
            together.
          </p>
        </div>
      </motion.section>

      {/* Second Content Section - Image Right */}
      <motion.section
        className="content-section image-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideIn}
      >
        <div className="content-features">
          <div className="features-heading">
            <h1>Features We Provide</h1>
          </div>

          <ul className="features-list">
            {/* Global Connectivity */}
            <li className="text-img-relation">
              <div className="designer-bullet">•</div>
              <div className="content-text">
                <h2>Global Connectivity</h2>
                <p>
                  Our platform allows you to connect with participants across
                  the globe in real-time. No matter where your audience is,
                  Nexora ensures smooth, lag-free experiences.
                </p>
              </div>
              <div className="content-image">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20240911/pngtree-global-network-connection-with-city-skyline-and-blue-lights-image_16150058.jpg"
                  alt="Global Connectivity"
                />
              </div>
            </li>

            {/* User-Friendly Interface */}
            <li className="text-img-relation">
              <div className="designer-bullet">•</div>
              <div className="content-text">
                <h2>User-Friendly Interface</h2>
                <p>
                  Nexora’s interface is designed with ease of use in mind,
                  making it accessible for everyone, from first-time event
                  organizers to seasoned professionals. Plan, schedule, and
                  manage events without hassle.
                </p>
              </div>
              <div className="content-image">
                <img
                  src="https://thumbs.dreamstime.com/b/user-friendly-mobile-interface-apps-concept-71170839.jpg"
                  alt="User-Friendly Interface"
                />
              </div>
            </li>

            {/* Real-Time Engagement */}
            <li className="text-img-relation">
              <div className="designer-bullet">•</div>
              <div className="content-text">
                <h2>Real-Time Engagement</h2>
                <p>
                  Engage with your audience through live chats, Q&A sessions,
                  and interactive polls. Nexora ensures your events are more
                  than just broadcasts — they are conversations.
                </p>
              </div>
              <div className="content-image">
                <img
                  src="https://www.screenmeet.com/hubfs/Blog%20Images/customer-engagement-text-blog-750x450.jpeg"
                  alt="Real-Time Engagement"
                />
              </div>
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
