"use client";
import React from "react";
import styles from "./OurStory.module.scss";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <motion.section
      className={styles.story}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.wrapper}>
        <p>
          ShepherdCMS was created because we believe that Christian products should be Christian-run. Too often, large
          companies lose sight of who they&apos;re serving and the deeper purpose behind their work.
        </p>
        <p>
          As Christians, we understand the profound importance of ministry for pastors — the responsibility, the
          challenges, and the desire to serve. While their ministry may not be our ministry, we want pastors to know
          that choosing ShepherdCMS means a commitment to walking alongside them. Your success in ministry is our
          purpose in building this platform.
        </p>
      </div>
    </motion.section>
  );
};

export default OurStory;
