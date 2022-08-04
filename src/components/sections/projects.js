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

const Projects = () => {
  const data = [
    {
      title: "Personal Blog",
      description: `<p>A simple web app for blogging.</p>`,
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
      description: `<p>A simple project to display my painting.</p>`,
      techs: ["React JS", "Gatsby", "Firebase"],
      imgUrlList: [imgArtGallery],
      imgAlt: "Art gallery screenshot",
      githubUrl: "https://github.com/zulfiqarshafar/art-gallery",
      liveUrl: "https://mzs-art-gallery.vercel.app/",
    },
    {
      title: "Personal Web",
      description: `<p>Personal Web project is the current web you are looking at. <br />I made this web to show my personal info and some projects that I have worked on.</p>`,
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
      <h2 className="section-heading">Some Projects I Have Worked On</h2>
      <div className="content">
        {data.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            handleClickImg={handleClickImg}
          />
        ))}
      </div>

      {isModalOpen && (
        <div
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
        </div>
      )}
    </section>
  );
};

export default Projects;
