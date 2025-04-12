"use client";
import React from "react";
import styles from "./BuiltWithPurpose.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const BuiltWithPurpose = () => {
  return (
    <motion.section
      className={styles.purpose}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Built With Purpose</h2>
          <p>
            ShepherdCMS wasn’t built by a venture-backed tech startup. It was born out of a desire to serve the local
            church with software that doesn’t just work — but aligns with your mission and values.
          </p>
          <p>
            As a fellow believer, I know the weight and responsibility that comes with ministry. My commitment is
            simple: to build tools that make your work easier, your outreach stronger, and your people more connected —
            all to the glory of God.
          </p>
          <p>This platform is personal. It’s my ministry to your ministry.</p>
          <p className={styles.signature}>— Austin, Creator of ShepherdCMS</p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://res.cloudinary.com/wulfdev/image/upload/v1735740595/headshot_swrcpu.jpg"
            alt="Austin - Creator of ShepherdCMS"
            width={300}
            height={300}
            className={styles.portrait}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default BuiltWithPurpose;
