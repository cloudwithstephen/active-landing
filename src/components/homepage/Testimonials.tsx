import { testimonials } from '../../constants/testimonials';

export default function Testimonials() {
  return (
    <div className='general-padding py-12 md:py-20' id='testimonials'>
      <div className='max-w-[30rem] md:mx-auto md:text-center'>
        <h3 className='section-heading'>What Our Clients are Saying...</h3>

        <p className='max-xxmd:text-sm mt-6'>
        See how we’ve helped businesses thrive. Read our clients' testimonials to learn about their success with our team...
        </p>
      </div>

      <div className='mt-14 md:mt-20'>
        <div className='grid grid-cols-1 xxmd:grid-cols-2 gap-8 xxmd:gap-4 max-w-[70rem] mx-auto'>
          {/* <div className='grid grid-cols-1 xxmd:grid-cols-3 gap-8 xxmd:gap-4'> */}
          {testimonials.map((testimony, idx) => {
            return (
              <div
                key={idx}
                className='rounded-2xl bg-grey   dark:bg-secondary/10 px-3 py-4 relative'
              >
                  <img
                    src='/Images/message.png'
                    alt='Active Tech Vectors'
                    className='w-12 md:w-14 absolute top-0 -translate-y-1/2 left-4'
                  />
                <div className='mt-5 mobile:mt-8'>
                  {testimony.testimony.map((item) => {
                    return <div className='text-sm mb-2'>{item}</div>;
                  })}

                  <div className='text-lg font-semibold mt-4'>
                    {testimony.name}
                  </div>
                  <div className='max-md:text-sm opacity-50 -mt-1'>
                    {testimony.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
