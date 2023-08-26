import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../src/css/globalStyles.css";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import Wellbeing from "../src/pages/Wellbeing";
import WellnessApp from "../src/pages/WellnessApp";
import Community from "../src/pages/Community";
import MainSection from "../src/components/MainSection";
import Footer from "../src/components/Footer";
import { CountryProvider } from "./context/CountryContext";

function MainPage() {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "home":
        return <Home setSelectedPage={setSelectedPage} />;
      case "wellbeing":
        return <Wellbeing />;
      case "wellnessApp":
        return <WellnessApp />;
      case "community":
        return <Community />;
      default:
        return null;
    }
  };

  return (
    <div className={styles["main-page"]}>
      <CountryProvider>
        <Header setSelectedPage={setSelectedPage} />
        <MainSection>{renderSelectedPage()}</MainSection>
        <Footer setSelectedPage={setSelectedPage} />
      </CountryProvider>
    </div>
  );
}

export default MainPage;
