"use client";
import React from "react";
import styles from "./CallToActionSection.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <motion.section
      className={styles.cta}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Join the ShepherdCMS Community Today!</h2>
        <p className={styles.text}>
          Whether you&apos;re a small congregation or a growing ministry, ShepherdCMS is your trusted partner in leading and
          managing your church effectively.
        </p>
        <p className={styles.text}>
          <strong>ShepherdCMS</strong> — Because ministry deserves more than spreadsheets.
        </p>
        <Link href="https://auth.shepherdcms.org/signup">
          <button className={styles.ctaButton}>Start Free Trial</button>
        </Link>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
