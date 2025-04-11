"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { navigationData, Page, useNavigationStore } from "@/data/navbarnav";

const Navbar = () => {
  const [touchingTop, setTouchingTop] = React.useState(true);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = React.useState(false);
  const [navDropdownIsActive, setNavDropdownIsActive] = React.useState(false);
  const { setPage, page } = useNavigationStore((state) => state);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setHamburgerMenuIsOpen(false);
    setNavDropdownIsActive(false);
  };

  React.useEffect(() => {
    const updatePosition = () => {
      setTouchingTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setPage((navigationData as any)[pathname.split("/")[1] || "home"]);
  }, [pathname]);

  if (page.fullPage) return null;

  return (
    <header className={`${styles.navigationBar} ${touchingTop && !hamburgerMenuIsOpen ? styles.touchingTop : ""}`}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          <Image
            src="/images/ShepherdsCMSLogo.png"
            alt="logo"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
          <span>ShepherdCMS</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.desktopNav}>
        {Object.values(navigationData)
          .filter((item) => !item.hidden)
          .map((item) =>
            item.menu ? (
              <div key={item.pageTitle} className={`${styles.navDropdown} ${styles.navItem}`}>
                <button onClick={() => setNavDropdownIsActive(!navDropdownIsActive)} className={styles.navDropdownText}>
                  <p>Resources</p>
                  <IoIosArrowDown className={styles.dropdownArrow} />
                </button>
                <div className={`${styles.navDropdownContent} ${navDropdownIsActive ? styles.navDropdownActive : ""}`}>
                  {item.menu.map((sub) => (
                    <Link
                      key={sub.pageTitle}
                      href={sub.path || "/"}
                      className={`${styles.navItem} ${pathname === sub.path ? styles.active : ""}`}
                      onClick={handleLinkClick}
                    >
                      {sub.pageTitle}
                      {sub.external && <FiExternalLink className={styles.externalLinkIcon} />}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.pageTitle}
                href={item.path || "/"}
                className={`${styles.navItem} ${pathname === item.path ? styles.active : ""} ${
                  item.button ? styles.button : ""
                }`}
                onClick={handleLinkClick}
              >
                {item.button && <BsPersonCircle />}
                {item.pageTitle}
                {item.external && <FiExternalLink className={styles.externalLinkIcon} />}
              </Link>
            )
          )}
      </nav>

      {/* Mobile Menu Icon */}
      <div className={styles.hamburgerMenu} onClick={() => setHamburgerMenuIsOpen((prev) => !prev)}>
        {hamburgerMenuIsOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {Object.values(navigationData)
              .filter((item) => !item.hidden)
              .map((item) =>
                item.menu ? (
                  <div key={item.pageTitle} className={styles.navDropdown}>
                    <button
                      onClick={() => setNavDropdownIsActive(!navDropdownIsActive)}
                      className={styles.navDropdownText}
                    >
                      <p>Resources</p>
                      <IoIosArrowDown className={styles.dropdownArrow} />
                    </button>
                    {navDropdownIsActive && (
                      <div className={styles.navDropdownContent}>
                        {item.menu.map((sub) => (
                          <Link
                            key={sub.pageTitle}
                            href={sub.path || "/"}
                            className={`${styles.navItem} ${pathname === sub.path ? styles.active : ""}`}
                            onClick={handleLinkClick}
                          >
                            {sub.pageTitle}
                            {sub.external && <FiExternalLink className={styles.externalLinkIcon} />}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.pageTitle}
                    href={item.path || "/"}
                    className={`${styles.navItem} ${pathname === item.path ? styles.active : ""} ${
                      item.button ? styles.button : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.button && <BsPersonCircle />}
                    {item.pageTitle}
                    {item.external && <FiExternalLink className={styles.externalLinkIcon} />}
                  </Link>
                )
              )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
