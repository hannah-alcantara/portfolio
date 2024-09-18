import Image from "../assets/images/profile-5.jpg";
import { Education } from "../components/Education";
import { JobItem } from "../components/JobItem";

export const AboutPage = () => {
  return (
    <div>
      <div className='p-8'>
        <div className='flex justify-center pb-12'>
          <div className='shadow-[10px_10px_0_0_rgb(66,35,159),10px_10px_0_2px_white] rounded-lg w-60'>
            <img
              src={Image}
              alt='Hannah Alcantara'
              className='border-2 rounded-xl w-60 z-10'
            />
          </div>
        </div>
        <h1 className='text-5xl font-brastika font-bold leading-relaxed text-center'>
          Nice to meet you!
          <br />
          I'm {""}
          <span className='underline decoration-light-purple decoration-4'>
            Hannah
          </span>
          .
        </h1>
      </div>
      <hr className='mx-8 h-px bg-light-purple border-0' />
      <JobItem />
      <hr className='mx-8 h-px bg-light-purple border-0' />
      <Education />
    </div>
  );
};
