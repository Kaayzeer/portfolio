import React from "react";
import Head from "next/head";
import { Text } from "@nextui-org/react";
import { Ysabeau } from "next/font/google";

const ysabeau = Ysabeau({ subsets: ["latin"] });

import Navbar from "./Navbar/NavbarComp.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nikolas Portfolio</title>
        <meta name="description" content="My portfolio" />
        <meta
          name="keywords"
          content="Frontend developer, portfolio of works in related field with Html5, CSS3, JavaScript, Typescript, React.js and Next.js latest technologies"
        />
      </Head>
      <Navbar />
      <Text
        as="main"
        css={{ background: "$myPrimary" }}
        className={`${ysabeau.className}`}
      >
        {children}
      </Text>
      <Footer />
    </>
  );
};

export default Layout;
