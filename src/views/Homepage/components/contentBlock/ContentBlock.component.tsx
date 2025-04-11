"use client";
import React from "react";
import styles from "./ContentBlock.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContentBlockProps {
  image: string;
  title: string;
  text: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ image, title, text, ctaText, ctaLink, reverse = false }) => {
  return (
    <section className={styles.contentBlock}>
      <div className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src={image} alt="section image" width={500} height={500} className={styles.image} />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          {ctaText && ctaLink && (
            <Link href={ctaLink}>
              <button className={styles.cta}>{ctaText}</button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContentBlock;
