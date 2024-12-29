import styles from "./FeatureCard.module.scss";

export default function FeatureCard({ name, price, description }: any) {
  return (
    <div className={styles.featureCard}>
      <h3>{name}</h3>
      <p className={styles.price}>${price}/month</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
