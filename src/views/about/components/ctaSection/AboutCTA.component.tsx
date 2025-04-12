"use client";
import React from "react";
import styles from "./AboutCTA.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutCTA = () => {
  return (
    <motion.section
      className={styles.cta}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.wrapper}>
        <h2>Your Ministry Deserves More</h2>
        <p>
          Whether you're just starting out or leading a growing church, ShepherdCMS is here to support your calling.
          Join the churches already using ShepherdCMS and start your 2-week free trial today.
        </p>
        <Link href="https://auth.shepherdcms.org/signup">
          <button className={styles.ctaButton}>Start Free Trial</button>
        </Link>
      </div>
    </motion.section>
  );
};

export default AboutCTA;
