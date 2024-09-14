import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className='m-8 font-spaceGrotesk'>
      <nav className='flex justify-center gap-6'>
        <Link to=''>Work</Link>
        <Link to='/about'>About</Link>
        <Link to=''>Contacts</Link>
      </nav>
    </div>
  );
}
