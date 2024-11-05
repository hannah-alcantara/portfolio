import Star from "../assets/images/stars.png";


export function Hero() {
  return (
    <>
      <div className='py-12'>
        {/* <div className='w-[420px] h-[300px] bg-[#42239F] rounded-[100%] blur-[90px] absolute z-1 top-[50%] translate-x-[-50%] translate-y-[-50%]' /> */}
        <div className='sm:text-center lg:grid lg:grid-cols-2'>
          <div className='lg:flex lg:flex-col lg:justify-center lg:text-left'>
            {/* <img
              src={Spark}
              className='h-14 w-14 hover:scale-150 transition-all duration-500'
              alt='Star'
            /> */}
            <h1 className='text-5xl font-brastika font-bold leading-relaxed md:text-6xl md:leading-loose'>
              Hello, I'm{" "}
              <span className='underline decoration-light-purple decoration-6'>
                Hannah
              </span>
              .
              <br />
              I'm a Developer.
            </h1>
            <p className='font-spaceGrotesk leading-loose'>
              I'm passionate about developing web applications that combine high
              performance with beautiful designs, creating an experience users
              love.
            </p>
          </div>
          <div className='flex justify-center max-lg:hidden'>
            <img src={Star} alt='Star' />
          </div>
        </div>
      </div>
    </>
  );
}
