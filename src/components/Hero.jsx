import { Backdrop } from "./Backdrop";

export function Hero() {
  return (
    <>
      <header className='px-8 py-12'>
        <Backdrop className='top-[50%] translate-x-[-70%] translate-y-[-50%]' />
        <div className='relative z-10'>
          <h1 className='text-5xl font-brastika font-bold leading-relaxed'>
            Hello, I'm{" "}
            <span className='underline decoration-light-purple decoration-4'>
              Hannah
            </span>
            .
            <br />
            I'm a Developer.
          </h1>
          <h2 className='font-spaceGrotesk leading-loose'>
            I'm passionate about developing web applications that combine high
            performance with beautiful designs, creating an experience users
            love.
          </h2>
        </div>
      </header>
    </>
  );
}
