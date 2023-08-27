import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../src/css/globalStyles.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Wellbeing from "./pages/Wellbeing";
import WellnessApp from "./pages/WellnessApp";
import Community from "./pages/Community";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { CountryProvider } from "./context/CountryContext";

function App() {
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

export default App;
