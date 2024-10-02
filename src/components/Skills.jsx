import React from "react";
import { Title } from "./Title";

export const Skills = () => {
  const technical = [
    "React.js",
    "Javascript",
    "Node.js",
    "HTML",
    "CSS",
    "Responsive Design",
    "Mobile-first Development",
  ];
  const tools = [
    "Git",
    "Canva",
    "WordPress",
    "Drupal",
    "Squarespace",
    "Sketch",
    "Figma",
    "MarvelApp",
    "UX/UI Design",
    "Adobe Creative Cloud",
  ];

  const interests = [
    "Arts and Craft",
    "Fashion",
    "Crochet",
    "Films",
    "Photography",
    "Travel",
    "Interior Design",
    "Fluent in Tagalog",
  ];

  return (
    <div className='py-8 pr-[0.7rem]'>
      <Title text='Skills' />
      <div className='grid gap-6'>
        <div className='max-w-full px-5 py-6 bg-[#202030] shadow-[10px_12px_0_0_rgb(66,35,159)] border border-white rounded-lg drop-shadow-lg'>
          <p className='text-2xl font-spaceGrotesk font-medium mb-4'>
            Languages & Frameworks
          </p>
          <ul className='flex flex-wrap gap-3'>
            {technical.map((item, index) => (
              <li
                key={index}
                className='max-w-fit bg-light-purple text-white font-robotoMono font-light text-sm px-2 py-1 rounded-md shadow-lg'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='max-w-full px-5 py-6 bg-[#202030] shadow-[10px_12px_0_0_rgb(66,35,159)] border border-white rounded-lg drop-shadow-lg'>
          <p className='text-2xl font-spaceGrotesk font-medium mb-4'>Tools</p>
          <ul className='flex flex-wrap gap-3'>
            {tools.map((item, index) => (
              <li
                key={index}
                className='max-w-fit bg-light-purple text-white font-robotoMono font-light text-sm px-2 py-1 rounded-md shadow-lg'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='max-w-full px-5 py-6 bg-[#202030] shadow-[10px_12px_0_0_rgb(66,35,159)] border border-white rounded-lg drop-shadow-lg'>
          <p className='text-2xl font-spaceGrotesk font-medium mb-4'>
            Interests
          </p>
          <ul className='flex flex-wrap gap-3'>
            {interests.map((item, index) => (
              <li
                key={index}
                className='max-w-fit bg-light-purple text-white font-robotoMono font-light text-sm px-2 py-1 rounded-md shadow-lg'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
