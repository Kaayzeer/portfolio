import React from "react";

import Hero from "@/components/Pages/Hero.jsx";
import Layout from "@/components/Layout/Layout.jsx";
import Container from "@/components/Layout/Container";

const Landing = () => {
  return (
    <Layout>
      <Container>
        <Hero />
      </Container>
    </Layout>
  );
};

export default Landing;
