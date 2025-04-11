'use client';
import React from "react";
import styles from "./EarlyAdopterSection.module.scss";
import { motion } from "framer-motion";

const EarlyAdopterSection = () => {
  return (
    <motion.section
      className={styles.earlyAdopter}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.header}>🎉 Early Adopters Special!</h2>
      <p className={styles.text}>
        ShepherdCMS is still in its early rollout. While we’re still building out features and squashing bugs, our mission
        is clear — to create a product that glorifies God and supports your ministry.
      </p>
      <p className={styles.text}>
        When you join now, you’ll lock in our <strong>Early Adopters Special</strong>: a permanent discounted rate and
        lifetime access to all future updates, when you sign up for a yearly subscription.
      </p>
    </motion.section>
  );
};

export default EarlyAdopterSection;
