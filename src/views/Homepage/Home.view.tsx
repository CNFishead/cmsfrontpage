import React from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <span className={styles.dimContainer}></span>
        <div className={styles.contentContainer}>
          <h1 className={styles.header}>
            ShepherdCMS is an online platform designed for pastors and their congregations, created by Christians.
          </h1>
          <h4 className={styles.subheader}>Simplify Church Management with ShepherdCMS</h4>
          <p className={styles.headerText}>
            ShepherdCMS is the ultimate church management solution designed for ministries seeking to streamline their
            operations and focus on what truly matters—building their community and spreading the Word. With
            ShepherdCMS, you'll enjoy a suite of tools tailored to meet the unique needs of your church. From seamless
            digital check-ins for visitors and members to efficient event planning, volunteer coordination, and church
            membership tracking, ShepherdCMS empowers your ministry to thrive.
          </p>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.pointsContainer}`}>
        {/* three different points */}
        <div className={styles.point}>
          {/* icon */}
          <Image
            width={75}
            height={75}
            src="https://res.cloudinary.com/wulfdev/image/upload/c_thumb,w_200,g_face/v1735241866/powerful-icon-10_kdsamx.png"
            alt="icon-1"
            className={styles.pointIcon}
          />
          {/* header */}
          <h3 className={styles.pointHeader}>Simple but Powerful</h3>
          <p className={styles.pointText}>
            ShepherdCMS is crafted for simplicity in use yet robust in functionality, aiming to provide a service that
            supports the growth of your ministry.
          </p>
        </div>
        <div className={styles.point}>
          {/* icon */}
          <Image
            width={75}
            height={75}
            src="https://res.cloudinary.com/wulfdev/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735241860/connectivity-icon-1_b2y5hp.png"
            alt="icon-2"
            className={styles.pointIcon}
          />
          {/* header */}
          <h3 className={styles.pointHeader}>Connect to your Congregants</h3>
          <p className={styles.pointText}>
            The Simple Check-In app enables automatic management of your members! As members check in, you're alerted;
            with our connectivity tools, you can receive prayer requests, volunteer sign-ups, and event registrations,
            making it easier for your members to connect with the body of Christ.
          </p>
        </div>
        <div className={styles.point}>
          {/* icon */}
          <Image
            width={75}
            height={75}
            src="https://res.cloudinary.com/wulfdev/image/upload/c_thumb,w_200,g_face/v1735241852/stack-of-money-icon-1_ay0zvi.png"
            alt="icon-3"
            className={styles.pointIcon}
          />
          {/* header */}
          <h3 className={styles.pointHeader}>Affordable</h3>
          <p className={styles.pointText}>
            Other platforms may be costly, but ShepherdCMS is tailored to let you choose the features that are most
            important to you and your church, while disregarding those you don't need. This customization keeps your
            rates ideal for your church, saving you money and contributing to financial growth.
          </p>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.boxContainer}`}>
        <div className={styles.subcontainer}>
          {/* hero image */}
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241844/DALL_E-2024-12-08-09.42.20-An-illustration-of-a-serene-church-scene-showcasing-diverse-people-in-a-community-setting.-The-focus-is-on-modern-technology-blending-with-traditiona_awgnl8.webp"
            alt="hero-image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.boxHeader}>Built for Ministry</h2>
          <p className={styles.boxText}>
            We understand the unique challenges churches face. ShepherdCMS is purpose-built to lighten the
            administrative load, so your team can focus on ministry.
          </p>
          <Link href="/features">
            <button className={styles.boxButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.boxContainer}`}>
        <div className={styles.subcontainer}>
          {/* hero image */}
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241844/DALL_E-2024-12-08-09.42.20-An-illustration-of-a-serene-church-scene-showcasing-diverse-people-in-a-community-setting.-The-focus-is-on-modern-technology-blending-with-traditiona_awgnl8.webp"
            alt="hero-image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.boxHeader}>Time-Saving Tools</h2>
          <p className={styles.boxText}>
            Simplify how you manage your congregation, events, and volunteers. Less time on logistics means more time
            making an impact.
          </p>
          <Link href="/features">
            <button className={styles.boxButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.boxContainer}`}>
        <div className={styles.subcontainer}>
          {/* hero image */}
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241817/DALL_E-2024-12-08-09.48.23-An-illustration-of-a-family-sitting-in-a-church-pew-using-a-mobile-app-to-check-in.-The-family-includes-two-parents-and-two-children-smiling-and-enga_jxk5sd.webp"
            alt="hero-image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.boxHeader}>Member-Centric Approach</h2>
          <p className={styles.boxText}>
            Ensure everyone feels welcome and connected with features like QR code check-ins, making the process easy
            and engaging for visitors and regulars alike.
          </p>
          <Link href="/features">
            <button className={styles.boxButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.boxContainer}`}>
        <div className={styles.subcontainer}>
          {/* hero image */}
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/wulfdev/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735241803/DALL_E-2024-12-08-10.02.00-An-illustration-depicting-a-warm-and-approachable-customer-support-scenario.-A-smiling-individual-sits-at-a-desk-with-a-computer-engaging-with-a-chur_tgcopf.webp"
            alt="hero-image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.subcontainer}>
          <h2 className={styles.boxHeader}>Unparralled support!</h2>
          <p className={styles.boxText}>
            We take our mission very seriously, ShepherdCMS is backed by a dedicated creator who understands the
            importance of ministry tools that work seamlessly. As fellow Christians, we’re committed to providing
            unmatched, personalized support to ensure your ministry thrives without disruptions.
          </p>
          <Link href="/features">
            <button className={styles.boxButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={`${styles.infoContainer} ${styles.specialContainer}`}>
        <h2 className={styles.specialHeader}>Early Adopters Special!</h2>
        <p className={styles.specialText}>
          ShepherdCMS is still in its initial phase rollout, There's bound to be bugs and a lack of initial features,
          but we're working everyday to bring you a product worthy of your mission and appreciation. We won’t stop until
          ShepherdCMS is a product that glorifies the kingdom of God!
        </p>
        <p className={styles.specialText}>
          By joining today, you lock in our <strong>Early Adopters Special</strong> (When you sign up for a year
          subscription) — a permanent discounted rate and access to all future updates for free.
        </p>
      </div>
      <div className={`${styles.infoContainer} ${styles.callToActionContainer}`}>
        <div className={styles.subcontainer}>
          <h2 className={styles.boxHeader}>Join the ShepherdCMS Community Today!</h2>
          <p className={styles.boxText}>
            Whether you’re a small congregation or a growing ministry, ShepherdCMS is your trusted partner in leading
            and managing your church effectively. Start now and experience the difference of having a tool that’s as
            dedicated to your mission as you are.
          </p>
          <p className={styles.boxText}>
            <strong>ShepherdCMS</strong> — Because ministry deserves more than spreadsheets.
          </p>
          <Link href="https://auth.shepherdcms.org/signup">
            <button className={styles.boxButton}>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
