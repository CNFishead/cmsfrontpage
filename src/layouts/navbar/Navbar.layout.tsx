"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link"; 
import { navigationData, Page, useNavigationStore } from "@/data/navbarnav";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [touchingTop, setTouchingTop] = React.useState(true);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = React.useState(false);
  const { setPage, page } = useNavigationStore((state) => state);
  const [navDropdownIsActive, setNavDropdownIsActive] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const updatePosition = () => {
      setTouchingTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  React.useEffect(() => {
    //on navigation change, scroll to top
    window.scrollTo(0, 0);

    setPage((navigationData as any)[pathname.split("/")[1] || "home"]);
  }, [pathname]);

  if (page.fullPage) return null;
  return (
    <div className={`${styles.navigationBar} ${touchingTop && !hamburgerMenuIsOpen ? styles.touchingTop : ""}`}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} href={"/"}>
          <Image
            style={{ objectFit: "contain" }}
            src={touchingTop && !hamburgerMenuIsOpen ? "/images/ShepherdsCMSLogo.png" : "/images/ShepherdsCMSLogo.png"}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <span>ShepherdCMS</span>
      </div>
      <div className={`${styles.navigation} ${hamburgerMenuIsOpen ? styles.hamburgerMenuIsOpen : ""}`}>
        {Object.values(navigationData)
          .filter((item: Page) => !item.hidden)
          .map((item: Page) => {
            if (item.menu) {
              return (
                <div
                  key={item.pageTitle}
                  className={`${styles.navDropdown} ${styles.navLink} ${
                    navDropdownIsActive ? styles.navDropdownActive : ""
                  }`}
                >
                  <div className={styles.navDropdownText} onClick={() => setNavDropdownIsActive(!navDropdownIsActive)}>
                    <p>Resources</p>
                    <IoIosArrowDown className={styles.dropdownArrow} />
                  </div>
                  <div className={styles.navDropdownContent}>
                    {item.menu.map((subItem: Page) => (
                      <Link
                        key={subItem.pageTitle}
                        className={`${styles.navItem} ${pathname == subItem.path ? styles.active : ""}`}
                        href={subItem.path ? subItem.path : "/"}
                      >
                        {subItem.pageTitle}
                        {subItem.external && <FiExternalLink className={styles.externalLinkIcon} />}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.pageTitle}
                className={`${styles.navItem} ${pathname == item.path ? styles.active : ""} ${
                  item.button ? styles.button : ""
                }`}
                href={item.path ? item.path : "/"}
              >
                {item.button && <BsPersonCircle />}
                {item.pageTitle}
                {item.external && <FiExternalLink className={styles.externalLinkIcon} />}
              </Link>
            );
          })}
      </div>
      <div className={styles.hamburgerMenu} onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}>
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
