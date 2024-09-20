import { Title } from "./Title";

export function Contact() {
  return (
    <div>
      <section id='contact' className='p-8'>
        <div className='text-center mb-8'>
          <Title text='Contact Me' />
          <p className='font-robotoMono text-sm leading-loose text-slate-200'>
            I would love to hear your ideas and how I could help! Please fill in
            the form, and I will get back to you as soon as possible.
          </p>
        </div>

        <form className='my-8 max-w-md mx-auto'>
          <div className='relative z-0 w-full mb-10'>
            <input
              type='name'
              name='floating_name'
              id='floating_name'
              className='block py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none focus:outline-none focus:border-light-purple peer'
              placeholder=' '
              required
            />
            <label
              for='floating_name'
              className='peer-focus:font-xl absolute text-sm text-white font-robotoMono duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-light-purple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-10'>
            <input
              type='email'
              name='floating_email'
              id='floating_email'
              className='block py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none focus:outline-none focus:border-light-purple peer'
              placeholder=' '
              required
            />
            <label
              for='floating_email'
              className='peer-focus:font-xl absolute text-sm text-white font-robotoMono duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-light-purple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>

          <div className='relative z-0 w-full mb-10'>
            <textarea
              rows='4'
              type='message'
              name='floating_message'
              id='floating_message'
              className='block py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white appearance-none focus:outline-none focus:border-light-purple peer'
              placeholder=' '
              required
            />
            <label
              for='floating_message'
              className='peer-focus:font-xl absolute text-sm text-white font-robotoMono duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-light-purple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Message
            </label>
          </div>

          <button
            type='submit'
            className='text-white bg-transparent font-robotoMono rounded-3xl text-sm w-full px-5 py-2.5 text-center border border-white hover:border-light-purple hover:text-light-purple focus:ring-4 focus:outline-none focus:ring-light-purple'
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
