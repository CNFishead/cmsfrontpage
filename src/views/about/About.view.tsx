import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import AboutHero from "./components/aboutHero/AboutHero.component";
import MissionValues from "./components/missionValues/MissionValues.component";
import OurStory from "./components/ourStory/OurStory.component";
import BuiltWithPurpose from "./components/purposeBuilt/BuiltWithPurpose.component";
import AboutCTA from "./components/ctaSection/AboutCTA.component";

const About = () => {
  return (
    <div className={styles.about_us}>
      {/* Hero Section */}
      <AboutHero />
      <MissionValues />
      <OurStory />
      <BuiltWithPurpose />
      <AboutCTA />
    </div>
  );
};

export default About;
