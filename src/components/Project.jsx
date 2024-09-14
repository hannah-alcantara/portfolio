import projects from "../projects.json";
import { Title } from "./Title";

export function Project() {
  return (
    <>
      <main className='p-8'>
        <Title text='Projects' />
        {projects.map((project) => (
          <div className='grid [&:not(:last-child)]:mb-16'>
            <img src={project.image} alt='' />
            <div className='mt-4'>
              <h3 className='font-spaceGrotesk text-2xl font-bold'>
                {project.name}
              </h3>
              <p className='font-robotoMono text-slate-200 leading-relaxed mt-2'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </main>
      <hr className='mx-8 h-px bg-light-purple border-0' />
    </>
  );
}
