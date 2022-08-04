import React from "react";
import * as styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
