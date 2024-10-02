import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navigation() {
  const [active, isActive] = useState("");

  // const links = [
  //   { name: "Work", path: "/" },
  //   { name: "About", path: "/about" },
  //   { name: "Contact", path: "/#contact" },
  // ];

  return (
    <header className='px-8'>
      <nav className='max-w-full bg-[rgb(56,56,88)] rounded-3xl'>
        <ul className='font-spaceGrotesk font-medium h-12 flex'>
          {/* try div on top of link instead of active */}
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
          {/* <li
            className={`rounded-3xl w-full h-full flex items-center justify-center transition-all ${
              active === "Work" ? "bg-light-purple" : ""
            }`}
          >
            <Link to='/' onClick={() => isActive("Work")}>
              Work
            </Link>
          </li>
          <li
            className={`rounded-3xl w-full h-full flex items-center justify-center transition-all ${
              active === "About" ? "bg-light-purple" : ""
            }`}
          >
            <Link to='/about' onClick={() => isActive("About")}>
              About
            </Link>
          </li>
          <li className={`w-full h-full flex items-center justify-center`}>
            <HashLink smooth to='/#contact' onClick={() => isActive("Contact")}>
              Contact
            </HashLink>
          </li> */}

          {/* {links.map((link) => (
            <li
              key={link.name}
              className={`rounded-3xl w-full h-full flex items-center justify-center transition-all ${
                active === link.name ? " bg-light-purple " : ""
              }`}
            >
              <Link to={link.path} onClick={() => isActive(link.name)}>
                {link.name}
              </Link>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}
