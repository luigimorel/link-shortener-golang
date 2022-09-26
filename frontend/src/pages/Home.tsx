import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { HeroSection } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Form />
      <Features />
      <Newsletter/>
      <Footer />
    </>
  );
};

export default Home;
