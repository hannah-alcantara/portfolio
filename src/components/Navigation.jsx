import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navigation() {
  return (
    <div className='m-8 font-spaceGrotesk'>
      <nav className='flex justify-center gap-6'>
        <Link to='/'>Work</Link>
        <Link to='/about'>About</Link>
        <HashLink smooth to='/#contact'>Contacts</HashLink>
      </nav>
    </div>
  );
}
