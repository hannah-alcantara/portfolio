import projects from "../projects.json";
import { Title } from "./Title";

export function Project() {
  return (
    <main className='py-8 relative z-10'>
      <Title text='Projects' />
      {projects.map((project, index) => (
        <div
          key={projects.index}
          className='grid [&:not(:last-child)]:mb-14 lg:grid-cols-2'
        >
          <img src={project.image} alt={project.name} className='w-full' />
          <div className='mt-4 md:mt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-8'>
            <h3 className='font-spaceGrotesk text-2xl md:text-3xl font-bold'>
              {project.name}
            </h3>
            <p className='font-robotoMono text-slate-200 leading-relaxed mt-2 md:text-lg'>
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
