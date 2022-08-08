import React, { useState } from "react";
import ProjectItem from "../projectItem";
import imgBlog1 from "../../images/projects/blog-1.png";
import imgBlog2 from "../../images/projects/blog-2.png";
import imgBlog3 from "../../images/projects/blog-3.png";
import imgBlog4 from "../../images/projects/blog-4.png";
import imgBlog5 from "../../images/projects/blog-5.png";
import imgArtGallery from "../../images/projects/art-gallery.png";
import imgPersonalWeb from "../../images/projects/web.png";
import * as styles from "./projects.module.scss";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

const Projects = () => {
  const data = [
    {
      title: "Personal Blog",
      description: `<p>A singe page web app for blogging with clean design using Material UI.
        Create blog posts using TinyMCE editor then store it to MongoDB. </p>`,
      techs: [
        "React JS",
        "Create React App",
        "Material UI",
        "Express",
        "MongoDB",
      ],
      imgUrlList: [imgBlog1, imgBlog2, imgBlog3, imgBlog4, imgBlog5],
      imgAlt: "Personal blog screenshot",
      githubUrl: "https://github.com/zulfiqarshafar/personal-blog",
      liveUrl: "https://personal-blog-mzs.herokuapp.com/",
    },
    {
      title: "Art Gallery",
      description: `<p>A simple project to display painting. Created with Framer Motion for the animation and using
        Firebase to store and fetch data in real time.</p>`,
      techs: ["React JS", "Gatsby", "Firebase"],
      imgUrlList: [imgArtGallery],
      imgAlt: "Art gallery screenshot",
      githubUrl: "https://github.com/zulfiqarshafar/art-gallery",
      liveUrl: "https://mzs-art-gallery.vercel.app/",
    },
    {
      title: "Personal Web",
      description: `<p>Personal Web project is the current web you are looking at. <br />
        I made this web to show my personal info and some projects that I have worked on.
        Also using this project to implement some tools that I am currently learning.</p>`,
      techs: ["React JS", "Gatsby", "Sass"],
      imgUrlList: [imgPersonalWeb],
      imgAlt: "Personal web screenshot",
      githubUrl: "https://github.com/zulfiqarshafar/personal-web",
      liveUrl: "https://zulfiqarshafar.vercel.app/",
    },
    {
      title: "SIMPRO Penelove",
      description: `<p>Built for Mitratel client while working in a team at
        <a href="https://www.ciheul.com" target="__blank" rel="noopener noreferrer">PT. Ciheul Technologies.</a>
        This app is used to facilitate and optimize the assessment of Mitratel's partners. User could input partner's data
        then the app will assess and give final score of the partner. The app will notify the partner by email whether they pass
        the assessment or not.
        </p>`,
      techs: ["JavaScript", "Semantic UI", "Laravel", "MySQL"],
      imgUrlList: [],
      imgAlt: null,
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: "SIMPRO Evelion",
      description: `<p>Built for Mitratel client while working in a team at
        <a href="https://www.ciheul.com" target="__blank" rel="noopener noreferrer">PT. Ciheul Technologies.</a>
        This app is used to evaluate performance of Mitratel's vendors. User could create performance data of the vendor then
        the app will calculate the rating based on the performance.
        </p>`,
      techs: ["JavaScript", "Semantic UI", "Laravel", "MySQL"],
      imgUrlList: [],
      imgAlt: null,
      githubUrl: null,
      liveUrl: null,
    },
  ];

  const [currentImg, setCurrentImg] = useState("");
  const [currentImgList, setCurrentImgList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickImg = (imgList) => {
    setIsModalOpen(true);
    setCurrentImg(imgList[0]);
    setCurrentImgList(imgList);
    document.querySelector("body").style.overflow = "hidden";
  };

  const handleClickModalNav = (value) => {
    let currentIdx = currentImgList.indexOf(currentImg);
    currentIdx = value === "prev" ? currentIdx - 1 : currentIdx + 1;
    currentIdx = currentIdx >= currentImgList.length ? 0 : currentIdx;
    currentIdx = currentIdx < 0 ? currentImgList.length - 1 : currentIdx;
    setCurrentImg(currentImgList[currentIdx]);
  };

  return (
    <section id="projects">
      <LazyMotion features={domAnimation}>
        <m.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
            },
          }}
          viewport={{ once: true, margin: "-170px" }}
        >
          Some Projects I Have Worked On
        </m.h2>
      </LazyMotion>
      <div className="content">
        {data.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            handleClickImg={handleClickImg}
          />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {isModalOpen && (
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className={styles.modal}
              onClick={(event) => {
                if (event.target.classList.contains(styles.modal)) {
                  document.querySelector("body").style.overflow = "auto";
                  setIsModalOpen(false);
                }
              }}
              aria-hidden="true"
            >
              <div className={styles.modalContent}>
                <div className={styles.imageWrapper}>
                  <img src={currentImg} alt="Modal main" />
                </div>

                {currentImgList.length > 1 && (
                  <>
                    <button
                      className={styles.prevBtn}
                      onClick={() => handleClickModalNav("prev")}
                    >
                      &#10094;
                    </button>
                    <button
                      className={styles.nextBtn}
                      onClick={() => handleClickModalNav("next")}
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
