import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about_us}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div>
          <h1>Empowering Churches Through Seamless Management</h1>
          <p>At ShepherdCMS, we combine innovation with faith to support ministries worldwide.</p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className={styles.mission}>
        <h2>Our Mission and Values</h2>
        <p>Our mission is to simplify church management and empower leaders to focus on ministry.</p>
        <div className={styles.listContainer}>
          <ul>
            <li>
              <strong>Faith-Driven:</strong> Rooted in Christian values.
            </li>
            <li>
              <strong>User-Focused:</strong> Designed with churches in mind.
            </li>
            <li>
              <strong>Innovation-Oriented:</strong> Leveraging technology to support ministry.
            </li>
          </ul>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.story}>
        <p>
          ShepherdCMS was created because we believe that Christian products should be Christian-run. Too often, large
          companies lose sight of who they&apos;re serving and the deeper purpose behind their work.
          <br />
          <br />
          As Christians, we understand the profound importance of ministry for pastors—the responsibility, the
          challenges, and the desire to serve. While their ministry may not be our ministry, we want pastors to know
          that choosing ShepherdCMS means a commitment to working alongside them to support their mission. Your success
          in ministry is our purpose in providing this platform.
        </p>
      </section>

      {/* Meet the Team */}
      <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.team_grid}>
          <div className={styles.team_member}>
            <Image
              src="https://res.cloudinary.com/wulfdev/image/upload/v1735740595/headshot_swrcpu.jpg"
              alt="Team Member"
              width={250}
              height={250}
              className={styles.team_member_image}
            />
            <div className={styles.member_info}>
              <h3>Austin</h3>
              <p>Founder and Developer</p>
            </div>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className={styles.testimonials}>
        <h2>What People Are Saying</h2>
        <blockquote>
          <p>"ShepherdCMS has transformed how we manage our church operations!"</p>
          <cite>- Pastor John Doe</cite>
        </blockquote>
      </section> */}

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Join Us on Our Mission</h2>
        <p>Signup today and start your 2-Week Free trial!</p>
        <a href="https://auth.shepherdcms.org/signup">Signup</a>
      </section>
    </div>
  );
};

export default About;
