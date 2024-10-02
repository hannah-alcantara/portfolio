import { Title } from "./Title";

export function Education() {
  return (
    <div className='py-8'>
      <Title text='Education' />
      <div>
        <h3 className='font-spaceGrotesk font-bold text-xl'>
          Bachelors of Science in Computer Science
        </h3>
        <p className='font-spaceGrotesk font-light text-sm text-light-purple'>
          California State University, Northridge
        </p>
      </div>
    </div>
  );
}
