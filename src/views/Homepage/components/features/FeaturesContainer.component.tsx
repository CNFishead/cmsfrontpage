"use client";
import React from "react";
import styles from "./FeaturesContainer.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "https://res.cloudinary.com/wulfdev/image/upload/c_thumb,w_200,g_face/v1735241866/powerful-icon-10_kdsamx.png",
    title: "Simple but Powerful",
    text: "ShepherdCMS is crafted for simplicity in use yet robust in functionality, aiming to provide a service that supports the growth of your ministry.",
  },
  {
    icon: "https://res.cloudinary.com/wulfdev/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735241860/connectivity-icon-1_b2y5hp.png",
    title: "Connect to your Congregants",
    text: "The Simple Check-In app enables automatic management of your members! Receive prayer requests, volunteer sign-ups, and event registrations easily.",
  },
  {
    icon: "https://res.cloudinary.com/wulfdev/image/upload/c_thumb,w_200,g_face/v1735241852/stack-of-money-icon-1_ay0zvi.png",
    title: "Affordable",
    text: "Pick only the features you need — keep your rates ideal for your church while contributing to your financial health.",
  },
];

const FeaturesContainer = () => {
  return (
    <section className={styles.features}>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <motion.div
            className={styles.featureCard}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Image
              src={feature.icon}
              alt={`${feature.title} icon`}
              width={75}
              height={75}
              className={styles.icon}
            />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesContainer;
