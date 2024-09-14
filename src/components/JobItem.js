import { Title } from "../components/Title";

export function JobItem() {
  return (
    <div className='p-8'>
      <Title text='Work' />
      <h2 className='font-spaceGrotesk font-bold text-xl'>
        WebMaster and Graphic Designer
      </h2>
      <p className='font-spaceGrotesk font-light text-sm text-light-purple'>
        Learning Resource Center, CSUN
      </p>
      <ul className='list-disc ml-8 py-4'>
        <li className='font-robotoMono text-slate-200'>
          Managed the regular updating of web content using Drupal and executed
          SEO strategies to drive website traffic
        </li>
      </ul>
    </div>
  );
}
