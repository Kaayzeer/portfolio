import Hero from "@/components/Pages/Hero/Hero.jsx";
import Experience from "@/components/Pages/Experience/Experience.jsx";
import Skills from "@/components/Pages/Skills/Skills.jsx";
import Layout from "@/components/Layout/Layout.jsx";
import Container from "@/components/Layout/Container";

const Landing = () => {
  return (
    <Layout>
      <Container>
        <Hero />
      </Container>
      <Container cols="1">
        <Skills />
      </Container>
      <Container>
        <Experience />
      </Container>
    </Layout>
  );
};

export default Landing;
