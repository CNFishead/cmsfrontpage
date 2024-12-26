import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/* logo */}
        <div className={styles.logoContainer}>
          <img src="/images/ShepherdsCMSLogo.png" alt="Logo" className={styles.logo} />
        </div>
        <span>ShepherdCMS, the online multi-tool for churches and ministries in the United States</span>
      </div>
      <div className={styles.subContainer}>
        {/* nav items */}
        <div className={styles.navContainer}>
          <div className={styles.subNavContainer}>
            <h4 className={styles.title}>Legal</h4>
            <Link href="/terms-of-use" className={styles.navItem}>
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className={styles.navItem}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
