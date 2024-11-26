import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-top">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">
          <img
            src="/Images/newnew.png"
            alt="Nexora"
            width="130"
            height="40px"
          />
        </span>
      </a>

      <ul className="nav nav-pills">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("About");
          }}
        >
          <Link
            to="/about"
            className={`nav-link ${selectedTab === "About" && "active"}`}
          >
            About
          </Link>
        </li>

        <li
          className="nav-item arrow"
          onClick={() => {
            setSelectedTab("Discover Events");
          }}
        >
          <Link
            to="/blog"
            className={`nav-link ${selectedTab === "Blog" && "active"}`}
          >
            Blog <i className="fa-solid fa-arrow-up"></i>
          </Link>
        </li>

        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Login");
          }}
        >
          <Link
            to="/login"
            className={`nav-link ${selectedTab === "Login" && "active"}`}
          >
            Login
          </Link>
        </li>

        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Sign Up");
          }}
        >
          <Link
            to="/sign-up"
            className={`nav-link ${selectedTab === "Sign Up" && "active"}`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
