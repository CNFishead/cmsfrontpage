"use client";
import React from "react";
import styles from "./AboutHero.module.scss";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <h1>Empowering Churches Through Seamless Management</h1>
        <p>At ShepherdCMS, we combine innovation with faith to support ministries worldwide.</p>
      </div>
    </motion.section>
  );
};

export default AboutHero;
