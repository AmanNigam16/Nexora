import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewEventsClick = () => {
    navigate("/events");  // Navigate to EventList when clicked
  };

  return (
    <div className="homepage-container">
      {/* Hero Section with dynamic background */}
      <div className="hero-section-home">
        <div className="hero-content-home">
          <h1 className="headline">Host and Attend Events Seamlessly</h1>
          <p className="intro-text">
            Bringing people together from around the globe
          </p>
          <div className="cta-buttons">
            <button className="cta-button">Create an Event</button>
            <button className="cta-button">Join an Event</button>
          </div>
        </div>

        <div className="dynamic-effect">
          <img
            src="https://spansystech.com/images/hero/banner3.gif"
            alt="Dynamic Effect"
            className="dynamic-gif"
          />
        </div>
      </div>

      {/* Platform Details Section */}
      <div className="platform-details-section">
        <h2>Why Choose Our Platform?</h2>
        <div className="details-grid">
          <div className="details-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUnmvZ-w2nGoi_b3vhm3wVCc5u3gumK6cFqBpLkJHaPfn9K3tNEiN1P0apCi1SoX2bK1U&usqp=CAU" alt="Feature 1" />
            <p>Easy Event Creation</p>
          </div>
          <div className="details-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwnIqEmuBb1u8iFFmUKD640flpSLYGF0QpQ&s" alt="Feature 2" />
            <p>Customizable Event Pages</p>
          </div>
          <div className="details-item">
            <img src="https://leadtail.com/wp-content/uploads/2020/03/virtual-event-planning-questions-1024x576.jpg" alt="Feature 3" />
            <p>Seamless Participant Management</p>
          </div>
        </div>
      </div>

      {/* Event Discovery Section */}
      <div className="event-discovery">
        <h2>Discover Events</h2>
        <input
          type="text"
          placeholder="Search events by category..."
          className="search-bar"
        />
        <div className="event-categories">
          <div className="category">Workshops</div>
          <div className="category">Tech Conferences</div>
          <div className="category">Art Exhibitions</div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <button onClick={handleViewEventsClick}>View Events</button>
      </div>
    </div>
  );
};

export default HomePage;
