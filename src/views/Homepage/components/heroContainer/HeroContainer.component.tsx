"use client";
import React from "react";
import styles from "./HeroContainer.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroContainer = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroOverlay}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > 
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your Ministry. Empowered by Technology.
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ShepherdCMS helps churches thrive with modern tools built by believers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link href="#features">
            <button className={styles.cta}>Explore Features</button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContainer;
