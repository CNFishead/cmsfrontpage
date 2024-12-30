// pages/pricing.js
// import { useState } from "react";
import FeatureCard from "@/views/pricing/components/FeatureCard.component";
import styles from "./Pricing.module.scss"; // Import your SCSS file

export default function Pricing({ features }: any) {
  const competitors = [
    { name: "Competitor A", price: "$50/mo", features: ["Feature 1", "Feature 2"] },
    { name: "Competitor B", price: "$60/mo", features: ["Feature 3", "Feature 4"] },
  ];

  return (
    <div className={styles.pricingPage}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.dimContainer}></span>
        <h1>Transparent Pricing for Every Church</h1>
        <p>Get access to all our features without hidden fees.</p>
        <button className={styles.ctaButton}>Get Started for Free</button>
      </header>

      {/* Call to Action Container */}
      <div className={styles.ctaContainer}>
        <h2>
          Join <span className={styles.ctaText}>ShepherdCMS</span> Today with customizable to match{" "}
          <span className={styles.ctaText}>Your needs!</span>
        </h2>
        <p>
          Build your own plan with our flexible pricing options and choose features independently to create a plan that
          fits your church&apos;s unique requirements.
        </p>
      </div>

      {/* Features */}
      <section className={styles.featuresSection}>
        <h2>Choose Your Features</h2>
        <div className={styles.grid}>
          <div className={styles.featuresGrid}>
            {features?.map((feature: any) => (
              <FeatureCard key={feature._id} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      {/* <section className={styles.pricingTable}>
        <h2>Compare ShepherdCMS with Others</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>ShepherdCMS</th>
              {competitors.map((comp) => (
                <th key={comp.name}>{comp.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>$40/mo</td>
              {competitors.map((comp) => (
                <td key={comp.name}>{comp.price}</td>
              ))}
            </tr>
            <tr>
              <td>Feature 1</td>
              <td>Included</td>
              {competitors.map((comp) => (
                <td key={comp.name}>{comp.features.includes("Feature 1") ? "Included" : "Not Included"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </section> */}
    </div>
  );
}
