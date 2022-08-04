import React from "react";
import { Head, Nav, Footer } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div id="content">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
