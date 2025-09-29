import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        {/* Logo + Mission */}
        <div className={styles.brandSection}>
          <Image
            src="/images/ShepherdsCMSLogo.png"
            alt="ShepherdCMS Logo"
            width={60}
            height={60}
            className={styles.logo}
          />
          <p className={styles.mission}>
            ShepherdCMS helps churches and ministries connect meaningfully with their communities. Built with love by
            believers.
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.linkGroups}>
          <div className={styles.linkColumn}>
            <h4>Product</h4>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            {/* <Link href="/check-in">Check-In</Link> */}
          </div>
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            {/* <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link> */}
          </div>
          <div className={styles.linkColumn}>
            <h4>Legal</h4>
            <Link href="/legal/terms">Terms of Use</Link>
            <Link href="/legal/privacy">Privacy Policy</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=61571062931984"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomNote}>&copy; {new Date().getFullYear()} ShepherdCMS. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
