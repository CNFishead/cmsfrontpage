import React from "react";
import styles from "./Home.module.scss";
import HeroContainer from "./components/heroContainer/HeroContainer.component";
import FeaturesContainer from "./components/features/FeaturesContainer.component";
import ContentBlock from "./components/contentBlock/ContentBlock.component";
import { ContentType, default as data } from "./components/contentBlock/contentdata";
import EarlyAdopterSection from "./components/earlyAdopterSpecial/EarlyAdopterSpecial.component";

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroContainer />
      <FeaturesContainer />
      {data.map((item: ContentType, index) => (
        <ContentBlock
          key={index}
          image={item.image}
          title={item.title}
          text={item.text}
          ctaText={item.ctaText}
          ctaLink={item.ctaLink}
          reverse={item.reverse}
        />
      ))}
      <EarlyAdopterSection />
    </div>
  );
};

export default Home;
