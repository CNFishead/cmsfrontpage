"use client";
import React from "react";
import styles from "./MissionValues.module.scss";
import { motion } from "framer-motion";

const MissionValues = () => {
  return (
    <motion.section
      className={styles.mission}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Our Mission and Values</h2>
      <p>Our mission is to simplify church management and empower leaders to focus on ministry.</p>

      <ul className={styles.values}>
        <li>
          <strong>Faith-Driven:</strong> Rooted in Christian values.
        </li>
        <li>
          <strong>User-Focused:</strong> Designed with churches in mind.
        </li>
        <li>
          <strong>Innovation-Oriented:</strong> Leveraging technology to support ministry.
        </li>
      </ul>
    </motion.section>
  );
};

export default MissionValues;
