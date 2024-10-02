export function Hero() {
  return (
    <>
      <div className='py-12'>
        {/* <div className='w-[420px] h-[300px] bg-[#42239F] rounded-[100%] blur-[90px] absolute z-1 top-[50%] translate-x-[-50%] translate-y-[-50%]' /> */}
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
      </div>
    </>
  );
}
