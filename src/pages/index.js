import Hero from '@/components/Pages/Hero/Hero.jsx';
import Experience from '@/components/Pages/Experience/Experience.jsx';
import Skills from '@/components/Pages/Skills/Skills.jsx';
import About from '@/components/Pages/About/About.jsx';
import Layout from '@/components/Layout/Layout.jsx';

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Experience />
      <About />
    </Layout>
  );
};

export default Landing;
