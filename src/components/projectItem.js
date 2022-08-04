import React, { useState } from "react";
import * as styles from "./projectItem.module.scss";
import iconGithub from "../images/icons/github-48.png";
import iconLink from "../images/icons/external-link-48.png";

const ProjectItem = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(project.imgUrlList[0]);

  return (
    <div className={styles.project}>
      {project.imgUrlList.length > 0 && (
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={currentImg} alt={project.imgAlt} width="100%" />
          </div>
          {/* <div className={styles.imageNavContainer}>Bullets</div> */}
        </div>
      )}
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <ul className={styles.projectTechs}>
          {project.techs.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className={styles.projectLinks}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={iconGithub} alt="Github" width="26px" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              <img src={iconLink} alt="External link" width="28px" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
