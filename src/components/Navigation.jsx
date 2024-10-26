import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navigation() {
  const [active, isActive] = useState("");
  return (
    <div className='max-lg:hidden'>
      <div className='grid grid-cols-2 pb-14 font-spaceGrotesk font-medium'>
        <p>hannahalcantara</p>
        <ul className='flex justify-end gap-20'>
          <li className='hover:text-light-purple'>
            <Link to='/' onClick={() => isActive("Work")}>
              Work
            </Link>
          </li>
          <li className='hover:text-light-purple'>
            <Link to='/about' onClick={() => isActive("About")}>
              About
            </Link>
          </li>
          <li className='hover:text-light-purple'>
            <HashLink smooth to='/#contact' onClick={() => isActive("Contact")}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
