export default function Testimonials() {
  return (
    <div className='general-padding py-12 md:py-20'>
      <div className='max-w-[30rem] md:mx-auto md:text-center'>
        <h3 className='section-heading'>What Our Clients Say</h3>

        <p className='max-xxmd:text-sm mt-6'>
          Curious about the experiences of our satisfied clients? Here's what
          they have to say
        </p>
      </div>

      <div className='mt-14 md:mt-20'>
        <div className='grid grid-cols-1 gap-8 xxmd:gap-4'>
          {/* <div className='grid grid-cols-1 xxmd:grid-cols-3 gap-8 xxmd:gap-4'> */}
          {/* {[...Array(3)].map((_, idx) => { */}
          {/* return ( */}
          <div
            // key={idx}
            className='rounded-2xl bg-grey max-w-[35rem] mx-auto dark:bg-secondary/10 px-3 py-4 relative'
          >
            {/* {idx === 0 && ( */}
            <img
              src='/Images/message.png'
              alt='Active Tech Vectors'
              className='w-12 md:w-14 absolute top-0 -translate-y-1/2 left-4'
            />
            {/* )} */}
            <div className='mt-5 mobile:mt-8'>
              <div className='text-sm'>
                Partnering with{' '}
                <span className='font-bold'>Active Tech Ltd</span> on QQPay &
                BuzzMe App was exceptional. Their technical expertise and
                dedication to our vision were outstanding.
              </div>

              <div className='text-sm mt-2'>
                I highly recommend the team to any organization seeking to
                create innovative solutions worldwide.
              </div>

              <div className='text-lg font-semibold mt-4'>Fred</div>
              <div className='max-md:text-sm opacity-50 -mt-1'>
                Founder of QQPay & Buzzme
              </div>
            </div>
          </div>
          {/* ); */}
          {/* })} */}
        </div>
      </div>
    </div>
  );
}
