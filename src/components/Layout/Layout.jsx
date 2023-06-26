import React from "react";
import Head from "next/head";
import { Text } from "@nextui-org/react";
import { Ysabeau } from "next/font/google";

const ysabeau = Ysabeau({ subsets: ["latin"] });

import Navbar from "./Navbar/NavbarComp.jsx";
import Footer from "./Footer/Footer.jsx";
import { STRING_TYPES } from "../strings.js";
import * as styled from "./styles.js";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{STRING_TYPES.HEAD_TITLE}</title>
        <meta name="description" content={STRING_TYPES.HEAD_DESCRIPTION} />
        <meta name="keywords" content={STRING_TYPES.HEAD_KEYWORDS} />
      </Head>
      <Navbar />
      <Text as="main" css={styled.Main} className={`${ysabeau.className}`}>
        {children}
      </Text>
      <Footer />
    </>
  );
};

export default Layout;
