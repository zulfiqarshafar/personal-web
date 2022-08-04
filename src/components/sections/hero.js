import React from "react";
import * as styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1 className={styles.name}>Muhammad Zulfiqar Shafar</h1>
      </div>
      <div>
        <h2 className={styles.description}>Web Developer</h2>
      </div>
    </section>
  );
};

export default Hero;
