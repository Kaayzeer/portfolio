import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./Navbar/NavbarComp.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My portfolio" />
        <meta
          name="keywords"
          content="Frontend developer, portfolio of works in related field with Html5, CSS3, Javascript, React.js and Next.js latest technologies"
        />
      </Head>
      <Navbar />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
