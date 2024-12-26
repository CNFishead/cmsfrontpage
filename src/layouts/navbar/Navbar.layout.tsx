import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <img src="/images/ShepherdsCMSLogo.png" alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navContainer}>
        <Link href="/login" passHref>
          <p className={styles.navItem}>Get Started</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
