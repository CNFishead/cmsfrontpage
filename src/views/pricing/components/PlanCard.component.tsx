"use client";
import { useState } from "react";
import styles from "./PlanCard.module.scss";
import { PlanType } from "@/types/IPlan";

interface PlanCardProps {
  plan: PlanType;
  isYearly?: boolean;
}

export default function PlanCard({ plan, isYearly = false }: PlanCardProps) {
  const { name, price, description, features, mostPopular, billingCycle, yearlyDiscount } = plan;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Truncate description to ~100 characters
  const truncatedDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

  // Show only first 5 features initially
  const displayedFeatures = showAllFeatures ? features : features?.slice(0, 5);
  const hasMoreFeatures = features && features.length > 5;

  // Calculate pricing based on billing toggle
  const monthlyPrice = parseFloat(price);
  const yearlyPrice = monthlyPrice * 12 * (1 - yearlyDiscount / 100);
  const yearlyMonthlyEquivalent = yearlyPrice / 12;
  const savings = monthlyPrice * 12 - yearlyPrice;

  const displayPrice = isYearly ? yearlyMonthlyEquivalent : monthlyPrice;
  const displayPeriod = isYearly ? "month (billed yearly)" : billingCycle;

  return (
    <div className={`${styles.planCard} ${mostPopular ? styles.mostPopular : ""}`}>
      {mostPopular && <div className={styles.popularBadge}>Most Popular</div>}
      <h3>{name}</h3>
      <div className={styles.priceContainer}>
        <div>
          <span className={styles.price}>${displayPrice.toFixed(2)}</span>
          <span className={styles.billingCycle}>/{displayPeriod}</span>
        </div>
        {isYearly && yearlyDiscount > 0 && (
          <div className={styles.yearlyDetails}>
            <p className={styles.originalPrice}>${monthlyPrice}/month</p>
            <p className={styles.savings}>
              Save ${savings.toFixed(2)}/year ({yearlyDiscount}% off)
            </p>
          </div>
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{showFullDescription ? description : truncatedDescription}</p>
        {description.length > 100 && (
          <button className={styles.toggleButton} onClick={() => setShowFullDescription(!showFullDescription)}>
            {showFullDescription ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      <div className={styles.featuresContainer}>
        <h4>Included Features:</h4>
        <ul className={styles.featuresList}>
          {displayedFeatures?.map((feature) => (
            <li key={feature._id} className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              {feature.name}
            </li>
          ))}
        </ul>
        {hasMoreFeatures && (
          <button className={styles.toggleButton} onClick={() => setShowAllFeatures(!showAllFeatures)}>
            {showAllFeatures ? `Show less features` : `Show ${features.length - 5} more features`}
          </button>
        )}
      </div>

      <button className={styles.selectButton}>Choose {name}</button>
    </div>
  );
}
