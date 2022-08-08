import React from "react";
import * as styles from "./hero.module.scss";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="hero"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <div>
          <h1 className={styles.name}>Muhammad Zulfiqar Shafar</h1>
        </div>
        <div>
          <h2 className={styles.description}>Web Developer</h2>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Hero;
