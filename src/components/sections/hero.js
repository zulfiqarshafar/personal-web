import React from "react";
import * as styles from "./hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      }}
    >
      <div>
        <h1 className={styles.name}>Muhammad Zulfiqar Shafar</h1>
      </div>
      <div>
        <h2 className={styles.description}>Web Developer</h2>
      </div>
    </motion.section>
  );
};

export default Hero;
