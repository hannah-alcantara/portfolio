import github from "../assets/icons/icon-github.svg";
import feMentor from "../assets/icons/frontend-mentor.svg";
import linkedin from "../assets/icons/icon-linkedin.svg";

export function Footer() {
  return (
    <>
      <footer className='p-8 flex flex-col items-center gap-6'>
        <p className='font-spaceGrotesk font-bold text-xl'>hannahalcantara</p>
        <ul className='flex gap-6'>
          <li>
            <a href='https://github.com/hannah-alcantara'>
              <img src={github} alt='Github Link' />
            </a>
          </li>
          <li>
            <a href='https://github.com/hannah-alcantara'>
              <img src={linkedin} alt='Linkedin Link' />
            </a>
          </li>
          <li>
            <a href='https://github.com/hannah-alcantara'>
              <img src={feMentor} alt='Frontend Mentor Link' className='w-6' />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
