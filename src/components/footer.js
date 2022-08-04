import React from "react";
import * as styles from "./footer.module.scss";
import iconGithub from "../images/icons/github-48.png";
import iconInstagram from "../images/icons/instagram-48.png";
import iconLinkedin from "../images/icons/linkedin-48.png";

const Footer = () => {
  return (
    <footer>
      <p className={styles.email}>zul.shafar@gmail.com</p>
      <div className={styles.socials}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-zulfiqar-shafar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={iconLinkedin} alt="LinkedIn" width="30px" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zulfiqarshafar"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={iconGithub} alt="Github" width="28px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zulfiqarshafar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={iconInstagram} alt="Instagram" width="28px" />
            </a>
          </li>
        </ul>
      </div>
      <p>2022 Muhammad Zulfiqar Shafar</p>
    </footer>
  );
};

export default Footer;
