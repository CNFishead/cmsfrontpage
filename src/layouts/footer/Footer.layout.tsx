// Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentSection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <img src="/images/ShepherdsCMSLogo.png" alt="Logo" className={styles.logo} />
          </div>
          <p className={styles.missionStatement}>
            ShepherdCMS, the online multi-tool for churches and ministries in the United States.
          </p>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.navContainer}>
            <h4 className={styles.title}>Legal</h4>
            <ul className={styles.navList}>
              <li>
                <Link href="/terms-of-use" className={styles.navItem}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={styles.navItem}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
