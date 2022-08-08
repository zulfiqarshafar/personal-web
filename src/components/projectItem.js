import React from "react";
import * as styles from "./projectItem.module.scss";
import iconGithub from "../images/icons/github-48.png";
import iconLink from "../images/icons/external-link-48.png";
import iconMultiple from "../images/icons/stack-50.png";
import { LazyMotion, domAnimation, m } from "framer-motion";

const ProjectItem = ({ project, handleClickImg }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        }}
        viewport={{ once: true, margin: "-170px" }}
        className={styles.project}
      >
        {project.imgUrlList.length > 0 && (
          <div className={styles.imageContainer}>
            <button
              className={styles.imageWrapper}
              onClick={() => handleClickImg(project.imgUrlList)}
              onKeyUp={() => handleClickImg(project.imgUrlList)}
            >
              {project.imgUrlList.length > 1 && (
                <span className={styles.imageList}>
                  {project.imgUrlList.length}
                  <img src={iconMultiple} alt="Multiple icon" width="20px" />
                </span>
              )}

              <img
                src={project.imgUrlList[0]}
                alt={project.imgAlt}
                width="450px"
              />
            </button>
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={iconLink} alt="External link" width="28px" />
              </a>
            )}
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default ProjectItem;
