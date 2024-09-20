import { Hero } from "../components/Hero";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <hr />
      <Project />
      <hr />
      <Contact />
      <hr />
    </>
  );
};
