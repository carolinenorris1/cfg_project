import React, { useState } from "react";
import styles from "../src/globalStyles.module.css";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import Wellbeing from "../src/pages/Wellbeing";
import WellnessApp from "../src/pages/WellnessApp";
import Community from "../src/pages/Community";
import MainSection from "../src/components/MainSection";
import Footer from "../src/components/Footer";

function MainPage() {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "home":
        return <Home />;
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
      <Header setSelectedPage={setSelectedPage} />
      <MainSection>{renderSelectedPage()}</MainSection>
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default MainPage;
