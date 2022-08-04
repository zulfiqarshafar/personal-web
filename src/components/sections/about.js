import React from "react";
import * as styles from "./about.module.scss";
import personal from "../../images/personal.jpeg";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-heading">About Me</h2>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            I am a Web Developer with over three years of experience and
            currently focusing on frontend development but also learning some of
            backend development.
          </p>
          <p>
            Currently I am learning and building a few personal projects using
            ReactJS, ExpressJS and Sass. While also learning more about new
            technologies, UI design, and software engineering.
          </p>
          <p>
            I have experience working in a team as a Software Engineer with role
            including designing interface, developing and maintaining web
            applications based on user requirements, deploying application to
            production, and writing technical documentation.
          </p>
          <p>Some of my skills including:</p>
          <ul className={styles.skillList}>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={personal} alt="About me picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
