import React from "react";
import styles from "./Home.module.scss";

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
    </div>
  );
};

export default Home;
