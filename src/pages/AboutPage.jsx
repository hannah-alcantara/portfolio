import { Education } from "../components/Education";
import { JobItem } from "../components/JobItem";
import { Profile } from "./../components/Profile";
import { Skills } from "./../components/Skills";
import { Contact } from "./../components/Contact";

export const AboutPage = () => {
  return (
    <div>
      <Profile />
      <hr />
      <JobItem />
      <hr />
      <Education />
      <hr />
      <Skills />
      <hr />
      <Contact />
      <hr />
    </div>
  );
};
