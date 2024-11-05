import { Title } from "./Title";
import img1 from "../assets/images/Clapper.svg"

const projects =
[
  {
    "name": "Cinemate",
    "description": "A social platform for film enthusiasts to discover movies.",
    "image": "https://placehold.co/600x400"
  },
  {
    "name": "Front-end Mentor",
    "description": "Completed several frontend challenges, showcasing proficiency in modern web technologies.",
    "image": "https://placehold.co/600x400"
  },
  {
    "name": "Recipe App",
    "description": "Find recipes based on the ingredients you have or a better description.",
    "image": "https://placehold.co/600x400"
  }
]


export function Project() {
  return (
    <main className='py-8 relative z-10'>
      <Title text='Projects' />
      <ul className="grid gap-8">
      {projects.map((project,index) => (
        <li key={project.index} className={`lg:flex lg:item-center ${index % 2 === 1 ? '' : 'flex-row-reverse'}`}>
            {/* <li key={project.index} className="grid [&:not(:last-child)]:mb-14 lg:grid-cols-2"> */}
          <img src={project.image} alt={project.name} className='w-1/2 object-cover' />
          <div className='mt-4 md:mt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-8'>
            <h3 className='font-spaceGrotesk text-2xl md:text-3xl font-bold'>
              {project.name}
            </h3>
            <p className='font-robotoMono text-slate-200 leading-relaxed mt-2 md:text-lg'>
              {project.description}
            </p>
          </div>
          </li>
      ))}
      </ul>
    </main>
  );
}
