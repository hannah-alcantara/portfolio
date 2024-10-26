import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function MobileNavigation() {
  const [active, isActive] = useState("");
  return (
    <div className='lg:hidden'>
      <header className='px-8'>
        <nav className='max-w-full bg-[rgb(56,56,88)] rounded-3xl'>
          <ul className='font-spaceGrotesk font-medium h-12 flex'>
            <li className='rounded-3xl w-full h-full flex items-center justify-center transition-all'>
              <Link to='/' onClick={() => isActive("Work")}>
                Work
              </Link>
            </li>
            <li className='rounded-3xl w-full h-full flex items-center justify-center transition-all'>
              <Link to='/about' onClick={() => isActive("About")}>
                About
              </Link>
            </li>
            <li className='rounded-3xl w-full h-full flex items-center justify-center transition-all'>
              <HashLink
                smooth
                to='/#contact'
                onClick={() => isActive("Contact")}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
