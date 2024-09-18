import { Title } from "./Title";
import work from "../work.json";

export function JobItem() {
  return (
    <div className='p-8'>
      <Title text='Work' />
      {work.map((item, index) => (
        <div key={index} className='mb-8'>
          <div className='mb-2'>
            <h2 className='font-spaceGrotesk font-bold text-xl'>
              {item.title}
            </h2>
            <p className='font-spaceGrotesk font-light text-sm text-light-purple'>
              {item.location}
            </p>
          </div>
          <ul className='list-disc ml-8'>
            {item.descriptions.map((description, index) => (
              <li className='font-robotoMono text-slate-200 mb-4'>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
