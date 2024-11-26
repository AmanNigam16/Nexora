import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage"; */
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("HomePage");

  return (
    <>
      <Header
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Header>
      <Outlet />
      {/* { (selectedTab === "Login") ? (<LoginPage></LoginPage>) : (selectedTab === "Sign Up") ? (<SignUp></SignUp>) : (selectedTab === "About") ? (<AboutPage></AboutPage>) : (<HomePage></HomePage>) } */}
      <Footer></Footer>
    </>
  );
}

export default App;
