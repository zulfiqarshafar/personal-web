import * as React from "react";
import {
  Layout,
  Hero,
  About,
  Experiences,
  Projects,
  Contact,
} from "../components";
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <About />
        {/* <Experiences /> */}
        <Projects />
        {/* <Contact /> */}
      </main>
    </Layout>
  );
};

export default IndexPage;
